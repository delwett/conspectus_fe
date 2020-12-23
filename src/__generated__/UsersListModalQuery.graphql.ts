/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UsersListModalQueryVariables = {};
export type UsersListModalQueryResponse = {
    readonly getUsers: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"UserItem_user">;
    }> | null;
};
export type UsersListModalQuery = {
    readonly response: UsersListModalQueryResponse;
    readonly variables: UsersListModalQueryVariables;
};



/*
query UsersListModalQuery {
  getUsers {
    id
    ...UserItem_user
  }
}

fragment UserItem_user on User {
  id
  firstName
  lastName
  email
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
    "name": "UsersListModalQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "getUsers",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UserItem_user"
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
    "name": "UsersListModalQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "getUsers",
        "plural": true,
        "selections": [
          (v0/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "d4227e66d4ecc84d4db63b730c2bbbe4",
    "id": null,
    "metadata": {},
    "name": "UsersListModalQuery",
    "operationKind": "query",
    "text": "query UsersListModalQuery {\n  getUsers {\n    id\n    ...UserItem_user\n  }\n}\n\nfragment UserItem_user on User {\n  id\n  firstName\n  lastName\n  email\n}\n"
  }
};
})();
(node as any).hash = 'b45e44f63a7d7af9468e87cfc68db3cf';
export default node;
