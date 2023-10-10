import { CollectionConfig } from "payload/types";

const PhraseGroup: CollectionConfig = {
  slug: "phrase_group",
  fields: [
    {
      name: "translation",
      label: "Translation",
      type: "textarea",
      required: true,
    },
    {
      name: "explanation",
      label: "Explanation",
      type: "text", // this can also be a textarea
      required: true,
    },
    {
      type: "row",
      fields: [
        {
          name: "is_linkable",
          label: "Linkable?",
          type: "checkbox", // boolean values are better when dealing with yes / no type values  - instead of 0 | 1
          defaultValue: true,
          admin: {
            width: "33%",
          },
        },
        {
          name: "is_detailVisible",
          label: "Detail Visible?",
          type: "checkbox",
          defaultValue: true,
          admin: {
            width: "33%",
          },
        },
        {
          name: "is_vocabulary",
          label: "Vocabulary?",
          type: "checkbox",
          defaultValue: true,
          admin: {
            width: "33%",
          },
        },
      ],
    },
    {
      name: "reference",
      label: "Reference",
      type: "textarea",
      required: true,
      // we should add min/max for data validation - added 100,5000 dummy values
      minLength: 100,
      maxLength: 5000,
    },
    {
      name: "cmt",
      label: "CMT", // use CMT full form here
      type: "text",
      required: true,
    },
    {
      name: "status",
      label: "Status",
      type: "checkbox",
      defaultValue: true,
    },
    {
      name: "ly_media_ids",
      label: "LY Media IDs",
      type: "array",
      fields: [
        {
          label: "LY Media ID",
          name: "ly_media_id",
          type: "relationship",
          relationTo: "media",
          required: true,
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "owner_id",
          label: "Owner ID",
          type: "relationship",
          relationTo: "users",
          admin: {
            width: "50%",
          },
        },
        {
          name: "next_editor_id",
          label: "Next Editor ID",
          type: "relationship",
          relationTo: "users",
          admin: {
            width: "50%",
          },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "created_editor_id",
          label: "Created Editor ID",
          type: "relationship",
          relationTo: "users",
          admin: {
            width: "50%",
          },
        },
        {
          name: "updated_editor_id",
          label: "Updated Editor ID",
          type: "relationship",
          relationTo: "users",
          admin: {
            width: "50%",
          },
        },
      ],
    },
    {
      name: "version",
      label: "Version",
      type: "number",
      defaultValue: 1,
    },
    {
      name: "phrasionary_master_phrase",
      label: "Phrasionary Master Phrase",
      type: "textarea",
      required: true,
    },
    {
      name: "ly_media_asset_id",
      label: "LY Media Asset ID",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
  timestamps: true,
};
export default PhraseGroup;
