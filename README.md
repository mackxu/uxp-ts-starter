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

## 代码质量检查
eslint prettier 使用Prettier处理代码格式问题，使用linters处理代码质量问题

### Prettier默认配置
```json
{
  printWidth: 80,
  tabWidth: 2,
  singleQuote: false,
  trailingComma: 'none',
  bracketSpacing: true,
  semi: true,
  useTabs: false,
  parser: 'babylon',
  bracketSameLine: false,
}
```
### Prettier注意事项
.prettierrc.js is a valid config name in Prettier, but it does not work with the VSCode extension here.
## 规范commit格式（待完成）
simple-git-hooks + commitizen + commitlint.  

commitlint 校验提交信息，commitizen 辅助填写提交信息；   
在 Git 提交工作流程中，commitlint 作用于 commit-msg 阶段，commitizen作用于 pre-commit

lint-staged 检测git add暂存区的文件，对检测出的文件执行脚本
simple-git-hooks git钩子库，对git执行的一些命令，通过对应的hooks钩子触发，执行自定义的脚本程序
