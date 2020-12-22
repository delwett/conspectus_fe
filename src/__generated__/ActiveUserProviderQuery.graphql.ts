/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ActiveUserProviderQueryVariables = {};
export type ActiveUserProviderQueryResponse = {
    readonly getCurrentUser: {
        readonly id: string;
        readonly firstName: string;
        readonly lastName: string | null;
        readonly email: string;
    } | null;
};
export type ActiveUserProviderQuery = {
    readonly response: ActiveUserProviderQueryResponse;
    readonly variables: ActiveUserProviderQueryVariables;
};



/*
query ActiveUserProviderQuery {
  getCurrentUser {
    id
    firstName
    lastName
    email
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "getCurrentUser",
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
        "name": "firstName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "lastName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ActiveUserProviderQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ActiveUserProviderQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "a15c021f60696c75ff25dbb009df6184",
    "id": null,
    "metadata": {},
    "name": "ActiveUserProviderQuery",
    "operationKind": "query",
    "text": "query ActiveUserProviderQuery {\n  getCurrentUser {\n    id\n    firstName\n    lastName\n    email\n  }\n}\n"
  }
};
})();
(node as any).hash = '5cf8b13af4e66dae40dd794341f25edf';
export default node;
