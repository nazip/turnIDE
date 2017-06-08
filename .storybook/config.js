import { configure } from '@storybook/react';
import '../node_modules/semantic-ui-css/semantic.css';

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
