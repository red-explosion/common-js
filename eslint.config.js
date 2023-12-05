import config from '@red-explosion/eslint-config';

export default [
    ...config,
    {
        ignores: [
            'scripts/*',
            'packages/*/dist/*',
        ],
    },
];
