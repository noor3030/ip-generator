<template>
  <div class="home pa-10">
    <v-row justify="center">
      <v-flex xs4 md2>
        <v-text-field label="Byte1" outlined v-model="byte1"></v-text-field
      ></v-flex>
      <v-flex xs4 md2>
        <v-text-field label="Byte2" outlined v-model="byte2"></v-text-field
      ></v-flex>
      <v-flex xs4 md2>
        <v-text-field label="Byte3" outlined v-model="byte3"></v-text-field
      ></v-flex>
      <v-flex xs4 md2>
        <v-text-field label="Byte4" outlined v-model="byte4"></v-text-field
      ></v-flex>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      byte1: null,
      byte2: null,
      byte3: null,
      byte4: null,
    };
  },
  name: "Home",
 computed:{
   
 }
});
</script>
