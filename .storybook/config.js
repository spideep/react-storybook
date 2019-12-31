import { configure } from '@storybook/react';
import './styles.css';

// automatically import all files ending in *.stories.js
configure([
    require.context('../src/stories', true, /\.stories\.js$/),
    require.context('../src/components', true, /\.stories\.js$/)
], module);
