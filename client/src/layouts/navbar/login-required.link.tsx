import NotificationButton from "@components/buttons/notification.button";
import useUser from "@hooks/user.hook";
import loginRequiredNotification from "@layouts/navbar/login-required.notification";

import { LockClosedIcon, LockOpen1Icon } from "@modulz/radix-icons";
import Link from "next/link";
import { useRouter } from "next/router";

import type { FC } from "react";

type Props = {
  to: string;
};

const LoginRequiredLink: FC<Props> = ({ children, to }) => {
  const router = useRouter();
  const [user] = useUser();

  const content = user ? (
    <>
      <LockOpen1Icon />
      {children}
    </>
  ) : (
    <NotificationButton
      notificationProps={loginRequiredNotification(children, to)}
    >
      {<LockClosedIcon />}
      {children}
    </NotificationButton>
  );

  return (
    <Link href={user ? to : router.pathname}>
      <a>{content}</a>
    </Link>
  );
};

export default LoginRequiredLink;