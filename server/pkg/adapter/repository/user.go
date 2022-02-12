package repository

import (
	"context"

	"github.com/kucera-lukas/stegoer/ent"
	"github.com/kucera-lukas/stegoer/ent/schema/ulid"
	"github.com/kucera-lukas/stegoer/ent/user"
	"github.com/kucera-lukas/stegoer/graph/generated"
	"github.com/kucera-lukas/stegoer/pkg/adapter/controller"
	"github.com/kucera-lukas/stegoer/pkg/entity/model"
	"github.com/kucera-lukas/stegoer/pkg/util"
)

// NewUserRepository returns implementation of the controller.User interface.
func NewUserRepository(client *ent.Client) controller.User { //nolint:ireturn
	return &userRepository{client: client}
}

type userRepository struct {
	client *ent.Client
}

func (r *userRepository) GetByID(
	ctx context.Context,
	id ulid.ID,
) (*model.User, *model.Error) {
	entUser, err := r.client.User.Query().Where(user.IDEQ(id)).Only(ctx)
	if err != nil {
		return nil, model.NewDBError(ctx, err.Error())
	}

	return entUser, nil
}

func (r *userRepository) GetByEmail(
	ctx context.Context,
	email string,
) (*model.User, *model.Error) {
	entUser, err := r.client.User.Query().Where(user.EmailEQ(email)).Only(ctx)
	if err != nil {
		return nil, model.NewDBError(ctx, err.Error())
	}

	return entUser, nil
}

func (r *userRepository) Create(
	ctx context.Context,
	input generated.NewUser,
) (*model.User, *model.Error) {
	hashedPassword, err := util.HashPassword(input.Password)
	if err != nil {
		return nil, model.NewValidationError(ctx, err.Error())
	}

	entUser, err := r.client.User.
		Create().
		SetName(input.Username).
		SetEmail(input.Email).
		SetPassword(hashedPassword).
		Save(ctx)
	if err != nil {
		return nil, model.NewDBError(ctx, err.Error())
	}

	return entUser, nil
}

func (r *userRepository) Update(
	ctx context.Context,
	entUser model.User,
	input generated.UpdateUser,
) (*model.User, *model.Error) {
	update := entUser.Update()

	if input.Username != nil {
		update = update.SetName(*input.Username)
	}

	if input.Email != nil {
		update = update.SetEmail(*input.Email)
	}

	if input.Password != nil {
		hashedPassword, err := util.HashPassword(*input.Password)
		if err != nil {
			return nil, model.NewValidationError(ctx, err.Error())
		}

		update = update.SetPassword(hashedPassword)
	}

	updatedEntUser, err := update.Save(ctx)
	if err != nil {
		return nil, model.NewDBError(ctx, err.Error())
	}

	return updatedEntUser, nil
}
