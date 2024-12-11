import { defineConfig } from 'orval';

export default defineConfig({
  petstore: {
    output: {
      mode: 'tags-split',
      target: 'src/gen/petstore.ts',
      schemas: 'src/gen/models',
      client: 'react-query',
      httpClient: 'fetch',
      mock: false,
      override: {
        fetch: {
          includeHttpResponseReturnType: false,
        },
      },
    },
    input: {
      target: './petstore.yaml',
    },
  },
  petstoreZod: {
    input: {
      target: './petstore.yaml',
    },
    output: {
      mode: 'tags-split',
      client: 'zod',
      target: 'src/gen/petstore.ts',
      fileExtension: '.zod.ts',
    },
  },
});
