import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
  access: {
    read: () => true,
  },
  upload: {
    disableLocalStorage: false, // set to true to disable local storage - when using external storage like cloudinary
    staticURL: "/media",
    staticDir: "media",
    imageSizes: [
      {
        name: "thumbnail",
        width: 100,
        height: null,
        position: "center",
      },
      {
        name: "card",
        width: 400,
        height: null,
        position: "center",
      },
    ],
    adminThumbnail: "thumbnail",
    mimeTypes: ["images/*"],
  },
};
export default Media;
