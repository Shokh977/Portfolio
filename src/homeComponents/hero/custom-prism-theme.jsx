// custom-prism-theme.jsx

import { light as SyntaxHighlighterStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';

const customTheme = {
  ...SyntaxHighlighterStyle,
  'code[class*="language-"]': {
    ...SyntaxHighlighterStyle['code[class*="language-"]'],
    fontFamily: 'Courier, monospace',
    fontSize: '14px',
    lineHeight: '1.5',
    // Add more custom styles here
  },
  // Add more selectors and styles as needed
};

export default customTheme;
