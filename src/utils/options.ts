type ISelect<T> = {
  label: string;
  value: T;
};

export type USERTYPE = "client" | "designer";
export const USER_TYPE: ISelect<USERTYPE>[] = [
  {
    label: "Client",
    value: "client",
  },
  {
    label: "Designer",
    value: "designer",
  },
];

export type USERROLE = "admin" | "moderator" | "user";
export const USER_ROLE: ISelect<USERROLE>[] = [
  {
    label: "Admin",
    value: "admin",
  },
  {
    label: "User",
    value: "user",
  },
  {
    label: "Moderator",
    value: "moderator",
  },
];

export type ACCOUNTSTATUS = "active" | "suspended" | "banned";
export const ACCOUNT_STATUS: ISelect<ACCOUNTSTATUS>[] = [
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Suspended",
    value: "suspended",
  },
  {
    label: "Banned",
    value: "banned",
  },
];

export type DESIGNERSTATUS = "approved" | "pending" | "refused";
export const DESIGNER_STATUS: ISelect<DESIGNERSTATUS>[] = [
  {
    label: "Approved",
    value: "approved",
  },
  {
    label: "Pending",
    value: "pending",
  },
  {
    label: "Refused",
    value: "refused",
  },
];
