import { Page } from "playwright";

type Config = {
  /** URL to start the crawl */
  url: string;
  /** Pattern to match against for links on a page to subsequently crawl */
  match: string;
  /** Selector to grab the inner text from */
  selector: string;
  /** Don't crawl more than this many pages */
  maxPagesToCrawl: number;
  /** File name for the finished data */
  outputFileName: string;
  /** Optional cookie to be set. E.g. for Cookie Consent */
  cookie?: {name: string; value: string}
  /** Optional function to run for each page found */
  onVisitPage?: (options: {
    page: Page;
    pushData: (data: any) => Promise<void>;
  }) => Promise<void>;
  /** Optional timeout for waiting for a selector to appear */
  waitForSelectorTimeout?: number;
  /** Hyperlink to be included in the output */
  hyperlink?: string;
};

export const config: Config = {
  url: "https://support.google.com/google-ads",
  match: "https://support.google.com/google-ads/**",
  selector: `div[role='navigation'] a, h2, h3, h4, h5, p, table`,
  maxPagesToCrawl: 10000,
  waitForSelectorTimeout: 5000,
  outputFileName: "output.json",
  hyperlink: "<a href='https://www.example.com'>Example</a>"
};
