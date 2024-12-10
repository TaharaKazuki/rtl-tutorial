import { defineConfig } from 'orval';

export default defineConfig({
  petstore: {
    output: {
      mode: 'tags-split',
      target: 'src/petstore.ts',
      schemas: 'src/model',
      client: 'react-query',
      httpClient: 'fetch',
      mock: false,
    },
    input: {
      target: './petstore.yaml',
    },
  },
});
