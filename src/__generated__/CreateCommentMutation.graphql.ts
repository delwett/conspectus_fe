/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CreateCommentInput = {
    taskId: string;
    text: string;
};
export type CreateCommentMutationVariables = {
    input: CreateCommentInput;
};
export type CreateCommentMutationResponse = {
    readonly createComment: {
        readonly id: string;
    } | null;
};
export type CreateCommentMutation = {
    readonly response: CreateCommentMutationResponse;
    readonly variables: CreateCommentMutationVariables;
};



/*
mutation CreateCommentMutation(
  $input: CreateCommentInput!
) {
  createComment(createCommentInput: $input) {
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
        "name": "createCommentInput",
        "variableName": "input"
      }
    ],
    "concreteType": "Comment",
    "kind": "LinkedField",
    "name": "createComment",
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
    "name": "CreateCommentMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateCommentMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "561216f105f8b84bf1000c02ae7ab252",
    "id": null,
    "metadata": {},
    "name": "CreateCommentMutation",
    "operationKind": "mutation",
    "text": "mutation CreateCommentMutation(\n  $input: CreateCommentInput!\n) {\n  createComment(createCommentInput: $input) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c7baff31252967e348a68c78d2b25ddf';
export default node;
