import { type Options } from 'prettier';

const config: Options = {
    semi: false,
    singleQuote: true,
    arrowParens: 'avoid',
    bracketSpacing: true,
    htmlWhitespaceSensitivity: 'css',
    insertPragma: false,
    bracketSameLine: false,
    jsxSingleQuote: false,
    printWidth: 80,
    proseWrap: 'preserve',
    requirePragma: false,
    tabWidth: 2,
    trailingComma: 'all',
    useTabs: false,
    rangeStart: 0,
    endOfLine: 'auto',
};

export default config;
