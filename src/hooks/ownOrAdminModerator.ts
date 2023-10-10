import { hasRoleAccess } from "../utils/access";

export const ownOrAdminModerator = ({ req: { user } }) => {
  if (!user) return false;
  if (hasRoleAccess(["admin", "moderator"], user.role)) {
    return true;
  }
  return {
    userId: user.id,
  };
};
