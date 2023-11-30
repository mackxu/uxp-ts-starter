# ts-stater

## vite构建

### fix: type=module

## typescript
  types: 
  1. @types/photoshop
  2. uxp-types (只取uxp部分)

注意`imaging`,获取它关联的声明应该是这样的
```js
import { imaging as ImagingModule } from "./dom/ImagingModule";

type GetPixelsResult = ImagingModule.GetPixelsResult;
```

## manifest（待完成）
- 根据mode分环境打包，修改manifest的id、name
  - dist/dev
  - dist/production
- 自动增加版本号
  - npm run release

## 代码质量检查（待完成）
eslint prettier

## 规范commit格式（待完成）
simple-git-hooks + commitizen + commitlint
