/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { Observable } from "zen-observable-ts";

export type CreateRegistrationInput = {
  name: string;
  address: string;
  certificationName: string;
  phoneNumber: string;
  centerName: string;
  email: string;
  createdAt?: string | null;
  updatedAt?: string | null;
  id: string;
};

export type ModelRegistrationConditionInput = {
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  certificationName?: ModelStringInput | null;
  phoneNumber?: ModelStringInput | null;
  centerName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelRegistrationConditionInput | null> | null;
  or?: Array<ModelRegistrationConditionInput | null> | null;
  not?: ModelRegistrationConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateRegistrationInput = {
  name?: string | null;
  address?: string | null;
  certificationName?: string | null;
  phoneNumber?: string | null;
  centerName?: string | null;
  email?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  id: string;
};

export type DeleteRegistrationInput = {
  id?: string | null;
};

export type ModelRegistrationFilterInput = {
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  certificationName?: ModelStringInput | null;
  phoneNumber?: ModelStringInput | null;
  centerName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  id?: ModelStringInput | null;
  and?: Array<ModelRegistrationFilterInput | null> | null;
  or?: Array<ModelRegistrationFilterInput | null> | null;
  not?: ModelRegistrationFilterInput | null;
};

export type CreateRegistrationMutation = {
  __typename: "Registration";
  name: string;
  address: string;
  certificationName: string;
  phoneNumber: string;
  centerName: string;
  email: string;
  createdAt: string | null;
  updatedAt: string | null;
  id: string;
};

export type UpdateRegistrationMutation = {
  __typename: "Registration";
  name: string;
  address: string;
  certificationName: string;
  phoneNumber: string;
  centerName: string;
  email: string;
  createdAt: string | null;
  updatedAt: string | null;
  id: string;
};

export type DeleteRegistrationMutation = {
  __typename: "Registration";
  name: string;
  address: string;
  certificationName: string;
  phoneNumber: string;
  centerName: string;
  email: string;
  createdAt: string | null;
  updatedAt: string | null;
  id: string;
};

export type GetRegistrationQuery = {
  __typename: "Registration";
  name: string;
  address: string;
  certificationName: string;
  phoneNumber: string;
  centerName: string;
  email: string;
  createdAt: string | null;
  updatedAt: string | null;
  id: string;
};

export type ListRegistrationsQuery = {
  __typename: "ModelRegistrationConnection";
  items: Array<{
    __typename: "Registration";
    name: string;
    address: string;
    certificationName: string;
    phoneNumber: string;
    centerName: string;
    email: string;
    createdAt: string | null;
    updatedAt: string | null;
    id: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateRegistrationSubscription = {
  __typename: "Registration";
  name: string;
  address: string;
  certificationName: string;
  phoneNumber: string;
  centerName: string;
  email: string;
  createdAt: string | null;
  updatedAt: string | null;
  id: string;
};

export type OnUpdateRegistrationSubscription = {
  __typename: "Registration";
  name: string;
  address: string;
  certificationName: string;
  phoneNumber: string;
  centerName: string;
  email: string;
  createdAt: string | null;
  updatedAt: string | null;
  id: string;
};

export type OnDeleteRegistrationSubscription = {
  __typename: "Registration";
  name: string;
  address: string;
  certificationName: string;
  phoneNumber: string;
  centerName: string;
  email: string;
  createdAt: string | null;
  updatedAt: string | null;
  id: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateRegistration(
    input: CreateRegistrationInput,
    condition?: ModelRegistrationConditionInput
  ): Promise<CreateRegistrationMutation> {
    const statement = `mutation CreateRegistration($input: CreateRegistrationInput!, $condition: ModelRegistrationConditionInput) {
        createRegistration(input: $input, condition: $condition) {
          __typename
          name
          address
          certificationName
          phoneNumber
          centerName
          email
          createdAt
          updatedAt
          id
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRegistrationMutation>response.data.createRegistration;
  }
  async UpdateRegistration(
    input: UpdateRegistrationInput,
    condition?: ModelRegistrationConditionInput
  ): Promise<UpdateRegistrationMutation> {
    const statement = `mutation UpdateRegistration($input: UpdateRegistrationInput!, $condition: ModelRegistrationConditionInput) {
        updateRegistration(input: $input, condition: $condition) {
          __typename
          name
          address
          certificationName
          phoneNumber
          centerName
          email
          createdAt
          updatedAt
          id
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRegistrationMutation>response.data.updateRegistration;
  }
  async DeleteRegistration(
    input: DeleteRegistrationInput,
    condition?: ModelRegistrationConditionInput
  ): Promise<DeleteRegistrationMutation> {
    const statement = `mutation DeleteRegistration($input: DeleteRegistrationInput!, $condition: ModelRegistrationConditionInput) {
        deleteRegistration(input: $input, condition: $condition) {
          __typename
          name
          address
          certificationName
          phoneNumber
          centerName
          email
          createdAt
          updatedAt
          id
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRegistrationMutation>response.data.deleteRegistration;
  }
  async GetRegistration(id: string): Promise<GetRegistrationQuery> {
    const statement = `query GetRegistration($id: ID!) {
        getRegistration(id: $id) {
          __typename
          name
          address
          certificationName
          phoneNumber
          centerName
          email
          createdAt
          updatedAt
          id
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRegistrationQuery>response.data.getRegistration;
  }
  async ListRegistrations(
    filter?: ModelRegistrationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRegistrationsQuery> {
    const statement = `query ListRegistrations($filter: ModelRegistrationFilterInput, $limit: Int, $nextToken: String) {
        listRegistrations(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            name
            address
            certificationName
            phoneNumber
            centerName
            email
            createdAt
            updatedAt
            id
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRegistrationsQuery>response.data.listRegistrations;
  }
  OnCreateRegistrationListener: Observable<
    OnCreateRegistrationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateRegistration {
        onCreateRegistration {
          __typename
          name
          address
          certificationName
          phoneNumber
          centerName
          email
          createdAt
          updatedAt
          id
        }
      }`
    )
  ) as Observable<OnCreateRegistrationSubscription>;

  OnUpdateRegistrationListener: Observable<
    OnUpdateRegistrationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRegistration {
        onUpdateRegistration {
          __typename
          name
          address
          certificationName
          phoneNumber
          centerName
          email
          createdAt
          updatedAt
          id
        }
      }`
    )
  ) as Observable<OnUpdateRegistrationSubscription>;

  OnDeleteRegistrationListener: Observable<
    OnDeleteRegistrationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRegistration {
        onDeleteRegistration {
          __typename
          name
          address
          certificationName
          phoneNumber
          centerName
          email
          createdAt
          updatedAt
          id
        }
      }`
    )
  ) as Observable<OnDeleteRegistrationSubscription>;
}
