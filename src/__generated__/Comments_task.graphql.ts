/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Comments_task = {
    readonly comments: ReadonlyArray<{
        readonly id: string;
        readonly text: string;
    }>;
    readonly " $refType": "Comments_task";
};
export type Comments_task$data = Comments_task;
export type Comments_task$key = {
    readonly " $data"?: Comments_task$data;
    readonly " $fragmentRefs": FragmentRefs<"Comments_task">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Comments_task",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Comment",
      "kind": "LinkedField",
      "name": "comments",
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
          "name": "text",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Task",
  "abstractKey": null
};
(node as any).hash = '3b285c9ad38e3c9ff627e93ae7ae94e4';
export default node;
