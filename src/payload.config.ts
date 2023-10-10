import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb"; // database-adapter-import
import { webpackBundler } from "@payloadcms/bundler-webpack"; // bundler-import
import { slateEditor } from "@payloadcms/richtext-slate"; // editor-import
import { buildConfig } from "payload/config";
import FormBuilder from "@payloadcms/plugin-form-builder";
import { Users, Phrase, PhraseGroup, Profile, Media } from "./collections";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(), // bundler-config
  },
  editor: slateEditor({}), // editor-config
  collections: [Users, Profile, Phrase, PhraseGroup, Media],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [
    payloadCloud(),
    FormBuilder({
      fields: {
        payment: false,
      },
    }),
  ],
  // database-adapter-config-start
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  // database-adapter-config-end
});
