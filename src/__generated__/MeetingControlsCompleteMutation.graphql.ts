/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type MeetingControlsCompleteMutationVariables = {};
export type MeetingControlsCompleteMutationResponse = {
    readonly completeMeeting: boolean | null;
};
export type MeetingControlsCompleteMutation = {
    readonly response: MeetingControlsCompleteMutationResponse;
    readonly variables: MeetingControlsCompleteMutationVariables;
};



/*
mutation MeetingControlsCompleteMutation {
  completeMeeting
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "completeMeeting",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MeetingControlsCompleteMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MeetingControlsCompleteMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "3e356f962d36575a4d2adee5da2161ae",
    "id": null,
    "metadata": {},
    "name": "MeetingControlsCompleteMutation",
    "operationKind": "mutation",
    "text": "mutation MeetingControlsCompleteMutation {\n  completeMeeting\n}\n"
  }
};
})();
(node as any).hash = '62cd7849f579016f8efbcc8341ecc1ac';
export default node;
