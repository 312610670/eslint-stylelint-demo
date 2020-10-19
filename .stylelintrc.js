module.exports = {
    processors: [],
    extends: "stylelint-config-standard" , // 官方推荐的方式
    rules: {
      "at-rule-empty-line-before": "always", //在 AT规则 前要求或不允许留有空行
      "at-rule-name-case": "lower", //指定at-rules小写或大写的名字
      "block-no-empty": true, //不允许空块
      // 不允许未知的伪类选择器
      'selector-pseudo-class-no-unknown': [
          true,
          {
          // 忽略伪类  全局hulue
            ignorePseudoClasses: ['global'],
          },
        ],
        indentation: "tab"
    },
    plugins: ["stylelint-order"],

  };