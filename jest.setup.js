import '@testing-library/jest-dom'

// React 18の act警告を抑制
global.console = {
  ...console,
  error: jest.fn(),
  warn: jest.fn(),
}