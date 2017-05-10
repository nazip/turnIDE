export const testStore = (state, ownProps) => {
  return {
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () =>  state
  };
};
