# QVE Design System

## Features

- Smooth modal with Portal
  - Auto close by outside touching / clicking
- Smooth bottom sheet with Portal
  - Auto close by outside touching / clicking
- Skeleton UI

## Getting Started

- This library has `@emotion/react` as peer-dependency.
- This library has `react` as peer-dependency.
- This library has `react-dom"` as peer-dependency.

```javascript
    $ npm install @emotion/react @qve-ui/qds
    // $ yarn add @emotion/react @qve-ui/qds
```

## Versioning

This library is for components commonly used by Defi products.

- `v1` | [source](https://github.com/ziptalk/QDS-monorepo/tree/master/qds/src) | changelog : `Modal` `Bottom Sheet` `Skeleton UI`
  - `examples` | [source](https://github.com/ziptalk/QDS-monorepo/tree/master/qds-example)

## Contributors

<p>
<a href="https://github.com/BWLdoyeon">
    <img src="https://avatars.githubusercontent.com/u/121469036?v=4" width="90">
</a>
<a href="https://github.com/youngan1111">
    <img src="https://avatars.githubusercontent.com/u/68759940?v=4" width="90">
</a>
<a href="https://github.com/Jun99uu">
    <img src="https://avatars.githubusercontent.com/u/44965706?v=4" width="90">
</a>
<a href="https://github.com/maebin">
    <img src="https://avatars.githubusercontent.com/u/109774178?v=4" width="90">
</a>
</p>

## Usage

### Modal

| Prop Name      | Type             | Explanation                                                         | Essential |
| -------------- | ---------------- | ------------------------------------------------------------------- | --------- |
| `children`     | React.ReactNode  | The content to be displayed inside the modal.                       | `true`    |
| `isOpen`       | boolean          | Determines whether the modal is open or closed.                     | `true`    |
| `onClose`      | () => void       | Event handler function to close the modal.                          | `true`    |
| `xButton`      | boolean          | Determines whether the close button (X button) is displayed or not. | `false`   |
| `overlayStyle` | SerializedStyles | Custom CSS styles for the background overlay of the modal.          | `false`   |

### Bottom Sheet

| Prop Name      | Type             | Explanation                                                                                     | Essential |
| -------------- | ---------------- | ----------------------------------------------------------------------------------------------- | --------- |
| `children`     | React.ReactNode  | The content to be displayed inside the bottom sheet.                                            | `true`    |
| `isOpen`       | boolean          | Determines whether the bottom sheet is open or closed.                                          | `true`    |
| `ratio`        | number           | The height of the bottom sheet as a percentage of the viewport height (e.g. 50 for 50% height). | `true`    |
| `onClose`      | () => void       | Event handler function to close the bottom sheet.                                               | `true`    |
| `xButton`      | boolean          | Determines whether the close button (X button) is displayed or not.                             | `false`   |
| `overlayStyle` | SerializedStyles | Custom CSS styles for the background overlay of the bottom sheet.                               | `false`   |

### Skeleton

| Prop Name  | Type                  | Explanation                                    |
| ---------- | --------------------- | ---------------------------------------------- |
| `...props` | ComponentProps<"div"> | Props that can be passed to the `div` element. |

## License

MIT License

Copyright (c) 2023 Blockwavelabs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
