import Vue from "vue";

import VBaobabBanner from "./Banner.vue";

const Components = {
    VBaobabBanner,
};

Object.keys(Components).forEach((name) => {
  Vue.keys(name, Components[name]);
});

export default Components;
