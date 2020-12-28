/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UpdatePasswordInput = {
    oldPassword: string;
    newPassword: string;
};
export type ChangePasswordContentMutationVariables = {
    input: UpdatePasswordInput;
};
export type ChangePasswordContentMutationResponse = {
    readonly updatePassword: string | null;
};
export type ChangePasswordContentMutation = {
    readonly response: ChangePasswordContentMutationResponse;
    readonly variables: ChangePasswordContentMutationVariables;
};



/*
mutation ChangePasswordContentMutation(
  $input: UpdatePasswordInput!
) {
  updatePassword(updatePasswordInput: $input)
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
        "name": "updatePasswordInput",
        "variableName": "input"
      }
    ],
    "kind": "ScalarField",
    "name": "updatePassword",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ChangePasswordContentMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ChangePasswordContentMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "fcca3c559cc2994d7884debe52b87591",
    "id": null,
    "metadata": {},
    "name": "ChangePasswordContentMutation",
    "operationKind": "mutation",
    "text": "mutation ChangePasswordContentMutation(\n  $input: UpdatePasswordInput!\n) {\n  updatePassword(updatePasswordInput: $input)\n}\n"
  }
};
})();
(node as any).hash = 'bb6d09f83b49fa1200090e0a33c211b5';
export default node;
