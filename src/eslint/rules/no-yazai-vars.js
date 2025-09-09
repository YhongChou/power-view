export const noYaZaiVars = {
  meta: {},
  create: function (_context) {
    return {
      Identifier(node) {
        // 检查astIdentifier 标识符节点
        console.log('Identifier node:', node);
        // // 检查变量名是否以 "yazai" 开头
        // if (node.name.startsWith('yazai')) {
        //   context.report({
        //     node,
        //     message: 'Variable names starting with "yazai" are not allowed.',
        //   });
        // }
      },
    };
  },
};
