/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TasksList_board = {
    readonly tasks: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"Task_task">;
    }>;
    readonly " $refType": "TasksList_board";
};
export type TasksList_board$data = TasksList_board;
export type TasksList_board$key = {
    readonly " $data"?: TasksList_board$data;
    readonly " $fragmentRefs": FragmentRefs<"TasksList_board">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TasksList_board",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Task",
      "kind": "LinkedField",
      "name": "tasks",
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
          "args": null,
          "kind": "FragmentSpread",
          "name": "Task_task"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Board",
  "abstractKey": null
};
(node as any).hash = 'ae199d799449ce1686b1531003ba3a2c';
export default node;
