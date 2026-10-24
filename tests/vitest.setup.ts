import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// clear environment after each test case
afterEach(() => {
  cleanup();
});

