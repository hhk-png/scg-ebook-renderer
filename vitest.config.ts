import { coverageConfigDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    extensions: ['.ts', '.d.ts', '.json', '.js'],
  },
  test: {
    pool: 'forks',
    globals: true,
    environment: 'node',
    include: ['./test/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      exclude: [
        ...coverageConfigDefaults.exclude,
      ],
    },
    testTimeout: 10_000,
  },
})
