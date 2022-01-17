package model

import (
	"context"
	"github.com/99designs/gqlgen/graphql"
	"github.com/vektah/gqlparser/v2/gqlerror"
)

const (
	// DBError is error code of database.
	DBError = "DB_ERROR"
	// GraphQLError is error code of graphql.
	GraphQLError = "GRAPHQL_ERROR"
	// AuthorizationError is error code of authorization error.
	AuthorizationError = "AUTHORIZATION_ERROR"
	// NotFoundError is error code of not found.
	NotFoundError = "NOT_FOUND_ERROR"
	// ValidationError is error code of validation.
	ValidationError = "VALIDATION_ERROR"
	// BadRequestError is error code of request.
	BadRequestError = "BAD_REQUEST_ERROR"
	// InternalServerError is error code of server error.
	InternalServerError = "INTERNAL_SERVER_ERROR"
)

// Error represents gqlerror.Error type.
type Error = gqlerror.Error

// NewDBError returns error message related to database.
func NewDBError(ctx context.Context, message string) *Error {
	return newError(ctx, message, map[string]interface{}{"code": DBError})
}

// NewGraphQLError returns error message related to graphql.
func NewGraphQLError(ctx context.Context, message string) *Error {
	return newError(ctx, message, map[string]interface{}{"code": GraphQLError})
}

// NewAuthorizationError returns error message related to authorization.
func NewAuthorizationError(ctx context.Context, message string) *Error {
	return newError(ctx, message, map[string]interface{}{"code": AuthorizationError})
}

// NewNotFoundError returns error message related to not found.
func NewNotFoundError(ctx context.Context, message string, value interface{}) *Error {
	return newError(ctx, message, map[string]interface{}{"code": NotFoundError, "value": value})
}

// NewBadRequestError returns error message related to bad request.
func NewBadRequestError(ctx context.Context, message string) *Error {
	return newError(ctx, message, map[string]interface{}{"code": BadRequestError})
}

// NewValidationError returns error message related to validation.
func NewValidationError(ctx context.Context, message string, value interface{}) *Error {
	return newError(ctx, message, map[string]interface{}{"code": ValidationError, "value": value})
}

// NewInternalServerError returns error message related to internal server error.
func NewInternalServerError(ctx context.Context, message string) *Error {
	return newError(ctx, message, map[string]interface{}{"code": InternalServerError})
}

// newError creates a new Error.
func newError(ctx context.Context, message string, extensions map[string]interface{}) *Error {
	return &gqlerror.Error{
		Path:       graphql.GetPath(ctx),
		Message:    message,
		Extensions: extensions,
	}
}
