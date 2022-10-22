import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        "body-full-stop": [2, 'always', ''],
        "body-max-length": [2, 'always', 75]
    },
};

module.exports = Configuration