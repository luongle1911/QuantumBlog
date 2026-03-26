import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMath from 'remark-math';
import remarkUnescapeMath from './src/plugins/remark-unescape-math.mjs';

const processor = unified()
  .use(remarkParse)
  .use(remarkMath)
  .use(remarkUnescapeMath);

const doc = "Inline $$\\lambda$$ and block\n\n$$ E\\=mc^2 $$";
const tree = processor.parse(doc);
processor.run(tree).then(t => console.log(JSON.stringify(t, null, 2))).catch(e => console.error(e));
