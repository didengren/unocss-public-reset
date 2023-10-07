# @trinapower/unocss-public-reset

[![NPM version](https://img.shields.io/npm/v/@trinapower/unocss-public-reset?color=a1b858&label=)](https://www.npmjs.com/package/@trinapower/unocss-public-reset) 

a [unocss](https://github.com/unocss/unocss) preset for resetting common styles

## Installation

```bash
pnpm add @trinapower/unocss-public-reset -D
```

## Usage

```ts
// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from 'unocss'
import publicStylesReset from '@trinapower/unocss-public-reset'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    publicStylesReset()
  ],
})
```

## Configurations

|Field|Default|Description|
|--|--|--|
|`maxOutput`|`6`|default number of nodes covered by enter animation|

## License

[MIT](./LICENSE) License © 2023 [Sam Xu](https://github.com/didengren)