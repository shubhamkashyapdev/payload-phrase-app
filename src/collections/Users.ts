import { CollectionConfig } from "payload/types";
import { ACCOUNT_STATUS, USER_ROLE, USER_TYPE } from "../utils/options";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "username",
      label: "Username",
      type: "text",
      hooks: {
        beforeChange: [
          async ({ data, req, originalDoc }) => {
            if (data.username) {
              const users = await req.payload.find({
                collection: "users",
                where: {
                  username: {
                    equals: data.username,
                  },
                },
              });
              const user = users.docs[0];
              if (user) {
                // if username is not his own then throw error
                if (user.id !== originalDoc.id) {
                  throw new Error("Username already exists");
                }
              }
            }
          },
        ],
      },
    },
    {
      name: "type",
      label: "User Type",
      type: "select",
      options: USER_TYPE,
      required: true,
    },
    {
      name: "role",
      label: "User Role",
      type: "select",
      options: USER_ROLE,
      defaultValue: "user",
      required: true,
      hooks: {
        beforeChange: [
          async ({ data, req }) => {
            const user = req.user;
            if (
              user?.role !== "admin" &&
              (data?.role === "admin" || data?.role === "moderator")
            ) {
              throw new Error(
                "Only admin users are allowed to create/update admin/moderator account"
              );
            }
          },
        ],
      },
    },
    // Email Fields
    {
      type: "checkbox",
      name: "isEmailVerified",
      label: "Is Email Verified",
      defaultValue: false,
    },
    {
      name: "email",
      type: "text",
      label: "Email",
      required: true,
    },
    {
      name: "accountStatus",
      type: "select",
      label: "Account Status",
      options: ACCOUNT_STATUS,
    },
  ],
};

export default Users;
