import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMath from 'remark-math';

const doc = "Inline $$\\lambda$$ and block\n\n$$ E=mc^2 $$";
const tree = unified().use(remarkParse).use(remarkMath).parse(doc);
console.log(JSON.stringify(tree, null, 2));
