/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BoardQueryVariables = {};
export type BoardQueryResponse = {
    readonly getCurrentBoard: {
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"MeetingData_board" | "MeetingControls_board">;
    };
};
export type BoardQuery = {
    readonly response: BoardQueryResponse;
    readonly variables: BoardQueryVariables;
};



/*
query BoardQuery {
  getCurrentBoard {
    id
    ...MeetingData_board
    ...MeetingControls_board
  }
}

fragment MeetingControls_board on Board {
  meetingDate
}

fragment MeetingData_board on Board {
  meetingDate
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BoardQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Board",
        "kind": "LinkedField",
        "name": "getCurrentBoard",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MeetingData_board"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MeetingControls_board"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BoardQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Board",
        "kind": "LinkedField",
        "name": "getCurrentBoard",
        "plural": false,
        "selections": [
          (v0/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "52c0924b46180fa728b48408f7ae20cf",
    "id": null,
    "metadata": {},
    "name": "BoardQuery",
    "operationKind": "query",
    "text": "query BoardQuery {\n  getCurrentBoard {\n    id\n    ...MeetingData_board\n    ...MeetingControls_board\n  }\n}\n\nfragment MeetingControls_board on Board {\n  meetingDate\n}\n\nfragment MeetingData_board on Board {\n  meetingDate\n}\n"
  }
};
})();
(node as any).hash = '41a766e1baccbbc54ef57a33e253b934';
export default node;
