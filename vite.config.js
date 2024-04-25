// @ts-nocheck
import path from 'path';

import { sveltekit } from '@sveltejs/kit/vite';

import type { UserConfig } from 'vite';

const config: UserConfig = {
    plugins: [sveltekit()],
    resolve: {
        alias: {
            $js: path.resolve('./src/js'),
            $store: path.resolve('./src/store'),
            $type: path.resolve('./src/type')
        }
    }
};

export default config;