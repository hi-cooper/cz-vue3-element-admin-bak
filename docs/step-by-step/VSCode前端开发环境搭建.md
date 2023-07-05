# VSCode前端开发环境搭建

| 名称         | 说明                                                         | 官网                                   |
| ------------ | ------------------------------------------------------------ | -------------------------------------- |
| NodeJs       | 一个基于Chrome V8引擎的JavaScript运行环境                    | http://nodejs.cn/download              |
| VSCode       | Microsoft推出的，针对于编写现代Web和云应用的跨平台源代码编辑器 | https://code.visualstudio.com/Download |
| VSCode Plugs | 1、Volar：vue语言插件<br/>2、ESLint：一个语法规则和代码风格的检查工具<br/>3、Prettier：一个“有主见”的代码格式化工具 |                                        |

# 1 Nodejs + VSCode安装

请根据提示进行安装

# 2 VSCode Plugs安装与配置

- Volar
  ![](https://czmdi.cooperzhu.com/technology/vscode/VSCode%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA/2-1-volar.png)
- ESlint
  ![](https://czmdi.cooperzhu.com/technology/vscode/VSCode%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA/2-2-eslint.png)![](https://czmdi.cooperzhu.com/technology/vscode/VSCode%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA/2-2-eslint.png)![](https://czmdi.cooperzhu.com/technology/vscode/VSCode%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA/2-4-eslint.png)![](https://czmdi.cooperzhu.com/technology/vscode/VSCode%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA/2-5-eslint.png)

```json
"editor.codeActionsOnSave": {
	"source.fixAll.eslint": true
},
```

- prettier
  ![](https://czmdi.cooperzhu.com/technology/vscode/VSCode%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA/2-6-prettier.png)