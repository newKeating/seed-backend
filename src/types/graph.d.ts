export const typeDefs = ["type User {\n  id: ID!\n  facebookId: String\n  email: String!\n  name: String!\n  password: String\n  deleted: Boolean!\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype Mutation {\n  createRegularUser(email: String!, password: String!, name: String!): CreateRegularUserResponse!\n}\n\ntype CreateRegularUserResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Query {\n  fetchUser(id: String!): User!\n  me: User!\n}\n"];
/* tslint:disable */

export interface Query {
  fetchUser: User;
  me: User;
}

export interface FetchUserQueryArgs {
  id: string;
}

export interface User {
  id: string;
  facebookId: string | null;
  email: string;
  name: string;
  password: string | null;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Mutation {
  createRegularUser: CreateRegularUserResponse;
}

export interface CreateRegularUserMutationArgs {
  email: string;
  password: string;
  name: string;
}

export interface CreateRegularUserResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}
