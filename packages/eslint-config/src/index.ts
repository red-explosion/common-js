import basic from '@red-explosion/eslint-config-basic';
import react from '@red-explosion/eslint-config-react';
import ts from '@red-explosion/eslint-config-ts';
import { type Linter } from 'eslint';

const config: Linter.FlatConfig[] = [
    basic,
    react,
    ts,
];

export default config;
