/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type DeleteUserInput = {
    id: string;
};
export type UserItemDeleteMutationVariables = {
    input: DeleteUserInput;
};
export type UserItemDeleteMutationResponse = {
    readonly deleteUser: boolean | null;
};
export type UserItemDeleteMutation = {
    readonly response: UserItemDeleteMutationResponse;
    readonly variables: UserItemDeleteMutationVariables;
};



/*
mutation UserItemDeleteMutation(
  $input: DeleteUserInput!
) {
  deleteUser(deleteUserInput: $input)
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
        "name": "deleteUserInput",
        "variableName": "input"
      }
    ],
    "kind": "ScalarField",
    "name": "deleteUser",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserItemDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserItemDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "13137661b0e352987bfd50d73969dc2a",
    "id": null,
    "metadata": {},
    "name": "UserItemDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation UserItemDeleteMutation(\n  $input: DeleteUserInput!\n) {\n  deleteUser(deleteUserInput: $input)\n}\n"
  }
};
})();
(node as any).hash = '451c8c7852ba5d473c7fba2893e30be0';
export default node;
