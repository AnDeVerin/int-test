# Intelas design system: Button & Icon components

## Task

Implement button component from Intelas design system. [Figma link](https://www.figma.com/file/z3B75JkORmT0EVw1mfqtdb/Intelas-Design-System?node-id=28%3A67&t=oBHjEoeyM6QjJIbd-0)

Basic requirements:

- All variants must be implemented

- All props must be implemented

- All props typed

- Terminology from Figma is not necessary

- Documentation

For the technology stack we recommend you to follow this group:

- React

- Storybook

- Typescript

- SASS

## Demo

👉 Check out storybook app at [andeverin.github.io/int-test](https://andeverin.github.io/int-test/?path=/docs/docs-button--primary)

## Implementation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Storybook](https://storybook.js.org/).

This setup is simple demo with 2 components. Run the storybook in the development mode.

```bash
npm run storybook
```

## Common modules

SVG-sprite with icons and some common styles are injected into the document body `./storybook/preview-body.html` for simplicity. Source files can be found in `src/icons` and `src/styles` folders.

## Icon component

👉 Find more information at [Icon page](https://andeverin.github.io/int-test/?path=/docs/docs-icon--info)

> Dependency for Button component.

| Property            | Description                                                               | Type                               | Default          |
| ------------------- | ------------------------------------------------------------------------- | ---------------------------------- | ---------------- |
| `size`              | Icon size (l: 24px \| s: 20px)                                            | `IconSize.Large \| IconSize.Small` | `IconSize.Large` |
| `name` _(required)_ | Icon name (svg icon filename without extension) e.g. `info.svg` -> `info` | `string`                           | `undefined`      |

---

### Usage

```tsx
<Icon size="s" name="info" />
```

## Button component

👉 Find more information at [Button page](https://andeverin.github.io/int-test/?path=/docs/docs-button--primary)

| Property       | Description                                                                                   | Type                                                                                      | Default              |
| -------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | -------------------- |
| `type`         | Button type                                                                                   | `ButtonType.Primary \| ButtonType.Secondary \| ButtonType.Flat \| ButtonType.Destructive` | `ButtonType.Primary` |
| `size`         | Button size                                                                                   | `ButtonSize.Large \| ButtonSize.Small`                                                    | `ButtonSize.Small`   |
| `label`        | Button label                                                                                  | `string`                                                                                  | `undefined`          |
| `iconName`     | Icon to use inside the button (see _Icon component_). **Does not render icon if `undefined`** | `string`                                                                                  | `undefined`          |
| `iconPosition` | Icon position. **Does not render icon if `undefined`**                                        | `ButtonIconPosition.Left \| ButtonIconPosition.Right \| ButtonIconPosition.Only`          | `undefined`          |
| `disabled`     | Disables the button                                                                           | `boolean`                                                                                 | `false`              |
| `loading`      | Indicates loading state. Works for `primary` and `secondary` buttons only, otherwise ignored  | `boolean`                                                                                 | `false`              |
| `onClick`      | _onClick_ callback, ignored if `undefined`                                                    | function                                                                                  | `undefined`          |

---

### Usage

```tsx
<Button
  type="primary"
  size="s"
  label="OK"
  iconName="info"
  iconPosition="left"
  onClick={() => console.log('OK')}
/>
```
