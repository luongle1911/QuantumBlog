export default function remarkUnescapeMath() {
  return (tree) => {
    // A simple recursive traversal to visit AST nodes
    function visit(node) {
      if (!node) return;
      
      // If the node is a block or inline math node, unescape the markdown characters
      if (node.type === 'math' || node.type === 'inlineMath') {
        if (typeof node.value === 'string') {
          // Unescape backslash followed by # ) * + - = > \ _
          node.value = node.value.replace(/\\([#)*+\-=>\\_])/g, '$1');
        }
        if (node.data && node.data.hChildren && node.data.hChildren[0] && typeof node.data.hChildren[0].value === 'string') {
          node.data.hChildren[0].value = node.data.hChildren[0].value.replace(/\\([#)*+\-=>\\_])/g, '$1');
        }
      }
      
      // Recursively visit children
      if (node.children && Array.isArray(node.children)) {
        for (const child of node.children) {
          visit(child);
        }
      }
    }
    
    visit(tree);
  };
}
