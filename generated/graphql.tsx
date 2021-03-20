import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  files?: Maybe<FilesResponse>;
  file?: Maybe<FileResponse>;
  folders: FoldersResponse;
  folder?: Maybe<FolderResponse>;
};


export type QueryFilesArgs = {
  id: Scalars['String'];
};


export type QueryFileArgs = {
  id: Scalars['String'];
};


export type QueryFolderArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
};

export type FilesResponse = {
  __typename?: 'FilesResponse';
  errors?: Maybe<Array<FileFieldError>>;
  data?: Maybe<Array<File>>;
};

export type FileFieldError = {
  __typename?: 'FileFieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type File = {
  __typename?: 'File';
  id: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  title: Scalars['String'];
  text: Scalars['String'];
  folderId: Scalars['String'];
};

export type FileResponse = {
  __typename?: 'FileResponse';
  errors?: Maybe<Array<FileFieldError>>;
  data?: Maybe<File>;
};

export type FoldersResponse = {
  __typename?: 'FoldersResponse';
  errors?: Maybe<Array<FolderFieldError>>;
  data?: Maybe<Array<Folder>>;
};

export type FolderFieldError = {
  __typename?: 'FolderFieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Folder = {
  __typename?: 'Folder';
  id: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  title: Scalars['String'];
  creatorId: Scalars['String'];
};

export type FolderResponse = {
  __typename?: 'FolderResponse';
  errors?: Maybe<Array<FolderFieldError>>;
  data?: Maybe<Folder>;
};

export type Mutation = {
  __typename?: 'Mutation';
  register: UserResponse;
  login: UserResponse;
  forgotPassword: Scalars['Boolean'];
  changePassword: UserResponse;
  logout: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  createFile?: Maybe<FileResponse>;
  updateFile?: Maybe<FileResponse>;
  deleteFile: Scalars['Boolean'];
  createFolder: FolderResponse;
  updateFolder?: Maybe<FolderResponse>;
  deleteFolder: Scalars['Boolean'];
};


export type MutationRegisterArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  email: Scalars['String'];
};


export type MutationCreateFileArgs = {
  title: Scalars['String'];
  id: Scalars['String'];
};


export type MutationUpdateFileArgs = {
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};


export type MutationDeleteFileArgs = {
  id: Scalars['String'];
};


export type MutationCreateFolderArgs = {
  title: Scalars['String'];
};


export type MutationUpdateFolderArgs = {
  title?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};


export type MutationDeleteFolderArgs = {
  id: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<UserFieldError>>;
  user?: Maybe<User>;
};

export type UserFieldError = {
  __typename?: 'UserFieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type UserErrorFragment = (
  { __typename?: 'UserFieldError' }
  & Pick<UserFieldError, 'field' | 'message'>
);

export type FolderErrorFragment = (
  { __typename?: 'FolderFieldError' }
  & Pick<FolderFieldError, 'field' | 'message'>
);

export type FileErrorFragment = (
  { __typename?: 'FileFieldError' }
  & Pick<FileFieldError, 'field' | 'message'>
);

export type FileFragment = (
  { __typename?: 'File' }
  & Pick<File, 'id' | 'title' | 'text' | 'updatedAt'>
);

export type FolderFragment = (
  { __typename?: 'Folder' }
  & Pick<Folder, 'id' | 'title'>
);

export type UserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username'>
);

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  password: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & { changePassword: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'UserFieldError' }
      & UserErrorFragment
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & UserFragment
    )> }
  ) }
);

export type CreateFileMutationVariables = Exact<{
  id: Scalars['String'];
  title: Scalars['String'];
}>;


export type CreateFileMutation = (
  { __typename?: 'Mutation' }
  & { createFile?: Maybe<(
    { __typename?: 'FileResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FileFieldError' }
      & FileErrorFragment
    )>>, data?: Maybe<(
      { __typename?: 'File' }
      & FileFragment
    )> }
  )> }
);

export type CreateFolderMutationVariables = Exact<{
  title: Scalars['String'];
}>;


export type CreateFolderMutation = (
  { __typename?: 'Mutation' }
  & { createFolder: (
    { __typename?: 'FolderResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FolderFieldError' }
      & FolderErrorFragment
    )>>, data?: Maybe<(
      { __typename?: 'Folder' }
      & FolderFragment
    )> }
  ) }
);

export type DeleteFileMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteFileMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteFile'>
);

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'forgotPassword'>
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'UserFieldError' }
      & UserErrorFragment
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & UserFragment
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'UserFieldError' }
      & UserErrorFragment
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & UserFragment
    )> }
  ) }
);

export type UpdateFileMutationVariables = Exact<{
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
}>;


export type UpdateFileMutation = (
  { __typename?: 'Mutation' }
  & { updateFile?: Maybe<(
    { __typename?: 'FileResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FileFieldError' }
      & Pick<FileFieldError, 'field' | 'message'>
    )>>, data?: Maybe<(
      { __typename?: 'File' }
      & Pick<File, 'id' | 'updatedAt' | 'createdAt' | 'title' | 'text'>
    )> }
  )> }
);

export type FileQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FileQuery = (
  { __typename?: 'Query' }
  & { file?: Maybe<(
    { __typename?: 'FileResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FileFieldError' }
      & FileErrorFragment
    )>>, data?: Maybe<(
      { __typename?: 'File' }
      & Pick<File, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'text'>
    )> }
  )> }
);

export type FilesQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FilesQuery = (
  { __typename?: 'Query' }
  & { files?: Maybe<(
    { __typename?: 'FilesResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FileFieldError' }
      & FileErrorFragment
    )>>, data?: Maybe<Array<(
      { __typename?: 'File' }
      & FileFragment
    )>> }
  )> }
);

export type FolderQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FolderQuery = (
  { __typename?: 'Query' }
  & { folder?: Maybe<(
    { __typename?: 'FolderResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FolderFieldError' }
      & FolderErrorFragment
    )>>, data?: Maybe<(
      { __typename?: 'Folder' }
      & FolderFragment
    )> }
  )> }
);

export type FoldersQueryVariables = Exact<{ [key: string]: never; }>;


export type FoldersQuery = (
  { __typename?: 'Query' }
  & { folders: (
    { __typename?: 'FoldersResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FolderFieldError' }
      & FolderErrorFragment
    )>>, data?: Maybe<Array<(
      { __typename?: 'Folder' }
      & FolderFragment
    )>> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export const UserErrorFragmentDoc = gql`
    fragment UserError on UserFieldError {
  field
  message
}
    `;
export const FolderErrorFragmentDoc = gql`
    fragment FolderError on FolderFieldError {
  field
  message
}
    `;
export const FileErrorFragmentDoc = gql`
    fragment FileError on FileFieldError {
  field
  message
}
    `;
export const FileFragmentDoc = gql`
    fragment File on File {
  id
  title
  text
  updatedAt
}
    `;
export const FolderFragmentDoc = gql`
    fragment Folder on Folder {
  id
  title
}
    `;
export const UserFragmentDoc = gql`
    fragment User on User {
  id
  username
}
    `;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $password: String!) {
  changePassword(token: $token, password: $password) {
    errors {
      ...UserError
    }
    user {
      ...User
    }
  }
}
    ${UserErrorFragmentDoc}
${UserFragmentDoc}`;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const CreateFileDocument = gql`
    mutation CreateFile($id: String!, $title: String!) {
  createFile(id: $id, title: $title) {
    errors {
      ...FileError
    }
    data {
      ...File
    }
  }
}
    ${FileErrorFragmentDoc}
${FileFragmentDoc}`;
export type CreateFileMutationFn = Apollo.MutationFunction<CreateFileMutation, CreateFileMutationVariables>;

/**
 * __useCreateFileMutation__
 *
 * To run a mutation, you first call `useCreateFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFileMutation, { data, loading, error }] = useCreateFileMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateFileMutation(baseOptions?: Apollo.MutationHookOptions<CreateFileMutation, CreateFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFileMutation, CreateFileMutationVariables>(CreateFileDocument, options);
      }
export type CreateFileMutationHookResult = ReturnType<typeof useCreateFileMutation>;
export type CreateFileMutationResult = Apollo.MutationResult<CreateFileMutation>;
export type CreateFileMutationOptions = Apollo.BaseMutationOptions<CreateFileMutation, CreateFileMutationVariables>;
export const CreateFolderDocument = gql`
    mutation CreateFolder($title: String!) {
  createFolder(title: $title) {
    errors {
      ...FolderError
    }
    data {
      ...Folder
    }
  }
}
    ${FolderErrorFragmentDoc}
${FolderFragmentDoc}`;
export type CreateFolderMutationFn = Apollo.MutationFunction<CreateFolderMutation, CreateFolderMutationVariables>;

/**
 * __useCreateFolderMutation__
 *
 * To run a mutation, you first call `useCreateFolderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFolderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFolderMutation, { data, loading, error }] = useCreateFolderMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateFolderMutation(baseOptions?: Apollo.MutationHookOptions<CreateFolderMutation, CreateFolderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFolderMutation, CreateFolderMutationVariables>(CreateFolderDocument, options);
      }
export type CreateFolderMutationHookResult = ReturnType<typeof useCreateFolderMutation>;
export type CreateFolderMutationResult = Apollo.MutationResult<CreateFolderMutation>;
export type CreateFolderMutationOptions = Apollo.BaseMutationOptions<CreateFolderMutation, CreateFolderMutationVariables>;
export const DeleteFileDocument = gql`
    mutation DeleteFile($id: String!) {
  deleteFile(id: $id)
}
    `;
export type DeleteFileMutationFn = Apollo.MutationFunction<DeleteFileMutation, DeleteFileMutationVariables>;

/**
 * __useDeleteFileMutation__
 *
 * To run a mutation, you first call `useDeleteFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFileMutation, { data, loading, error }] = useDeleteFileMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteFileMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFileMutation, DeleteFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFileMutation, DeleteFileMutationVariables>(DeleteFileDocument, options);
      }
export type DeleteFileMutationHookResult = ReturnType<typeof useDeleteFileMutation>;
export type DeleteFileMutationResult = Apollo.MutationResult<DeleteFileMutation>;
export type DeleteFileMutationOptions = Apollo.BaseMutationOptions<DeleteFileMutation, DeleteFileMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    errors {
      ...UserError
    }
    user {
      ...User
    }
  }
}
    ${UserErrorFragmentDoc}
${UserFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($username: String!, $password: String!, $email: String!) {
  register(username: $username, password: $password, email: $email) {
    errors {
      ...UserError
    }
    user {
      ...User
    }
  }
}
    ${UserErrorFragmentDoc}
${UserFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UpdateFileDocument = gql`
    mutation UpdateFile($id: String!, $title: String, $text: String) {
  updateFile(id: $id, text: $text, title: $title) {
    errors {
      field
      message
    }
    data {
      id
      updatedAt
      createdAt
      title
      text
    }
  }
}
    `;
export type UpdateFileMutationFn = Apollo.MutationFunction<UpdateFileMutation, UpdateFileMutationVariables>;

/**
 * __useUpdateFileMutation__
 *
 * To run a mutation, you first call `useUpdateFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFileMutation, { data, loading, error }] = useUpdateFileMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useUpdateFileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFileMutation, UpdateFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFileMutation, UpdateFileMutationVariables>(UpdateFileDocument, options);
      }
export type UpdateFileMutationHookResult = ReturnType<typeof useUpdateFileMutation>;
export type UpdateFileMutationResult = Apollo.MutationResult<UpdateFileMutation>;
export type UpdateFileMutationOptions = Apollo.BaseMutationOptions<UpdateFileMutation, UpdateFileMutationVariables>;
export const FileDocument = gql`
    query File($id: String!) {
  file(id: $id) {
    errors {
      ...FileError
    }
    data {
      id
      createdAt
      updatedAt
      title
      text
    }
  }
}
    ${FileErrorFragmentDoc}`;

/**
 * __useFileQuery__
 *
 * To run a query within a React component, call `useFileQuery` and pass it any options that fit your needs.
 * When your component renders, `useFileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFileQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFileQuery(baseOptions: Apollo.QueryHookOptions<FileQuery, FileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FileQuery, FileQueryVariables>(FileDocument, options);
      }
export function useFileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FileQuery, FileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FileQuery, FileQueryVariables>(FileDocument, options);
        }
export type FileQueryHookResult = ReturnType<typeof useFileQuery>;
export type FileLazyQueryHookResult = ReturnType<typeof useFileLazyQuery>;
export type FileQueryResult = Apollo.QueryResult<FileQuery, FileQueryVariables>;
export const FilesDocument = gql`
    query Files($id: String!) {
  files(id: $id) {
    errors {
      ...FileError
    }
    data {
      ...File
    }
  }
}
    ${FileErrorFragmentDoc}
${FileFragmentDoc}`;

/**
 * __useFilesQuery__
 *
 * To run a query within a React component, call `useFilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFilesQuery(baseOptions: Apollo.QueryHookOptions<FilesQuery, FilesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilesQuery, FilesQueryVariables>(FilesDocument, options);
      }
export function useFilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilesQuery, FilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilesQuery, FilesQueryVariables>(FilesDocument, options);
        }
export type FilesQueryHookResult = ReturnType<typeof useFilesQuery>;
export type FilesLazyQueryHookResult = ReturnType<typeof useFilesLazyQuery>;
export type FilesQueryResult = Apollo.QueryResult<FilesQuery, FilesQueryVariables>;
export const FolderDocument = gql`
    query Folder($id: String!) {
  folder(id: $id) {
    errors {
      ...FolderError
    }
    data {
      ...Folder
    }
  }
}
    ${FolderErrorFragmentDoc}
${FolderFragmentDoc}`;

/**
 * __useFolderQuery__
 *
 * To run a query within a React component, call `useFolderQuery` and pass it any options that fit your needs.
 * When your component renders, `useFolderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFolderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFolderQuery(baseOptions: Apollo.QueryHookOptions<FolderQuery, FolderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FolderQuery, FolderQueryVariables>(FolderDocument, options);
      }
export function useFolderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FolderQuery, FolderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FolderQuery, FolderQueryVariables>(FolderDocument, options);
        }
export type FolderQueryHookResult = ReturnType<typeof useFolderQuery>;
export type FolderLazyQueryHookResult = ReturnType<typeof useFolderLazyQuery>;
export type FolderQueryResult = Apollo.QueryResult<FolderQuery, FolderQueryVariables>;
export const FoldersDocument = gql`
    query Folders {
  folders {
    errors {
      ...FolderError
    }
    data {
      ...Folder
    }
  }
}
    ${FolderErrorFragmentDoc}
${FolderFragmentDoc}`;

/**
 * __useFoldersQuery__
 *
 * To run a query within a React component, call `useFoldersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFoldersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFoldersQuery({
 *   variables: {
 *   },
 * });
 */
export function useFoldersQuery(baseOptions?: Apollo.QueryHookOptions<FoldersQuery, FoldersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FoldersQuery, FoldersQueryVariables>(FoldersDocument, options);
      }
export function useFoldersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FoldersQuery, FoldersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FoldersQuery, FoldersQueryVariables>(FoldersDocument, options);
        }
export type FoldersQueryHookResult = ReturnType<typeof useFoldersQuery>;
export type FoldersLazyQueryHookResult = ReturnType<typeof useFoldersLazyQuery>;
export type FoldersQueryResult = Apollo.QueryResult<FoldersQuery, FoldersQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;