/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TaskStatusEnum = "COMPLETED" | "IN_PROGRESS" | "%future added value";
export type Task_task = {
    readonly id: string;
    readonly description: string;
    readonly status: TaskStatusEnum;
    readonly " $fragmentRefs": FragmentRefs<"Comments_task">;
    readonly " $refType": "Task_task";
};
export type Task_task$data = Task_task;
export type Task_task$key = {
    readonly " $data"?: Task_task$data;
    readonly " $fragmentRefs": FragmentRefs<"Task_task">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Task_task",
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
(node as any).hash = '82887af6b37c73982c144f7ab736e341';
export default node;
