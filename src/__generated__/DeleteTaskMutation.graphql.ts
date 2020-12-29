/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type DeleteTaskInput = {
    id: string;
};
export type DeleteTaskMutationVariables = {
    input: DeleteTaskInput;
};
export type DeleteTaskMutationResponse = {
    readonly deleteTask: boolean | null;
};
export type DeleteTaskMutation = {
    readonly response: DeleteTaskMutationResponse;
    readonly variables: DeleteTaskMutationVariables;
};



/*
mutation DeleteTaskMutation(
  $input: DeleteTaskInput!
) {
  deleteTask(deleteTaskInput: $input)
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
        "name": "deleteTaskInput",
        "variableName": "input"
      }
    ],
    "kind": "ScalarField",
    "name": "deleteTask",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteTaskMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteTaskMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "af997f89fa87373b4b21caa6e6f760e8",
    "id": null,
    "metadata": {},
    "name": "DeleteTaskMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteTaskMutation(\n  $input: DeleteTaskInput!\n) {\n  deleteTask(deleteTaskInput: $input)\n}\n"
  }
};
})();
(node as any).hash = '1af5ed8bd24c1614aa009bec3ff6df6d';
export default node;
