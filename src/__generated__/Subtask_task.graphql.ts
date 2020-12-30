/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TaskStatusEnum = "COMPLETED" | "IN_PROGRESS" | "%future added value";
export type Subtask_task = {
    readonly id: string;
    readonly description: string;
    readonly status: TaskStatusEnum;
    readonly " $fragmentRefs": FragmentRefs<"Comments_task">;
    readonly " $refType": "Subtask_task";
};
export type Subtask_task$data = Subtask_task;
export type Subtask_task$key = {
    readonly " $data"?: Subtask_task$data;
    readonly " $fragmentRefs": FragmentRefs<"Subtask_task">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Subtask_task",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "status",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Comments_task"
    }
  ],
  "type": "Task",
  "abstractKey": null
};
(node as any).hash = '4c94e2e4079222294dbe4ce9ac18f7d7';
export default node;
