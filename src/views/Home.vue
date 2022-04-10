<template>
  <div class="home pa-10">
    <vue-ip :ip="ip" :port="port" :on-change="change" theme="material"></vue-ip>
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
    <v-row>
      <h1>IP: {{ ipAddress }}</h1>
      <h1 v-if="networkClass">IP: {{ networkClass.name }}</h1>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueIp from "vue-ip";
import { classes } from "@/db/data/NetworkClassData";
import { IPAdress } from "@/db/models/IPAdress";
import { NetworkClass } from "@/db/models/NetworkClass";
export default Vue.extend({
  data() {
    return {
      ip: "127.0.0.1", // or null
      port: "8888", // or null

      byte1: "" as string,
      byte2: "" as string,
      byte3: "" as string,
      byte4: "" as string,
    };
  },
  name: "Home",
  computed: {
    ipAddress(): IPAdress {
      return new IPAdress(
        `${this.byte1}.${this.byte2}.${this.byte3}.${this.byte4}`
      );
    },
    networkClass(): NetworkClass | null {
      let networkClass: NetworkClass | null = null;

      for (let i = 0; i < classes.length; i++) {
        let element = classes[i];

        if (
          this.ipAddress.byte1 > element.startAddress.byte1 &&
          this.ipAddress.byte1 < element.endAddress.byte1
        ) {
          networkClass = element;
        }
      }

      return networkClass;
    },
  },
  methods: {
    change(ip: string, port: string, valid: boolean) {
      console.log(ip, port, valid);
    },
  },
  components: {
    VueIp,
  },
});
</script>
