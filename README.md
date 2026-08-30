# isoneword

<a href="https://www.npmjs.com/package/isoneword"><img src="https://camo.githubusercontent.com/a703b7083ec235a1abb8dcd52f49fc7e64d9930ecf8ee486b4173296c66cc33a/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6431386d2f69736f6e65776f72642e737667"></a>

A zero-dependency TypeScript/JavaScript library providing string validation utilities and lightweight RSS feed generation.

## Installation

```bash
npm install isoneword
```

## Usage

### Single Word Validation

```typescript
import { isOneWord } from 'isoneword';

console.log(isOneWord('hello')); // true
console.log(isOneWord('hello world')); // false
```

### RSS Feed Generation

```typescript
import { generateRSSFeed } from 'isoneword';

const xml = generateRSSFeed(
  'My Tech Blog',
  'https://example.com',
  'Latest technical updates',
  [
    {
      title: 'First Post',
      link: 'https://example.com/posts/1',
      description: 'An introductory blog post.',
      pubDate: new Date()
    }
  ]
);

console.log(xml);
```

## License

MIT
