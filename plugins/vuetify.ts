import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import { VSwitch, VTextField, VTextarea } from "vuetify/components";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    aliases: {
      VWritable: VTextField,
      VReadonly: VTextField,
      VIsRef: VSwitch,
      VIsReactive: VSwitch,
      VIsProxy: VSwitch,
      VStringify: VTextarea,
    },
    defaults: {
      VCol: { cols: "auto" },
    },
  });
  app.vueApp.use(vuetify);
});
