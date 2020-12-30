/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UpdateTaskParentInput = {
    id: string;
    parentId?: string | null;
};
export type useUpdateParentMutationVariables = {
    input: UpdateTaskParentInput;
};
export type useUpdateParentMutationResponse = {
    readonly updateTaskParent: {
        readonly id: string;
    } | null;
};
export type useUpdateParentMutation = {
    readonly response: useUpdateParentMutationResponse;
    readonly variables: useUpdateParentMutationVariables;
};



/*
mutation useUpdateParentMutation(
  $input: UpdateTaskParentInput!
) {
  updateTaskParent(updateTaskParentInput: $input) {
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
        "name": "updateTaskParentInput",
        "variableName": "input"
      }
    ],
    "concreteType": "Task",
    "kind": "LinkedField",
    "name": "updateTaskParent",
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
    "name": "useUpdateParentMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useUpdateParentMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7d996e31bffc530ef025541635a0a19b",
    "id": null,
    "metadata": {},
    "name": "useUpdateParentMutation",
    "operationKind": "mutation",
    "text": "mutation useUpdateParentMutation(\n  $input: UpdateTaskParentInput!\n) {\n  updateTaskParent(updateTaskParentInput: $input) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '73c8c7e57f46912a812d0d5dda8637b6';
export default node;
