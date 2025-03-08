# SaasFork UI

UI component library for SaasFork.

## Installation

### Basic Installation

To install this module in your project:

```bash
# With npm
npm install @saasfork-ui

# With yarn
yarn add @saasfork-ui

# With pnpm
pnpm add @saasfork-ui
```

### As a Nuxt.js Module

1. Install the package:

```bash
# With npm
npm install @saasfork-ui

# With yarn
yarn add @saasfork-ui

# With pnpm
pnpm add @saasfork-ui
```

2. Add the module to your `nuxt.config.js` or `nuxt.config.ts` file:

```js
// nuxt.config.js or nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@saasfork-ui/nuxt'
  ],
  
  // Optional module configuration
  saasforkUI: {
    // your configuration options here
  }
})
```

## Usage

You can import components as follows:

```jsx
import { Button, Input } from '@saasfork-ui';

const MyComponent = () => {
  return (
    <div>
      <Input placeholder="Enter your text" />
      <Button>Click me</Button>
    </div>
  );
};
```

### In Nuxt.js

When installed as a Nuxt.js module, components are automatically available:

```vue
<template>
  <div>
    <SfInput placeholder="Enter your text" />
    <SfButton>Click me</SfButton>
  </div>
</template>

<script setup>
// No imports needed! Components are globally registered
</script>
```

## Development

### Prerequisites

- Node.js (version 16 or higher)
- npm, yarn, or pnpm

### Installing dependencies

```bash
npm install
# or
yarn
# or
pnpm install
```

### Starting Storybook

To launch the Storybook development environment (in playground):

```bash
npm run storybook
# or
yarn storybook
# or
pnpm storybook
```

Storybook will be accessible at [http://localhost:6006](http://localhost:6006).

### Build

To create a production version of the library:

```bash
npm run build
# or
yarn build
# or
pnpm build
```