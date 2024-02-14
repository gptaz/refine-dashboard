import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "https://api.crm.refine.dev/graphql",
    generates: {
        "src/graphql/schema.types.ts": {
            // preset: "client",npm 
            plugins: ["typescript"],
            documents: ["src/**/*.{ts,tsx}"],
            config: {
                skipTypename: true,
                enumsAsTypes: true,
            },
            hooks: { afterOneFileWrite: ["eslint --fix", "prettier --write"] },
        },
    },
    ignoreNoDocuments: true,
};

export default config;