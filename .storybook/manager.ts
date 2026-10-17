import { addons, type State } from 'storybook/manager-api';
import avrintTheme from './avrintTheme';

function isFullPage(state: State, defaultValue: boolean) {
  // Access tags safely
  const tags = state.index?.[state.storyId]?.tags ?? [];

  // Hide panel unless explicitly tagged with 'content' or 'kitchensink'
  const isFull = !tags.includes('content') && !tags.includes('kitchensink');

  return isFull;
}

addons.setConfig({
  theme: avrintTheme,
  sidebar: {
    showRoots: false,
  },
  layoutCustomisations: {
    showPanel(state, defaultValue) {
      const tags = state.index?.[state.storyId]?.tags ?? [];
      // console.info(isFullPage(state, defaultValue), state, defaultValue)
      return !tags.includes('hide-addons') && !tags.includes('kitchensink')
    },
    showToolbar(state, defaultValue) {
      const tags = state.index?.[state.storyId]?.tags ?? [];
      return isFullPage(state, defaultValue) && true
    },
  },

});