<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>IP Generator</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer padless color="white">
      <v-row justify="center">
        <v-col class="text-center" cols="12" sm="6" align="center">
          <v-card flat class=" white--text text-center pa-3" color="primary">
            <v-card-text class="white--text pt-0">
              Developed by: Noor Haider Abdalkareem & Mohammed Atheer satea
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
              {{ new Date().getFullYear() }} — <strong>Vuetify - Vue</strong>
            </v-card-text>
          </v-card>
        </v-col></v-row
      >
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>
