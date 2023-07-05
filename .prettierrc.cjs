// /.prettierrc.cjs

/**
 * 格式化配置
 */
module.exports = {
  useTabs: false, // 是否使用tab
  tabWidth: 2, // 每个tab的空格数
  semi: true, // 语句末尾是否添加分号
  singleQuote: true, // 是否使用单引号
  endOfLine: 'lf', // 换行符样式：\n(lf)|\r\n(crlf)|\r(cr)：<auto|lf|crlf|cr>
  printWidth: 180, // 每行最大字符数
  proseWrap: 'never', // 换行。<always|never|preserve>
  quoteProps: 'as-needed', //// 更改引用对象属性的时间。可选值"<as-needed|consistent|preserve>"
  trailingComma: 'all', // 多行时添加尾随逗号规则：<none|es5|all>，默认none
  bracketSpacing: true, // 是否在对象文字中的括号之间添加空格
  arrowParens: 'always', // 箭头函数参数周围是否包括括号：always: (x) => x \ avoid: x => x
  rangeStart: 0, // 格式化字符偏移量（包括和不包括）
  rangeEnd: Infinity, // 格式化字符偏移量（包括和不包括）
  requirePragma: false, // 指定要使用的解析器，不需要写文件开头的 @prettier
  insertPragma: false, // 不需要自动在文件开头插入 @prettier
  htmlWhitespaceSensitivity: 'css', // 指定HTML文件的全局空格敏感度 <css|strict|ignore>
  vueIndentScriptAndStyle: false, // Vue文件脚本和样式标签缩进
};
