/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type TaskStatusEnum = "COMPLETED" | "IN_PROGRESS" | "%future added value";
export type UpdateTaskStatusInput = {
    id: string;
    status: TaskStatusEnum;
};
export type StatusUpdateMutationVariables = {
    input: UpdateTaskStatusInput;
};
export type StatusUpdateMutationResponse = {
    readonly updateTaskStatus: ReadonlyArray<{
        readonly id: string;
        readonly status: TaskStatusEnum;
    } | null> | null;
};
export type StatusUpdateMutation = {
    readonly response: StatusUpdateMutationResponse;
    readonly variables: StatusUpdateMutationVariables;
};



/*
mutation StatusUpdateMutation(
  $input: UpdateTaskStatusInput!
) {
  updateTaskStatus(updateTaskStatusInput: $input) {
    id
    status
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
        "name": "updateTaskStatusInput",
        "variableName": "input"
      }
    ],
    "concreteType": "Task",
    "kind": "LinkedField",
    "name": "updateTaskStatus",
    "plural": true,
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
        "name": "status",
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
    "name": "StatusUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "StatusUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "64bea1d9e75016985bf279cc7ae1997f",
    "id": null,
    "metadata": {},
    "name": "StatusUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation StatusUpdateMutation(\n  $input: UpdateTaskStatusInput!\n) {\n  updateTaskStatus(updateTaskStatusInput: $input) {\n    id\n    status\n  }\n}\n"
  }
};
})();
(node as any).hash = 'bce6fb1c3eb06a72df59ee9b72da811b';
export default node;
