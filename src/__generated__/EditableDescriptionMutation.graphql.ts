/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UpdateTaskDescriptionInput = {
    id: string;
    description: string;
};
export type EditableDescriptionMutationVariables = {
    input: UpdateTaskDescriptionInput;
};
export type EditableDescriptionMutationResponse = {
    readonly updateTaskDescription: {
        readonly id: string;
        readonly description: string;
    } | null;
};
export type EditableDescriptionMutation = {
    readonly response: EditableDescriptionMutationResponse;
    readonly variables: EditableDescriptionMutationVariables;
};



/*
mutation EditableDescriptionMutation(
  $input: UpdateTaskDescriptionInput!
) {
  updateTaskDescription(updateTaskDescriptionInput: $input) {
    id
    description
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
        "name": "updateTaskDescriptionInput",
        "variableName": "input"
      }
    ],
    "concreteType": "Task",
    "kind": "LinkedField",
    "name": "updateTaskDescription",
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
        "name": "description",
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
    "name": "EditableDescriptionMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditableDescriptionMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5f0bd0d2f1f2a2b9c277cda9dc47d104",
    "id": null,
    "metadata": {},
    "name": "EditableDescriptionMutation",
    "operationKind": "mutation",
    "text": "mutation EditableDescriptionMutation(\n  $input: UpdateTaskDescriptionInput!\n) {\n  updateTaskDescription(updateTaskDescriptionInput: $input) {\n    id\n    description\n  }\n}\n"
  }
};
})();
(node as any).hash = '2ef11671dffb062e8e7a6249d46d11b4';
export default node;
