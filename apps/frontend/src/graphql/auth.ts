import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      user {
        id
        email
        username
        firstName
        lastName
        createdAt
        updatedAt
      }
      token
    }
  }
`;

export const REGISTER_MUTATION = gql`
  mutation Register($registerInput: RegisterInput!) {
    register(registerInput: $registerInput) {
      user {
        id
        email
        username
        firstName
        lastName
        createdAt
        updatedAt
      }
      token
    }
  }
`;

export const ME_QUERY = gql`
  query Me {
    me {
      id
      email
      username
      firstName
      lastName
      createdAt
      updatedAt
    }
  }
`;
