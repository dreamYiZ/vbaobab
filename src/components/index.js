import VBaobabBanner from "./Banner.vue";

// export { VBaobabBanner };

const VBaobaoComponents = {
  VBaobabBanner,
};

console.log('VBaobaoComponents', VBaobaoComponents)

// plugins/i18n.js
export default {
  install: (app) => {
    // app.
    Object.keys(VBaobaoComponents).forEach((name) => {
      console.log("add component", name);
      app.component(name, VBaobaoComponents[name]);
    });
    // Plugin code goes here
  },
};
