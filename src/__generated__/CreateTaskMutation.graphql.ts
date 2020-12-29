/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CreateTaskInput = {
    parentId?: string | null;
    description: string;
};
export type CreateTaskMutationVariables = {
    input: CreateTaskInput;
};
export type CreateTaskMutationResponse = {
    readonly createTask: {
        readonly id: string;
    } | null;
};
export type CreateTaskMutation = {
    readonly response: CreateTaskMutationResponse;
    readonly variables: CreateTaskMutationVariables;
};



/*
mutation CreateTaskMutation(
  $input: CreateTaskInput!
) {
  createTask(createTaskInput: $input) {
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
        "name": "createTaskInput",
        "variableName": "input"
      }
    ],
    "concreteType": "Task",
    "kind": "LinkedField",
    "name": "createTask",
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
    "name": "CreateTaskMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateTaskMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8b887b537fad3f5c23c978588ec20973",
    "id": null,
    "metadata": {},
    "name": "CreateTaskMutation",
    "operationKind": "mutation",
    "text": "mutation CreateTaskMutation(\n  $input: CreateTaskInput!\n) {\n  createTask(createTaskInput: $input) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '150d39600b4973fbd5a4dbc11345f7f6';
export default node;
