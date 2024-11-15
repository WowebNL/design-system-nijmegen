# Nijmegen Design System Layout

This package contains the css layout options (breakpoints, containers, grid and spacing) for the Design System of the municipality of Nijmegen. The setup of this package is based on the [NL Design System principles](https://nldesignsystem.nl/richtlijnen/stijl/ruimte/) and is inspired by the [Bootstrap v5.3 Layout](https://getbootstrap.com/docs/5.3/layout).

## Breakpoints

This layout contains 6 breakpoints which have a default value and are customizable by usings Sass variables based on your design tokens.

| Breakpoint        | Class infix | Default dimensions | Design token              | Sass variable              |
| ----------------- | ----------- | ------------------ | ------------------------- | -------------------------- |
| Extra small       |             | < 576px            | `nijmegen.breakpoint.xs`  | `$nijmegen-breakpoint-xs`  |
| Small             | sm          | ≥576px             | `nijmegen.breakpoint.sm`  | `$nijmegen-breakpoint-sm`  |
| Medium            | md          | ≥768px             | `nijmegen.breakpoint.md`  | `$nijmegen-breakpoint-md`  |
| Large             | lg          | ≥992px             | `nijmegen.breakpoint.lg`  | `$nijmegen-breakpoint-lg`  |
| Extra large       | xl          | ≥1200px            | `nijmegen.breakpoint.xl`  | `$nijmegen-breakpoint-xl`  |
| Extra extra large | xxl         | ≥1400px            | `nijmegen.breakpoint.xxl` | `$nijmegen-breakpoint-xxl` |

## Containers

Containers are an implementation of the [Bootstrap v5.3 Containers](https://getbootstrap.com/docs/5.3/layout/containers/). The implementation contains all three different containers with custom class naming:

- `.nijmegen-container`, which sets a `max-width` at each responsive breakpoint
- `.nijmegen-container-{breakpoint}`, which is `width: 100%` until the specified breakpoint
- `.nijmegen-container-fluid`, which is `width: 100%` at all breakpoints

The following `max-width` values are used wicht are customizable based on the implementation of the design tokens:

| Breakpoint        | Default `max-width` value | Design token                       | Sass variable                       |
| ----------------- | ------------------------- | ---------------------------------- | ----------------------------------- |
| Extra small       | 100%                      |                                    |                                     |
| Small             | 540px                     | `nijmegen.container.max-width.sm`  | `$nijmegen-container-max-width-sm`  |
| Medium            | 720px                     | `nijmegen.container.max-width.md`  | `$nijmegen-container-max-width-md`  |
| Large             | 960px                     | `nijmegen.container.max-width.lg`  | `$nijmegen-container-max-width-lg`  |
| Extra large       | 1140px                    | `nijmegen.container.max-width.xl`  | `$nijmegen-container-max-width-xl`  |
| Extra extra large | 1320px                    | `nijmegen.container.max-width.xxl` | `$nijmegen-container-max-width-xxl` |

Other container design tokens:

| Design token                              | Default value             | Sass variable                              | Css variable                                     |
| ----------------------------------------- | ------------------------- | ------------------------------------------ | ------------------------------------------------ |
| `nijmegen.container.padding-inline-start` | `nijmegen.space.block.sm` | `$nijmegen-container-padding-inline-start` | `var(--nijmegen-container-padding-inline-start)` |
| `nijmegen.container.padding-inline-end`   | `nijmegen.space.block.sm` | `$nijmegen-container-padding-inline-end`   | `var(--nijmegen-container-padding-inline-end)`   |

### Default container

```html
<div class="nijmegen-container">
  <!-- Content here -->
</div>
```

### Responsive containers

```html
<div class="nijmegen-container-sm">100% wide until small breakpoint</div>
<div class="nijmegen-container-md">100% wide until medium breakpoint</div>
<div class="nijmegen-container-lg">100% wide until large breakpoint</div>
<div class="nijmegen-container-xl">100% wide until extra large breakpoint</div>
<div class="nijmegen-container-xxl">100% wide until extra extra large breakpoint</div>
```

### Fluid container (full width)

```html
<div class="nijmegen-container-fluid">
  <!-- Content here -->
</div>
```

## Grid

The grid system is an implementation of the [Bootstrap v5.3 CSS Grid](https://getbootstrap.com/docs/5.3/layout/css-grid/). The default setup is a 12 column grid which need to be placed inside the `nijmegen-grid` element. The grid supports responsive classeds to adjust the layout across viewports.

| Design token            | Default value | Sass variable            | Css variable                |
| ----------------------- | ------------- | ------------------------ | --------------------------- |
| `nijmegen.grid.columns` | 12            | `$nijmegen-grid-columns` |                             |
| `nijmegen.grid.gap`     | 1.5rem        | `$nijmegen-grid-gap`     | `var(--nijmegen-grid-gap)`  |
| `nijmegen.grid.rows`    | 1             | `$nijmegen-grid-rows`    | `var(--nijmegen-grid-rows)` |

### Columns

```html
<div class="nijmegen-grid">
  <div class="nijmegen-g-col-4">col 1/3</div>
  <div class="nijmegen-g-col-4">col 2/3</div>
  <div class="nijmegen-g-col-4">col 3/3</div>
</div>
```

### Responsive

The following example has 2 columns but grows to 3 columns from medium breakpoint and above.

```html
<div class="nijmegen-grid">
  <div class="nijmegen-g-col-6 nijmegen-g-col-md-4">.nijmegen-g-col-6 .nijmegen-g-col-md-4</div>
  <div class="nijmegen-g-col-6 nijmegen-g-col-md-4">.nijmegen-g-col-6 .nijmegen-g-col-md-4</div>
  <div class="nijmegen-g-col-6 nijmegen-g-col-md-4">.nijmegen-g-col-6 .nijmegen-g-col-md-4</div>
</div>
```

### Starts

With start classes you can implement (responsive) starting points to the columns.

```html
<div class="nijmegen-grid">
  <div class="nijmegen-g-col-3 nijmegen-g-start-2">start by 2 col with a 3 col width column</div>
  <div class="nijmegen-g-col-4 nijmegen-g-start-6">.start by 6 col with a 4 col width column</div>
</div>
```

### Other

Auto columns and nesting are also supported, please check the [Bootstrap v5.3 documentation](https://getbootstrap.com/docs/5.3/layout/css-grid/) for details.

## Spacing

Spacing is a responsive wrapper for setting `margin-inline-start`, `margin-inline-end`, `padding-inline-start` and `padding-inline-end` values on elements based on the [Bootstrap v5.3 spacing utility api](https://getbootstrap.com/docs/5.3/utilities/spacing/). The api has generated custom (responsive) classes with the following notation `nijmegen-{{property}{side}{breakpoint}-{size}`.

**`{property}` options:**

- `margin-inline`, horizontal margin
- `padding-inline`, horizontal padding
- `margin-block`, vertial margin
- `padding-block`, horizontal padding

**`{side}` options:**

- `-start`
- `-end`
- blank, for using both sides

**`{breakpoint}` options:**

- `-sm`
- `-md`
- `-lg`
- `-xl`
- `-xxl`
- blank, used in all viewports

**`{size}` options:**

- `3xs`
- `2xs`
- `xs`
- `sm`
- `md`
- `lg`
- `xl`
- `2xl`
- `3xl`
- `4xl`
- `5xl`

By default the `!important` statement is added to all spacing ultilities to make sure the correct spacings are forced added if the classes are set. You can disable this by changing the following Sass variable and recompile the `layout.scss` file.

```scss
$nijmegen-enable-important-utilities-on-spacing: false;
```

### Design tokens

| Design token                | Default value | Sass variable                                           | Css variable                       |
| --------------------------- | ------------- | ------------------------------------------------------- | ---------------------------------- |
| `nijmegen.space.inline.3xs` | 0.125rem      | `map.set($nijmegen-inline-spacers, "3xs", $new-value);` | `var(--nijmegen-space-inline-3xs)` |
| `nijmegen.space.inline.2xs` | 0.25rem       | `map.set($nijmegen-inline-spacers, "2xs", $new-value);` | `var(--nijmegen-space-inline-2xs)` |
| `nijmegen.space.inline.xs`  | 0.5rem        | `map.set($nijmegen-inline-spacers, "xs", $new-value);`  | `var(--nijmegen-space-inline-xs)`  |
| `nijmegen.space.inline.sm`  | 0.75rem       | `map.set($nijmegen-inline-spacers, "sm", $new-value);`  | `var(--nijmegen-space-inline-sm)`  |
| `nijmegen.space.inline.md`  | 1rem          | `map.set($nijmegen-inline-spacers, "md", $new-value);`  | `var(--nijmegen-space-inline-md)`  |
| `nijmegen.space.inline.lg`  | 1.25rem       | `map.set($nijmegen-inline-spacers, "lg", $new-value);`  | `var(--nijmegen-space-inline-lg)`  |
| `nijmegen.space.inline.xl`  | 1.5rem        | `map.set($nijmegen-inline-spacers, "xl", $new-value);`  | `var(--nijmegen-space-inline-xl)`  |
| `nijmegen.space.inline.2xl` | 2rem          | `map.set($nijmegen-inline-spacers, "2xl", $new-value);` | `var(--nijmegen-space-inline-2xl)` |
| `nijmegen.space.inline.3xl` | 2.5rem        | `map.set($nijmegen-inline-spacers, "3xl", $new-value);` | `var(--nijmegen-space-inline-3xl)` |
| `nijmegen.space.inline.4xl` | 3rem          | `map.set($nijmegen-inline-spacers, "4xl", $new-value);` | `var(--nijmegen-space-inline-4xl)` |
| `nijmegen.space.inline.5xl` | 4rem          | `map.set($nijmegen-inline-spacers, "5xl", $new-value);` | `var(--nijmegen-space-inline-5xl)` |
| `nijmegen.space.block.3xs`  | 0.125rem      | `map.set($nijmegen-block-spacers, "3xs", $new-value);`  | `var(--nijmegen-space-block-3xs)`  |
| `nijmegen.space.block.2xs`  | 0.25rem       | `map.set($nijmegen-block-spacers, "2xs", $new-value);`  | `var(--nijmegen-space-block-2xs)`  |
| `nijmegen.space.block.xs`   | 0.5rem        | `map.set($nijmegen-block-spacers, "xs", $new-value);`   | `var(--nijmegen-space-block-xs)`   |
| `nijmegen.space.block.sm`   | 0.75rem       | `map.set($nijmegen-block-spacers, "sm", $new-value);`   | `var(--nijmegen-space-block-sm)`   |
| `nijmegen.space.block.md`   | 1rem          | `map.set($nijmegen-block-spacers, "md", $new-value);`   | `var(--nijmegen-space-block-md)`   |
| `nijmegen.space.block.lg`   | 1.25rem       | `map.set($nijmegen-block-spacers, "lg", $new-value);`   | `var(--nijmegen-space-block-lg)`   |
| `nijmegen.space.block.xl`   | 1.5rem        | `map.set($nijmegen-block-spacers, "xl", $new-value);`   | `var(--nijmegen-space-block-xl)`   |
| `nijmegen.space.block.2xl`  | 2rem          | `map.set($nijmegen-block-spacers, "2xl", $new-value);`  | `var(--nijmegen-space-block-2xl)`  |
| `nijmegen.space.block.3xl`  | 2.5rem        | `map.set($nijmegen-block-spacers, "3xl", $new-value);`  | `var(--nijmegen-space-block-3xl)`  |
| `nijmegen.space.block.4xl`  | 3rem          | `map.set($nijmegen-block-spacers, "4xl", $new-value);`  | `var(--nijmegen-space-block-4xl)`  |
| `nijmegen.space.block.5xl`  | 4rem          | `map.set($nijmegen-block-spacers, "5xl", $new-value);`  | `var(--nijmegen-space-block-5xl)`  |

### Horizontal centering

The `.nijmegen-margin-inline-auto` class is available for horizontally centering for content that has `display: block` and a `width` set.

```html
<div class="nijmegen-margin-inline-auto" style="width: 200px;">Vertically centered element</div>
```

### Examples

```html
<div class="nijmegen-margin-inline-start-md">start md margin</div>

<div class="nijmegen-margin-inline-end-3xl">end 3xl margin</div>

<div class="nijmegen-margin-inline-xl">horizonal xl margin</div>

<div class="nijmegen-padding-inline-4xl">horizontal 4xl padding</div>

<div class="nijmegen-margin-block-start-md">vertical md margin</div>

<div class="nijmegen-margin-block-end-3xl">vertical end 3xl margin</div>

<div class="nijmegen-margin-block-xl">vertical xl margin</div>

<div class="nijmegen-padding-block-4xl">vertical 4xl padding</div>
```

## Customization

It is possible to use your onw values based on the previous mentioned design tokens. Most of the design tokens have a CSS variable option for customization but **some tokens can only be customizated by using the Sass variables**. For example, the breakpoints are used in media queries so customization is only possible via loading your design tokens sass file and compile the `layout.scss` file to your custom css file. Use of the css variable option `var()` is not possible because this function can only be used to set a value on a property of an element, [see W3 docs](https://www.w3.org/TR/css-variables-1/#using-variables).

### Example via Sass variables

custom.scss:

```scss
@import "~gemeentenijmegen/layout-css/src/layout";

// import or write your variables
@import "~gemeentenijmegen/design-tokens/dist/variables
```

For example by using [Rollup](https://rollupjs.org/)

rollup.config.mjs:

```js
export default {
  input: "custom.scss",
  output: {
    file: "dist/my-layout.css",
    format: "esm",
  },
};
```

Now run:

```zsh
rollup -c
```

### Example via CSS `var()`

```html
<!doctype html>
<html lang="nl">
  <head>
    <title>Example page</title>
    <link rel="stylesheet" href="node_modules/@gemeentenijmegen/layout-css/dist/layout.min.css" />
    <!-- load your custom design tokens -->
    <link rel="stylesheet" href="node_modules/@gemeentenijmegen/design-tokens/dist/index.css'" />
    <!-- or write them in your own "theme" following NL Design System standards -->
    <style>
      .my-theme {
        --nijmegen-space-inline-md: 0.5rem;
      }
    </style>
  </head>
  <body>
    <div class="nijmegen-theme">
      <div class="nijmegen-padding-inline-md">1rem horizontal padding</div>
    </div>
    <div class="my-theme">
      <div class="nijmegen-padding-inline-md">0.5rem horizontal padding</div>
    </div>
  </body>
</html>
```

## License

Distributed under the EUPL v1.2 License.
