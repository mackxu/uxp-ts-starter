# Adobe UXP starter
UXP项目工程构建 vite + typescript

## vite构建
### fix: type=module
## typescript
  types: 
  1. @types/photoshop
  2. uxp-types (只取uxp部分)

注意`imaging`,获取它关联的声明应该是这样的
```js
import { imaging as ImagingModule } from "photoshop/dom/ImagingModule";

type GetPixelsResult = ImagingModule.GetPixelsResult;
```

## 打包配置
- 根据mode分环境打包，修改manifest的id、name
  - dev: 
    - npm run dev 
    - 输出目录dist/dev
    - 支持watch
    - 动态修改manifest文件
  - prod: 
    - npm run build 
    - 输出目录dist/production
    - 不支持watch
    - 不修改manifest文件
- 自动增加版本号
  - 命令npm run release，auto update production/manifest version

## 代码质量检查（待完成）
eslint prettier

## 规范commit格式（待完成）
simple-git-hooks + commitizen + commitlint
