export interface RSSItem {
  title: string;
  link: string;
  description: string;
  pubDate?: Date;
}

/**
  * Checks if a given input string consists of exactly one single word without whitespace.
  */
export function isOneWord(input: string): boolean {
  if (!input || typeof input !== "string") {
    return false;
  }
  return input.trim().length > 0 && !/\s/.test(input.trim());
}

/**
  * Generates an XML RSS 2.0 feed string from a list of items.
  */
export function generateRSSFeed(channelTitle: string, channelLink: string, channelDescription: string, items: RSSItem[]): string {
  const itemsXML = items
    .map(
      (item) => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.link}</link>
      <description><![CDATA[${item.description}]]></description>
      ${item.pubDate ? `<pubDate>${item.pubDate.toUTCString()}</pubDate>` : ""}
    </item>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title><![CDATA[${channelTitle}]]></title>
    <link>${channelLink}</link>
    <description><![CDATA[${channelDescription}]]></description>
    ${itemsXML}
  </channel>
</rss>`;
}
