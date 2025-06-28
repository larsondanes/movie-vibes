# Test Configuration Guide

This document outlines the environment variables available for configuring test behavior.

## Test Environment Variables

### `ENABLE_TEST_LOGS`

**Default**: `false`  
**Values**: `true` | `false`

Controls the verbosity of logging during test execution.

- `false` (default): Only show error logs
- `true`: Show all log levels (log, error, warn, debug, verbose)

**Usage**:

```bash
# Enable verbose logging for debugging test issues
ENABLE_TEST_LOGS=true yarn test

# Default behavior (minimal logging)
yarn test
```

### `USE_REAL_TMDB_API`

**Default**: `false`  
**Values**: `true` | `false`

Controls whether integration tests use real TMDb API calls or mocked responses.

- `false` (default): Use mocked TMDb responses for fast, predictable tests
- `true`: Make real API calls to TMDb (requires valid API key)

**Usage**:

```bash
# Test with real TMDb API (slower, requires internet)
USE_REAL_TMDB_API=true yarn test src/modules/movies/__tests__/movie-details.integration.spec.ts

# Default behavior (mocked API responses)
yarn test src/modules/movies/__tests__/movie-details.integration.spec.ts
```

### `E2E_TESTS`

**Default**: `false`  
**Values**: `true` | `false`

Controls whether End-to-End tests that make real external API calls are executed.

- `false` (default): Skip E2E tests to avoid API rate limits and external dependencies
- `true`: Run E2E tests with real TMDb API calls

**Usage**:

```bash
# Run E2E tests with real API calls
E2E_TESTS=true yarn test src/modules/movies/__tests__/movie-details.e2e.spec.ts

# Default behavior (E2E tests are skipped)
yarn test src/modules/movies/__tests__/movie-details.e2e.spec.ts
```

## Test Types

### Unit Tests

- **Files**: `*.service.spec.ts`, `*.resolver.spec.ts`
- **Scope**: Test individual components in isolation
- **Dependencies**: All external dependencies are mocked
- **Speed**: Fast
- **Reliability**: High (no external dependencies)

### Integration Tests

- **Files**: `*.integration.spec.ts`
- **Scope**: Test GraphQL endpoints with service integration
- **Dependencies**: TMDb API can be mocked or real (controlled by `USE_REAL_TMDB_API`)
- **Speed**: Medium (faster with mocks, slower with real API)
- **Reliability**: High with mocks, medium with real API

### End-to-End Tests

- **Files**: `*.e2e.spec.ts`
- **Scope**: Test complete application flows with real external services
- **Dependencies**: Real TMDb API calls (controlled by `E2E_TESTS`)
- **Speed**: Slow (real network calls)
- **Reliability**: Medium (dependent on external services)

## Common Testing Scenarios

### Development (Fast Feedback)

```bash
# Run all tests with minimal logging and mocked dependencies
yarn test
```

### Debugging Test Issues

```bash
# Enable verbose logging to see what's happening
ENABLE_TEST_LOGS=true yarn test src/modules/movies/__tests__/movie-details.service.spec.ts
```

### Testing Real API Integration

```bash
# Test integration with real TMDb API
USE_REAL_TMDB_API=true ENABLE_TEST_LOGS=true yarn test src/modules/movies/__tests__/movie-details.integration.spec.ts
```

### Full End-to-End Testing

```bash
# Run comprehensive E2E tests (use sparingly to avoid rate limits)
E2E_TESTS=true ENABLE_TEST_LOGS=true yarn test src/modules/movies/__tests__/movie-details.e2e.spec.ts
```

### CI/CD Pipeline

```bash
# Fast, reliable tests for continuous integration
yarn test --coverage
```

## Prerequisites

### For Real API Tests

- Valid `TMDB_API_KEY` in `.env` file
- Internet connection
- Respect for TMDb API rate limits

### For E2E Tests

- All prerequisites for real API tests
- Longer test timeouts configured
- Understanding that tests may be flaky due to external dependencies

## Best Practices

1. **Default to mocked tests** for development and CI/CD
2. **Use real API tests** when developing new TMDb integrations
3. **Run E2E tests manually** before major releases
4. **Enable logging** only when debugging specific issues
5. **Respect API rate limits** when using real API tests
6. **Keep test data realistic** but avoid dependencies on specific movie data that might change
