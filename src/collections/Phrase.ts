import { CollectionConfig } from "payload/types";

const Phrase: CollectionConfig = {
  slug: "phrase",
  fields: [
    {
      name: "phrase_group_id",
      label: "Phrase Group ID",
      type: "relationship",
      relationTo: "phrase_group",
      required: true,
    },
    {
      name: "term",
      label: "Term",
      type: "textarea",
      required: true,
    },
    {
      name: "isVisible",
      label: "Visible?",
      type: "checkbox",
      defaultValue: true,
    },
    {
      name: "is_autosuggestable",
      label: "Autosuggestable?",
      type: "checkbox",
      defaultValue: true,
    },
    {
      name: "parent_id",
      label: "Parent ID",
      type: "relationship",
      relationTo: "phrase_group",
      required: true,
    },
    {
      name: "type",
      label: "Type",
      type: "text",
      required: true,
    },
    {
      name: "position",
      label: "Position",
      type: "number",
      defaultValue: 0,
    },
    {
      name: "term_phonetic",
      label: "Term Phonetic",
      type: "textarea",
      required: true,
    },
    {
      name: "phrase_group_id1",
      label: "Phrase Group ID1",
      type: "relationship",
      relationTo: "phrase_group",
      required: true,
    },
  ],
};
export default Phrase;
