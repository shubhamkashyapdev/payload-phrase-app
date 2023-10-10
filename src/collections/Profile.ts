import { CollectionConfig } from "payload/types";
import { DESIGNER_STATUS } from "../utils/options";
import { ownOrAdminModerator } from "../hooks/ownOrAdminModerator";
import { roleAccess } from "../hooks/adminOrModerator";

const Profile: CollectionConfig = {
  slug: "profile",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
    create: ownOrAdminModerator,
    update: ownOrAdminModerator,
    delete: roleAccess(["admin"]),
  },
  fields: [
    // relationship
    {
      type: "relationship",
      relationTo: "users",
      name: "userId",
      label: "User",
      required: true,
      unique: true,
    },
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "bio",
      label: "Bio",
      type: "text",
    },
    // images
    {
      name: "images",
      label: "Images",
      type: "group",
      fields: [
        {
          name: "avatar",
          label: "Avatar",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "profileImage",
          label: "Profile Image",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
    // Client Specific Fields

    // Designer Specific Fields
    {
      type: "row",
      fields: [
        {
          label: "Balance",
          name: "balance",
          type: "number",
          defaultValue: 0,
          admin: {
            width: "50%",
          },
        },
        {
          label: "Score",
          name: "score",
          type: "number",
          defaultValue: 0,
          admin: {
            width: "50%",
          },
        },
      ],
    },
    // contests won - medals
    {
      type: "group",
      label: "Contests Won - Medals",
      name: "medals",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "gold",
              type: "number",
              label: "Gold",
              defaultValue: 0,
              admin: {
                width: "33%",
                position: "sidebar",
              },
            },
            {
              name: "silver",
              type: "number",
              label: "Silver",
              defaultValue: 0,
              admin: {
                width: "33%",
                position: "sidebar",
              },
            },
            {
              name: "bronze",
              type: "number",
              label: "Bronze",
              defaultValue: 0,
              admin: {
                width: "33%",
                position: "sidebar",
              },
            },
          ],
        },
      ],
    },
    {
      type: "select",
      label: "Designer Status",
      name: "designerStatus",
      options: DESIGNER_STATUS,
    },
  ],
};
export default Profile;
