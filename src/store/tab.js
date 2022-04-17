export default {
  state: {
    isCollapse: false,
    tabsList: [
      {
        path: "/home",
        name: "/home",
        label: "首页",
      },
    ],
  },
  mutations: {
    isCollapse(state) {
      state.isCollapse = !state.isCollapse;
    },
    selectTab(state, value) {
      const result = state.tabsList.findIndex(
        (item) => item.name === value.name
      );
      if (result === -1) {
        state.tabsList.push(value);
      }
    },
  },
};
