
<div align="center">
  <p style="font-family:consolas;font-size: 20px;color:#323336">Circinus Software</p>
</div>

:rocket: The first version of the library `@circinus/validators` is out now!

## Description

This library helps developers avoid errors and bugs during development. By validating via `@circinus/validators` errors like `Cannot read properties of undefined` won't appear anymore in the browser console. In this library has been paid extra attention to the types used, even when using generic types which is very important in TypeScript.

The library does not depend on any other libraries, every validator has been build and used within the library.

## Installation

- Make sure the active directory in your Terminal is the project folder. Then execute the following command:

```
npm install @circinus/validators
```

- Enjoy this package. :v:

## Usage

- Add an import statement as follows:

```
import { isPrimitive } from '@circinus/validators';
```
- The validators are just functions, so just add them to the import block for `@circinus/validators` and call them whenever you need their help e. g.:
```
const email = emailControl.value;
if (isEmail(email)) {
  // do something..
}
```

## Support

Did you find a bug? Or maybe you have a feature request or some other issue? Please report it [here](https://github.com/icapri/validators/issues) and we will immediately start fixing it.

## Roadmap
`v1.0.7` - Latest stable

## Contributing
If you feel motivated to contribute on this project feel free to contact us.

## License
[MIT](https://github.com/icapri/validators/blob/main/LICENSE)