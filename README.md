[![npm version](https://img.shields.io/npm/v/@mike.e.coughlin/flexcomponents-jsx.svg?style=flat)](https://www.npmjs.com/package/@mike.e.coughlin/flexcomponents-jsx)

# FlexComponentsJSX

A reusable React component library containing Flexbox layout compatible `Row` and `Col` components.

## Installation

```bash
npm install @mike.e.coughlin/flexcomponents-jsx
```

## Components

### Row

A horizontal flex container.

```jsx
import { Row } from '@mike.e.coughlin/flexcomponents-jsx';

// Basic usage
<Row>
  <div>Item 1</div>
  <div>Item 2</div>
</Row>

// With alignment
<Row childrenHorizontalPosition="center" childrenVerticalPosition="center">
  <div>Centered content</div>
</Row>
```

### Col

A vertical flex container.

```jsx
import { Col } from '@mike.e.coughlin/flexcomponents-jsx';

// Basic usage
<Col>
  <div>Item 1</div>
  <div>Item 2</div>
</Col>

// With alignment
<Col childrenHorizontalPosition="center" childrenVerticalPosition="center">
  <div>Centered content</div>
</Col>
```

## Props

Both `Row` and `Col` components accept the following props:

| Prop | Type | Options | Description |
|------|------|---------|-------------|
| childrenHorizontalPosition | string | 'start', 'center', 'end' | Horizontal alignment of children |
| childrenVerticalPosition | string | 'start', 'center', 'end' | Vertical alignment of children |
| className | string | - | Additional CSS class names |

In addition, all standard HTML div attributes are supported.