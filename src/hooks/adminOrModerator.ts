import { hasRoleAccess } from "../utils/access";
import { USERROLE } from "../utils/options";

export const roleAccess =
  (roles: USERROLE[]) =>
  ({ req: { user } }) => {
    if (hasRoleAccess(roles, user.role)) {
      return true;
    }
    return false;
  };
