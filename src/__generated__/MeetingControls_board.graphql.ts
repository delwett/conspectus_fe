/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MeetingControls_board = {
    readonly meetingDate: string;
    readonly " $refType": "MeetingControls_board";
};
export type MeetingControls_board$data = MeetingControls_board;
export type MeetingControls_board$key = {
    readonly " $data"?: MeetingControls_board$data;
    readonly " $fragmentRefs": FragmentRefs<"MeetingControls_board">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MeetingControls_board",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "meetingDate",
      "storageKey": null
    }
  ],
  "type": "Board",
  "abstractKey": null
};
(node as any).hash = '440b5b89c7d8d335e2d37757d8f421e2';
export default node;
