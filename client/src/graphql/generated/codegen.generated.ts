// eslint-disable-next-line import/no-named-as-default
import gql from "graphql-tag";
import * as Urql from "urql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// Generated on 2022-03-09T10:50:16+01:00

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Cursor: string;
  Time: Date;
  /** The `Upload` scalar type represents a multipart file upload. */
  Upload: File;
};

export type Auth = {
  __typename?: `Auth`;
  expires: Scalars[`Time`];
  token: Scalars[`String`];
};

export enum Channel {
  Blue = `BLUE`,
  Green = `GREEN`,
  GreenBlue = `GREEN_BLUE`,
  Red = `RED`,
  RedBlue = `RED_BLUE`,
  RedGreen = `RED_GREEN`,
  RedGreenBlue = `RED_GREEN_BLUE`,
}

export type CreateUserPayload = {
  __typename?: `CreateUserPayload`;
  auth: Auth;
  user: User;
};

export type DecodeImageInput = {
  channel: Channel;
  file: Scalars[`Upload`];
  lsbUsed: Scalars[`Int`];
};

export type DecodeImagePayload = {
  __typename?: `DecodeImagePayload`;
  message: Scalars[`String`];
};

export type EncodeImageInput = {
  channel: Channel;
  file: Scalars[`Upload`];
  lsbUsed: Scalars[`Int`];
  message: Scalars[`String`];
};

export type EncodeImagePayload = {
  __typename?: `EncodeImagePayload`;
  file: FileType;
  image: Image;
};

export type FileType = {
  __typename?: `FileType`;
  content: Scalars[`String`];
  name: Scalars[`String`];
};

export type Image = Node & {
  __typename?: `Image`;
  channel: Channel;
  createdAt: Scalars[`Time`];
  id: Scalars[`ID`];
  lsbUsed: Scalars[`Int`];
  message: Scalars[`String`];
  updatedAt: Scalars[`Time`];
};

export type ImageEdge = {
  __typename?: `ImageEdge`;
  cursor: Scalars[`Cursor`];
  node: Image;
};

export type ImageOrder = {
  direction: OrderDirection;
  field?: InputMaybe<ImageOrderField>;
};

export enum ImageOrderField {
  CreatedAt = `CREATED_AT`,
  UpdatedAt = `UPDATED_AT`,
}

/**
 * ImageWhereInput is used for filtering Image objects.
 * Input was generated by ent.
 */
export type ImageWhereInput = {
  and?: InputMaybe<Array<ImageWhereInput>>;
  /** channel field predicates */
  channel?: InputMaybe<Channel>;
  channelIn?: InputMaybe<Array<Channel>>;
  channelNEQ?: InputMaybe<Channel>;
  channelNotIn?: InputMaybe<Array<Channel>>;
  /** created_at field predicates */
  createdAt?: InputMaybe<Scalars[`Time`]>;
  createdAtGT?: InputMaybe<Scalars[`Time`]>;
  createdAtGTE?: InputMaybe<Scalars[`Time`]>;
  createdAtIn?: InputMaybe<Array<Scalars[`Time`]>>;
  createdAtLT?: InputMaybe<Scalars[`Time`]>;
  createdAtLTE?: InputMaybe<Scalars[`Time`]>;
  createdAtNEQ?: InputMaybe<Scalars[`Time`]>;
  createdAtNotIn?: InputMaybe<Array<Scalars[`Time`]>>;
  /** user edge predicates */
  hasUser?: InputMaybe<Scalars[`Boolean`]>;
  hasUserWith?: InputMaybe<Array<UserWhereInput>>;
  /** id field predicates */
  id?: InputMaybe<Scalars[`ID`]>;
  idGT?: InputMaybe<Scalars[`ID`]>;
  idGTE?: InputMaybe<Scalars[`ID`]>;
  idIn?: InputMaybe<Array<Scalars[`ID`]>>;
  idLT?: InputMaybe<Scalars[`ID`]>;
  idLTE?: InputMaybe<Scalars[`ID`]>;
  idNEQ?: InputMaybe<Scalars[`ID`]>;
  idNotIn?: InputMaybe<Array<Scalars[`ID`]>>;
  /** lsb_used field predicates */
  lsbUsed?: InputMaybe<Scalars[`Int`]>;
  lsbUsedGT?: InputMaybe<Scalars[`Int`]>;
  lsbUsedGTE?: InputMaybe<Scalars[`Int`]>;
  lsbUsedIn?: InputMaybe<Array<Scalars[`Int`]>>;
  lsbUsedLT?: InputMaybe<Scalars[`Int`]>;
  lsbUsedLTE?: InputMaybe<Scalars[`Int`]>;
  lsbUsedNEQ?: InputMaybe<Scalars[`Int`]>;
  lsbUsedNotIn?: InputMaybe<Array<Scalars[`Int`]>>;
  /** message field predicates */
  message?: InputMaybe<Scalars[`String`]>;
  messageContains?: InputMaybe<Scalars[`String`]>;
  messageContainsFold?: InputMaybe<Scalars[`String`]>;
  messageEqualFold?: InputMaybe<Scalars[`String`]>;
  messageGT?: InputMaybe<Scalars[`String`]>;
  messageGTE?: InputMaybe<Scalars[`String`]>;
  messageHasPrefix?: InputMaybe<Scalars[`String`]>;
  messageHasSuffix?: InputMaybe<Scalars[`String`]>;
  messageIn?: InputMaybe<Array<Scalars[`String`]>>;
  messageLT?: InputMaybe<Scalars[`String`]>;
  messageLTE?: InputMaybe<Scalars[`String`]>;
  messageNEQ?: InputMaybe<Scalars[`String`]>;
  messageNotIn?: InputMaybe<Array<Scalars[`String`]>>;
  not?: InputMaybe<ImageWhereInput>;
  or?: InputMaybe<Array<ImageWhereInput>>;
  /** updated_at field predicates */
  updatedAt?: InputMaybe<Scalars[`Time`]>;
  updatedAtGT?: InputMaybe<Scalars[`Time`]>;
  updatedAtGTE?: InputMaybe<Scalars[`Time`]>;
  updatedAtIn?: InputMaybe<Array<Scalars[`Time`]>>;
  updatedAtLT?: InputMaybe<Scalars[`Time`]>;
  updatedAtLTE?: InputMaybe<Scalars[`Time`]>;
  updatedAtNEQ?: InputMaybe<Scalars[`Time`]>;
  updatedAtNotIn?: InputMaybe<Array<Scalars[`Time`]>>;
};

export type ImagesConnection = {
  __typename?: `ImagesConnection`;
  edges: Array<ImageEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars[`Int`];
};

export type Login = {
  email: Scalars[`String`];
  password: Scalars[`String`];
};

export type LoginPayload = {
  __typename?: `LoginPayload`;
  auth: Auth;
  user: User;
};

/** The `Mutation` type, represents all updates we can make to our data. */
export type Mutation = {
  __typename?: `Mutation`;
  createUser: CreateUserPayload;
  decodeImage: DecodeImagePayload;
  encodeImage: EncodeImagePayload;
  login: LoginPayload;
  refreshToken: RefreshTokenPayload;
  updateUser: UpdateUserPayload;
};

/** The `Mutation` type, represents all updates we can make to our data. */
export type MutationCreateUserArgs = {
  input: NewUser;
};

/** The `Mutation` type, represents all updates we can make to our data. */
export type MutationDecodeImageArgs = {
  input: DecodeImageInput;
};

/** The `Mutation` type, represents all updates we can make to our data. */
export type MutationEncodeImageArgs = {
  input: EncodeImageInput;
};

/** The `Mutation` type, represents all updates we can make to our data. */
export type MutationLoginArgs = {
  input: Login;
};

/** The `Mutation` type, represents all updates we can make to our data. */
export type MutationRefreshTokenArgs = {
  input: RefreshTokenInput;
};

/** The `Mutation` type, represents all updates we can make to our data. */
export type MutationUpdateUserArgs = {
  input: UpdateUser;
};

export type NewUser = {
  email: Scalars[`String`];
  password: Scalars[`String`];
  username: Scalars[`String`];
};

export type Node = {
  id: Scalars[`ID`];
};

export enum OrderDirection {
  Asc = `ASC`,
  Desc = `DESC`,
}

export type OverviewPayload = {
  __typename?: `OverviewPayload`;
  user: User;
};

export type PageInfo = {
  __typename?: `PageInfo`;
  endCursor?: Maybe<Scalars[`Cursor`]>;
  hasNextPage: Scalars[`Boolean`];
  hasPreviousPage: Scalars[`Boolean`];
  startCursor?: Maybe<Scalars[`Cursor`]>;
};

/** The `Query` type, represents all of the entry points into our object graph. */
export type Query = {
  __typename?: `Query`;
  images: ImagesConnection;
  overview: OverviewPayload;
};

/** The `Query` type, represents all of the entry points into our object graph. */
export type QueryImagesArgs = {
  after?: InputMaybe<Scalars[`Cursor`]>;
  before?: InputMaybe<Scalars[`Cursor`]>;
  first?: InputMaybe<Scalars[`Int`]>;
  last?: InputMaybe<Scalars[`Int`]>;
  orderBy?: InputMaybe<ImageOrder>;
  where?: InputMaybe<ImageWhereInput>;
};

export type RefreshTokenInput = {
  token: Scalars[`String`];
};

export type RefreshTokenPayload = {
  __typename?: `RefreshTokenPayload`;
  auth: Auth;
  user: User;
};

export type UpdateUser = {
  email?: InputMaybe<Scalars[`String`]>;
  password?: InputMaybe<Scalars[`String`]>;
  username?: InputMaybe<Scalars[`String`]>;
};

export type UpdateUserPayload = {
  __typename?: `UpdateUserPayload`;
  user: User;
};

export type User = {
  __typename?: `User`;
  createdAt: Scalars[`Time`];
  email: Scalars[`String`];
  id: Scalars[`ID`];
  lastLogin: Scalars[`Time`];
  updatedAt: Scalars[`Time`];
  username: Scalars[`String`];
};

/**
 * UserWhereInput is used for filtering User objects.
 * Input was generated by ent.
 */
export type UserWhereInput = {
  and?: InputMaybe<Array<UserWhereInput>>;
  /** created_at field predicates */
  createdAt?: InputMaybe<Scalars[`Time`]>;
  createdAtGT?: InputMaybe<Scalars[`Time`]>;
  createdAtGTE?: InputMaybe<Scalars[`Time`]>;
  createdAtIn?: InputMaybe<Array<Scalars[`Time`]>>;
  createdAtLT?: InputMaybe<Scalars[`Time`]>;
  createdAtLTE?: InputMaybe<Scalars[`Time`]>;
  createdAtNEQ?: InputMaybe<Scalars[`Time`]>;
  createdAtNotIn?: InputMaybe<Array<Scalars[`Time`]>>;
  /** email field predicates */
  email?: InputMaybe<Scalars[`String`]>;
  emailContains?: InputMaybe<Scalars[`String`]>;
  emailContainsFold?: InputMaybe<Scalars[`String`]>;
  emailEqualFold?: InputMaybe<Scalars[`String`]>;
  emailGT?: InputMaybe<Scalars[`String`]>;
  emailGTE?: InputMaybe<Scalars[`String`]>;
  emailHasPrefix?: InputMaybe<Scalars[`String`]>;
  emailHasSuffix?: InputMaybe<Scalars[`String`]>;
  emailIn?: InputMaybe<Array<Scalars[`String`]>>;
  emailLT?: InputMaybe<Scalars[`String`]>;
  emailLTE?: InputMaybe<Scalars[`String`]>;
  emailNEQ?: InputMaybe<Scalars[`String`]>;
  emailNotIn?: InputMaybe<Array<Scalars[`String`]>>;
  /** images edge predicates */
  hasImages?: InputMaybe<Scalars[`Boolean`]>;
  hasImagesWith?: InputMaybe<Array<ImageWhereInput>>;
  /** id field predicates */
  id?: InputMaybe<Scalars[`ID`]>;
  idGT?: InputMaybe<Scalars[`ID`]>;
  idGTE?: InputMaybe<Scalars[`ID`]>;
  idIn?: InputMaybe<Array<Scalars[`ID`]>>;
  idLT?: InputMaybe<Scalars[`ID`]>;
  idLTE?: InputMaybe<Scalars[`ID`]>;
  idNEQ?: InputMaybe<Scalars[`ID`]>;
  idNotIn?: InputMaybe<Array<Scalars[`ID`]>>;
  /** last_login field predicates */
  lastLogin?: InputMaybe<Scalars[`Time`]>;
  lastLoginGT?: InputMaybe<Scalars[`Time`]>;
  lastLoginGTE?: InputMaybe<Scalars[`Time`]>;
  lastLoginIn?: InputMaybe<Array<Scalars[`Time`]>>;
  lastLoginLT?: InputMaybe<Scalars[`Time`]>;
  lastLoginLTE?: InputMaybe<Scalars[`Time`]>;
  lastLoginNEQ?: InputMaybe<Scalars[`Time`]>;
  lastLoginNotIn?: InputMaybe<Array<Scalars[`Time`]>>;
  /** name field predicates */
  name?: InputMaybe<Scalars[`String`]>;
  nameContains?: InputMaybe<Scalars[`String`]>;
  nameContainsFold?: InputMaybe<Scalars[`String`]>;
  nameEqualFold?: InputMaybe<Scalars[`String`]>;
  nameGT?: InputMaybe<Scalars[`String`]>;
  nameGTE?: InputMaybe<Scalars[`String`]>;
  nameHasPrefix?: InputMaybe<Scalars[`String`]>;
  nameHasSuffix?: InputMaybe<Scalars[`String`]>;
  nameIn?: InputMaybe<Array<Scalars[`String`]>>;
  nameLT?: InputMaybe<Scalars[`String`]>;
  nameLTE?: InputMaybe<Scalars[`String`]>;
  nameNEQ?: InputMaybe<Scalars[`String`]>;
  nameNotIn?: InputMaybe<Array<Scalars[`String`]>>;
  not?: InputMaybe<UserWhereInput>;
  or?: InputMaybe<Array<UserWhereInput>>;
  /** password field predicates */
  password?: InputMaybe<Scalars[`String`]>;
  passwordContains?: InputMaybe<Scalars[`String`]>;
  passwordContainsFold?: InputMaybe<Scalars[`String`]>;
  passwordEqualFold?: InputMaybe<Scalars[`String`]>;
  passwordGT?: InputMaybe<Scalars[`String`]>;
  passwordGTE?: InputMaybe<Scalars[`String`]>;
  passwordHasPrefix?: InputMaybe<Scalars[`String`]>;
  passwordHasSuffix?: InputMaybe<Scalars[`String`]>;
  passwordIn?: InputMaybe<Array<Scalars[`String`]>>;
  passwordLT?: InputMaybe<Scalars[`String`]>;
  passwordLTE?: InputMaybe<Scalars[`String`]>;
  passwordNEQ?: InputMaybe<Scalars[`String`]>;
  passwordNotIn?: InputMaybe<Array<Scalars[`String`]>>;
  /** updated_at field predicates */
  updatedAt?: InputMaybe<Scalars[`Time`]>;
  updatedAtGT?: InputMaybe<Scalars[`Time`]>;
  updatedAtGTE?: InputMaybe<Scalars[`Time`]>;
  updatedAtIn?: InputMaybe<Array<Scalars[`Time`]>>;
  updatedAtLT?: InputMaybe<Scalars[`Time`]>;
  updatedAtLTE?: InputMaybe<Scalars[`Time`]>;
  updatedAtNEQ?: InputMaybe<Scalars[`Time`]>;
  updatedAtNotIn?: InputMaybe<Array<Scalars[`Time`]>>;
};

export type FileTypeFragmentFragment = {
  __typename?: `FileType`;
  name: string;
  content: string;
};

export type PageInfoFragmentFragment = {
  __typename?: `PageInfo`;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string | null;
  endCursor?: string | null;
};

export type ImageEdgeFragmentFragment = {
  __typename?: `ImageEdge`;
  cursor: string;
  node: {
    __typename?: `Image`;
    id: string;
    message: string;
    lsbUsed: number;
    channel: Channel;
    createdAt: Date;
    updatedAt: Date;
  };
};

export type ImageFragmentFragment = {
  __typename?: `Image`;
  id: string;
  message: string;
  lsbUsed: number;
  channel: Channel;
  createdAt: Date;
  updatedAt: Date;
};

export type ImagesConnectionFragmentFragment = {
  __typename?: `ImagesConnection`;
  totalCount: number;
  edges: Array<{
    __typename?: `ImageEdge`;
    cursor: string;
    node: {
      __typename?: `Image`;
      id: string;
      message: string;
      lsbUsed: number;
      channel: Channel;
      createdAt: Date;
      updatedAt: Date;
    };
  }>;
  pageInfo: {
    __typename?: `PageInfo`;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string | null;
    endCursor?: string | null;
  };
};

export type AuthFragmentFragment = {
  __typename?: `Auth`;
  token: string;
  expires: Date;
};

export type UserFragmentFragment = {
  __typename?: `User`;
  id: string;
  username: string;
  email: string;
  lastLogin: Date;
  createdAt: Date;
  updatedAt: Date;
};

export type DecodeImageMutationVariables = Exact<{
  lsbUsed: Scalars[`Int`];
  channel: Channel;
  file: Scalars[`Upload`];
}>;

export type DecodeImageMutation = {
  __typename?: `Mutation`;
  decodeImage: { __typename?: `DecodeImagePayload`; message: string };
};

export type EncodeImageMutationVariables = Exact<{
  message: Scalars[`String`];
  lsbUsed: Scalars[`Int`];
  channel: Channel;
  file: Scalars[`Upload`];
}>;

export type EncodeImageMutation = {
  __typename?: `Mutation`;
  encodeImage: {
    __typename?: `EncodeImagePayload`;
    image: {
      __typename?: `Image`;
      id: string;
      message: string;
      lsbUsed: number;
      channel: Channel;
      createdAt: Date;
      updatedAt: Date;
    };
    file: { __typename?: `FileType`; name: string; content: string };
  };
};

export type ImagesQueryVariables = Exact<{
  after?: InputMaybe<Scalars[`Cursor`]>;
  first?: InputMaybe<Scalars[`Int`]>;
  before?: InputMaybe<Scalars[`Cursor`]>;
  last?: InputMaybe<Scalars[`Int`]>;
  where?: InputMaybe<ImageWhereInput>;
  orderBy?: InputMaybe<ImageOrder>;
}>;

export type ImagesQuery = {
  __typename?: `Query`;
  images: {
    __typename?: `ImagesConnection`;
    totalCount: number;
    edges: Array<{
      __typename?: `ImageEdge`;
      cursor: string;
      node: {
        __typename?: `Image`;
        id: string;
        message: string;
        lsbUsed: number;
        channel: Channel;
        createdAt: Date;
        updatedAt: Date;
      };
    }>;
    pageInfo: {
      __typename?: `PageInfo`;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor?: string | null;
      endCursor?: string | null;
    };
  };
};

export type CreateUserMutationVariables = Exact<{
  username: Scalars[`String`];
  password: Scalars[`String`];
  email: Scalars[`String`];
}>;

export type CreateUserMutation = {
  __typename?: `Mutation`;
  createUser: {
    __typename?: `CreateUserPayload`;
    user: {
      __typename?: `User`;
      id: string;
      username: string;
      email: string;
      lastLogin: Date;
      createdAt: Date;
      updatedAt: Date;
    };
    auth: { __typename?: `Auth`; token: string; expires: Date };
  };
};

export type LoginMutationVariables = Exact<{
  email: Scalars[`String`];
  password: Scalars[`String`];
}>;

export type LoginMutation = {
  __typename?: `Mutation`;
  login: {
    __typename?: `LoginPayload`;
    user: {
      __typename?: `User`;
      id: string;
      username: string;
      email: string;
      lastLogin: Date;
      createdAt: Date;
      updatedAt: Date;
    };
    auth: { __typename?: `Auth`; token: string; expires: Date };
  };
};

export type RefreshTokenMutationVariables = Exact<{
  token: Scalars[`String`];
}>;

export type RefreshTokenMutation = {
  __typename?: `Mutation`;
  refreshToken: {
    __typename?: `RefreshTokenPayload`;
    user: {
      __typename?: `User`;
      id: string;
      username: string;
      email: string;
      lastLogin: Date;
      createdAt: Date;
      updatedAt: Date;
    };
    auth: { __typename?: `Auth`; token: string; expires: Date };
  };
};

export type UpdateUserMutationVariables = Exact<{
  username?: InputMaybe<Scalars[`String`]>;
  password?: InputMaybe<Scalars[`String`]>;
  email?: InputMaybe<Scalars[`String`]>;
}>;

export type UpdateUserMutation = {
  __typename?: `Mutation`;
  updateUser: {
    __typename?: `UpdateUserPayload`;
    user: {
      __typename?: `User`;
      id: string;
      username: string;
      email: string;
      lastLogin: Date;
      createdAt: Date;
      updatedAt: Date;
    };
  };
};

export type OverviewQueryVariables = Exact<{ [key: string]: never }>;

export type OverviewQuery = {
  __typename?: `Query`;
  overview: {
    __typename?: `OverviewPayload`;
    user: {
      __typename?: `User`;
      id: string;
      username: string;
      email: string;
      lastLogin: Date;
      createdAt: Date;
      updatedAt: Date;
    };
  };
};

export const FileTypeFragmentFragmentDocument = gql`
  fragment FileTypeFragment on FileType {
    name
    content
  }
`;
export const ImageFragmentFragmentDocument = gql`
  fragment ImageFragment on Image {
    id
    message
    lsbUsed
    channel
    createdAt
    updatedAt
  }
`;
export const ImageEdgeFragmentFragmentDocument = gql`
  fragment ImageEdgeFragment on ImageEdge {
    node {
      ...ImageFragment
    }
    cursor
  }
  ${ImageFragmentFragmentDocument}
`;
export const PageInfoFragmentFragmentDocument = gql`
  fragment PageInfoFragment on PageInfo {
    hasNextPage
    hasPreviousPage
    startCursor
    endCursor
  }
`;
export const ImagesConnectionFragmentFragmentDocument = gql`
  fragment ImagesConnectionFragment on ImagesConnection {
    totalCount
    edges {
      ...ImageEdgeFragment
    }
    pageInfo {
      ...PageInfoFragment
    }
  }
  ${ImageEdgeFragmentFragmentDocument}
  ${PageInfoFragmentFragmentDocument}
`;
export const AuthFragmentFragmentDocument = gql`
  fragment AuthFragment on Auth {
    token
    expires
  }
`;
export const UserFragmentFragmentDocument = gql`
  fragment UserFragment on User {
    id
    username
    email
    lastLogin
    createdAt
    updatedAt
  }
`;
export const DecodeImageDocument = gql`
  mutation decodeImage($lsbUsed: Int!, $channel: Channel!, $file: Upload!) {
    decodeImage(input: { lsbUsed: $lsbUsed, channel: $channel, file: $file }) {
      message
    }
  }
`;

export function useDecodeImageMutation() {
  return Urql.useMutation<DecodeImageMutation, DecodeImageMutationVariables>(
    DecodeImageDocument,
  );
}
export const EncodeImageDocument = gql`
  mutation encodeImage(
    $message: String!
    $lsbUsed: Int!
    $channel: Channel!
    $file: Upload!
  ) {
    encodeImage(
      input: {
        message: $message
        lsbUsed: $lsbUsed
        channel: $channel
        file: $file
      }
    ) {
      image {
        ...ImageFragment
      }
      file {
        ...FileTypeFragment
      }
    }
  }
  ${ImageFragmentFragmentDocument}
  ${FileTypeFragmentFragmentDocument}
`;

export function useEncodeImageMutation() {
  return Urql.useMutation<EncodeImageMutation, EncodeImageMutationVariables>(
    EncodeImageDocument,
  );
}
export const ImagesDocument = gql`
  query images(
    $after: Cursor
    $first: Int
    $before: Cursor
    $last: Int
    $where: ImageWhereInput
    $orderBy: ImageOrder
  ) {
    images(
      after: $after
      first: $first
      before: $before
      last: $last
      where: $where
      orderBy: $orderBy
    ) {
      ...ImagesConnectionFragment
    }
  }
  ${ImagesConnectionFragmentFragmentDocument}
`;

export function useImagesQuery(
  options?: Omit<Urql.UseQueryArgs<ImagesQueryVariables>, `query`>,
) {
  return Urql.useQuery<ImagesQuery>({ query: ImagesDocument, ...options });
}
export const CreateUserDocument = gql`
  mutation createUser(
    $username: String!
    $password: String!
    $email: String!
  ) {
    createUser(
      input: { username: $username, password: $password, email: $email }
    ) {
      user {
        ...UserFragment
      }
      auth {
        ...AuthFragment
      }
    }
  }
  ${UserFragmentFragmentDocument}
  ${AuthFragmentFragmentDocument}
`;

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
  );
}
export const LoginDocument = gql`
  mutation Login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      user {
        ...UserFragment
      }
      auth {
        ...AuthFragment
      }
    }
  }
  ${UserFragmentFragmentDocument}
  ${AuthFragmentFragmentDocument}
`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
  );
}
export const RefreshTokenDocument = gql`
  mutation refreshToken($token: String!) {
    refreshToken(input: { token: $token }) {
      user {
        ...UserFragment
      }
      auth {
        ...AuthFragment
      }
    }
  }
  ${UserFragmentFragmentDocument}
  ${AuthFragmentFragmentDocument}
`;

export function useRefreshTokenMutation() {
  return Urql.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(
    RefreshTokenDocument,
  );
}
export const UpdateUserDocument = gql`
  mutation updateUser($username: String, $password: String, $email: String) {
    updateUser(
      input: { username: $username, password: $password, email: $email }
    ) {
      user {
        ...UserFragment
      }
    }
  }
  ${UserFragmentFragmentDocument}
`;

export function useUpdateUserMutation() {
  return Urql.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
  );
}
export const OverviewDocument = gql`
  query overview {
    overview {
      user {
        ...UserFragment
      }
    }
  }
  ${UserFragmentFragmentDocument}
`;

export function useOverviewQuery(
  options?: Omit<Urql.UseQueryArgs<OverviewQueryVariables>, `query`>,
) {
  return Urql.useQuery<OverviewQuery>({ query: OverviewDocument, ...options });
}
