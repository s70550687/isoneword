# isoneword

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
