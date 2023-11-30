# ts-stater

## typescript
  types: 
  1. @types/photoshop
  2. uxp-types (只取uxp部分)

注意`imaging`,获取它关联的声明应该是这样的
```js
import { imaging as ImagingModule } from "./dom/ImagingModule";

type GetPixelsResult = ImagingModule.GetPixelsResult;
```