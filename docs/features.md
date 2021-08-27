# Markdown Features

Docusaurus supports **[Markdown](https://daringfireball.net/projects/markdown/syntax)** and a few **additional features**.

## Links

Regular Markdown links are supported, using url paths or relative file paths.

```md
Let's see [features](/docs/features).
```

```md
Let's see [features](./features.md).
```

**Result:** Let's see [features](./features.md).

## Images

```md
![Logo](/img/logo.svg)
```

![Logo](/img/logo.svg)

## Code Blocks

Markdown code blocks are supported with Syntax highlighting.

    ```jsx title="src/components/HelloDocusaurus.js"
    function HelloDocusaurus() {
        return (
            <h1>Hello, Docusaurus!</h1>
        )
    }
    ```

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```

## Tables

```
| Default | Left aligned | Centered | Right aligned |
|---|:--|:-:|--:|
| This is default text alignement. |
| | This is left aligned. |
| | | Some more text to show what centered text would look like. |
| | | | And this is right aligned. |
```

| Default | Left aligned | Centered | Right aligned |
|---|:--|:-:|--:|
| This is default text alignement. |
| | This is left aligned. |
| | | Some more text to show what centered text would look like. |
| | | | And this is right aligned. |

## Lists

```
- First
- Second
- Third

1. First
2. Second
3. Third
```

- First
- Second
- Third

1. First
2. Second
3. Third

## Headers

```
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6
```

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6


## Admonitions

Docusaurus has a special syntax to create admonitions and callouts:

    :::note

    Some **content** with _markdown_ `syntax`. Check [this `api`](#).

    :::

    :::tip

    Some **content** with _markdown_ `syntax`. Check [this `api`](#).

    :::

    :::info

    Some **content** with _markdown_ `syntax`. Check [this `api`](#).

    :::

    :::caution

    Some **content** with _markdown_ `syntax`. Check [this `api`](#).

    :::

    :::danger

    Some **content** with _markdown_ `syntax`. Check [this `api`](#).

    :::


:::note

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::