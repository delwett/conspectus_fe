/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BoardQueryVariables = {};
export type BoardQueryResponse = {
    readonly getCurrentBoard: {
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"MeetingData_board" | "TasksList_board" | "MeetingControls_board">;
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
    ...TasksList_board
    ...MeetingControls_board
  }
}

fragment Comments_task on Task {
  comments {
    id
    text
  }
}

fragment MeetingControls_board on Board {
  meetingDate
}

fragment MeetingData_board on Board {
  meetingDate
}

fragment Subtask_task on Task {
  id
  description
  status
  ...Comments_task
}

fragment Task_task on Task {
  id
  description
  status
  ...Comments_task
  subtasks {
    id
    ...Subtask_task
  }
}

fragment TasksList_board on Board {
  tasks {
    id
    ...Task_task
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "Comment",
  "kind": "LinkedField",
  "name": "comments",
  "plural": true,
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "text",
      "storageKey": null
    }
  ],
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
            "name": "TasksList_board"
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
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Task",
            "kind": "LinkedField",
            "name": "tasks",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Task",
                "kind": "LinkedField",
                "name": "subtasks",
                "plural": true,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ff1282a812229d25d95f871ed8010d8c",
    "id": null,
    "metadata": {},
    "name": "BoardQuery",
    "operationKind": "query",
    "text": "query BoardQuery {\n  getCurrentBoard {\n    id\n    ...MeetingData_board\n    ...TasksList_board\n    ...MeetingControls_board\n  }\n}\n\nfragment Comments_task on Task {\n  comments {\n    id\n    text\n  }\n}\n\nfragment MeetingControls_board on Board {\n  meetingDate\n}\n\nfragment MeetingData_board on Board {\n  meetingDate\n}\n\nfragment Subtask_task on Task {\n  id\n  description\n  status\n  ...Comments_task\n}\n\nfragment Task_task on Task {\n  id\n  description\n  status\n  ...Comments_task\n  subtasks {\n    id\n    ...Subtask_task\n  }\n}\n\nfragment TasksList_board on Board {\n  tasks {\n    id\n    ...Task_task\n  }\n}\n"
  }
};
})();
(node as any).hash = 'dd277d962f341c01a3670f331c0f46f4';
export default node;
