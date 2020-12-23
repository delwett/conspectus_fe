/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserItem_user = {
    readonly id: string;
    readonly firstName: string;
    readonly lastName: string | null;
    readonly email: string;
    readonly " $refType": "UserItem_user";
};
export type UserItem_user$data = UserItem_user;
export type UserItem_user$key = {
    readonly " $data"?: UserItem_user$data;
    readonly " $fragmentRefs": FragmentRefs<"UserItem_user">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserItem_user",
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
  "type": "User",
  "abstractKey": null
};
(node as any).hash = 'cf8789b43e73f05a56a0af6d760a7a66';
export default node;
