/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MeetingData_board = {
    readonly meetingDate: string;
    readonly " $refType": "MeetingData_board";
};
export type MeetingData_board$data = MeetingData_board;
export type MeetingData_board$key = {
    readonly " $data"?: MeetingData_board$data;
    readonly " $fragmentRefs": FragmentRefs<"MeetingData_board">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MeetingData_board",
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
(node as any).hash = 'b3ae3945fa54c756570d0e9bd05f4cec';
export default node;
