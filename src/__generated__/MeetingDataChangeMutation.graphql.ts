/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UpdateMeetingDateInput = {
    date: string;
};
export type MeetingDataChangeMutationVariables = {
    input: UpdateMeetingDateInput;
};
export type MeetingDataChangeMutationResponse = {
    readonly updateMeetingDate: {
        readonly id: string;
        readonly meetingDate: string;
    } | null;
};
export type MeetingDataChangeMutation = {
    readonly response: MeetingDataChangeMutationResponse;
    readonly variables: MeetingDataChangeMutationVariables;
};



/*
mutation MeetingDataChangeMutation(
  $input: UpdateMeetingDateInput!
) {
  updateMeetingDate(updateMeetingDateInput: $input) {
    id
    meetingDate
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
        "name": "updateMeetingDateInput",
        "variableName": "input"
      }
    ],
    "concreteType": "Board",
    "kind": "LinkedField",
    "name": "updateMeetingDate",
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
        "name": "meetingDate",
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
    "name": "MeetingDataChangeMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MeetingDataChangeMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0b6053b409f8b093d84659218894e1c6",
    "id": null,
    "metadata": {},
    "name": "MeetingDataChangeMutation",
    "operationKind": "mutation",
    "text": "mutation MeetingDataChangeMutation(\n  $input: UpdateMeetingDateInput!\n) {\n  updateMeetingDate(updateMeetingDateInput: $input) {\n    id\n    meetingDate\n  }\n}\n"
  }
};
})();
(node as any).hash = 'af52d6ba62531fd64f2cf203c9769e28';
export default node;
