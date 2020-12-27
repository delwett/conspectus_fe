/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UpdateUserInput = {
    firstName: string;
    lastName?: string | null;
    email: string;
};
export type UpdateProfileContentMutationVariables = {
    input: UpdateUserInput;
};
export type UpdateProfileContentMutationResponse = {
    readonly updateUser: {
        readonly id: string;
        readonly firstName: string;
        readonly lastName: string | null;
        readonly email: string;
    } | null;
};
export type UpdateProfileContentMutation = {
    readonly response: UpdateProfileContentMutationResponse;
    readonly variables: UpdateProfileContentMutationVariables;
};



/*
mutation UpdateProfileContentMutation(
  $input: UpdateUserInput!
) {
  updateUser(updateUserInput: $input) {
    id
    firstName
    lastName
    email
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "updateUserInput",
        "variableName": "input"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "updateUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "firstName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "lastName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateProfileContentMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateProfileContentMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ebb78b66fa60cf35d863d8fc3d6c432c",
    "id": null,
    "metadata": {},
    "name": "UpdateProfileContentMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateProfileContentMutation(\n  $input: UpdateUserInput!\n) {\n  updateUser(updateUserInput: $input) {\n    id\n    firstName\n    lastName\n    email\n  }\n}\n"
  }
};
})();
(node as any).hash = '54394421a3f3fa30673c78a73b2fa4ac';
export default node;
