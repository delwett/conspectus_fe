/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CreateUserInput = {
    firstName: string;
    lastName?: string | null;
    email: string;
    password: string;
};
export type InviteUserContentMutationVariables = {
    input: CreateUserInput;
};
export type InviteUserContentMutationResponse = {
    readonly createUser: {
        readonly id: string;
    } | null;
};
export type InviteUserContentMutation = {
    readonly response: InviteUserContentMutationResponse;
    readonly variables: InviteUserContentMutationVariables;
};



/*
mutation InviteUserContentMutation(
  $input: CreateUserInput!
) {
  createUser(createUserInput: $input) {
    id
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
        "name": "createUserInput",
        "variableName": "input"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "createUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
    "name": "InviteUserContentMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "InviteUserContentMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "21d322b29648c5e6eff4575c78bba019",
    "id": null,
    "metadata": {},
    "name": "InviteUserContentMutation",
    "operationKind": "mutation",
    "text": "mutation InviteUserContentMutation(\n  $input: CreateUserInput!\n) {\n  createUser(createUserInput: $input) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f2c79bdc1e9d8670f426663a113c83ba';
export default node;
