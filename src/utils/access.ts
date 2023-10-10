import { USERROLE } from "./options";
export const hasRoleAccess = (roles: USERROLE[], role: USERROLE) => {
  if (roles.includes(role)) return true;
  return false;
};
