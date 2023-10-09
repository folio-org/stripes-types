# stripes-types

Copyright (C) 2023 The Open Library Foundation

This software is distributed under the terms of the Apache License,
Version 2.0. See the file "[LICENSE](LICENSE)" for more information.

## Introduction

This is a set of TypeScript typings for the [Stripes](https://github.com/folio-org/stripes/) UI framework.

## Use with `react-final-form`

`react-final-form` support is currently experimental. Stripes has form fields which can optionally be controlled via react-final-form or left uncontrolled. However, in RFF, [FieldRenderProps](https://github.com/final-form/react-final-form/blob/09ccc607b3e8843addd7cbde7a84a82866587000/typescript/index.d.ts#L43-L50) are defined problematically:

- `input` and `meta` are **required**, whereas Stripes should have them be optional, meaning we cannot require them;
- the `<Field>` definition requires the `component` to require `input` and `meta`, meaning we cannot leave them optional; and
- the props also allow any other prop to be passed through and overwrites their types as `any`, erasing any specific component typings.

With this current situation, there's not too much we can do to make everyone happy. Therefore, this aspect of the typings is experimental and may change in the future.

Currently, the recommended way to use Stripes components in react-final-form without sacrificing typings is via the render prop or as a child:

```tsx
import { Field } from 'react-final-form';
import { TextField } from '@folio/stripes/components';

// via render prop
<Field
  name="foo"
  render={({ input, meta }) => (
    <TextField
      // pass RFF props only; with the `[otherProp: string]: any;` in `FieldRenderProps`, doing a spread suppresses any warnings for missing props
      input={input}
      meta={meta}
      // other TextField specific props
      label="foo"
      required
    />
  )}
/>

// via children
<Field name="foo">
  {({ input, meta }) => (
    <TextField
      // pass RFF props only; with the `[otherProp: string]: any;` in `FieldRenderProps`, doing a spread suppresses any warnings for missing props
      input={input}
      meta={meta}
      // other TextField specific props
      label="foo"
      required
    />
  )}
</Field>
```
