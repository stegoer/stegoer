import UpdateForm from "@features/account/components/update.form";

import { Modal } from "@mantine/core";

import type { User } from "@graphql/generated/codegen.generated";
import type { Dispatch, SetStateAction } from "react";

type Props = {
  user: User;
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
};

const UpdateModal = ({ user, opened, setOpened }: Props): JSX.Element => {
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title={`Update ${user.username} account`}
    >
      <UpdateForm user={user} />
    </Modal>
  );
};

export default UpdateModal;