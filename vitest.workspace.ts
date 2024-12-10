import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  {
    extends: './vitest.config.ts',
    test: {
      name: 'unit',
      root: 'src',
      include: ['**/*.(test|spec).ts'],
    },
  },
]);
