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
    readonly subtasks: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"Subtask_task">;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"Comments_task">;
    readonly " $refType": "Task_task";
};
export type Task_task$data = Task_task;
export type Task_task$key = {
    readonly " $data"?: Task_task$data;
    readonly " $fragmentRefs": FragmentRefs<"Task_task">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Task_task",
  "selections": [
    (v0/*: any*/),
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
      "alias": null,
      "args": null,
      "concreteType": "Task",
      "kind": "LinkedField",
      "name": "subtasks",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Subtask_task"
        }
      ],
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
})();
(node as any).hash = '01bae9022ff4f84bd9cfee761e0b0548';
export default node;
