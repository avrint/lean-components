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
  layoutCustomisations: {
    showPanel(state, defaultValue) {
      // console.info(isFullPage(state, defaultValue), state, defaultValue)
      return isFullPage(state, defaultValue) && true
    },
    // showPanel(state: State, defaultValue: boolean) {
    //   return isFullPage(state, defaultValue);
    // },
    showToolbar(state, defaultValue) {
      return isFullPage(state, defaultValue) && true
    },
  },

});