<template>
  <div class="home pa-10">
    <v-row justify="center">
      <vue-ip
        :ip="ip"
        :port="port"
        :on-change="change"
        theme="material"
      ></vue-ip>
    </v-row>
    <v-row justify="center">
      <v-col cols="2"
        ><v-text-field
          label="عدد الشبكات الفرعية"
          outlined
          v-model="subnetsCount"
        ></v-text-field>
        <v-btn class="primary" @click="generate">Generate</v-btn></v-col
      >
    </v-row>
    <v-col>
      <h1>IP: {{ ipAddress.ip }}</h1>
      <h1 v-if="networkClass">Class: {{ networkClass.name }}</h1>
    </v-col>
    <v-data-table
      :headers="headers"
      :items="subnets"
      class="elevation-1 mt-10"
    ></v-data-table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueIp from "vue-ip";
import {
  networkClasses,
  NetworkClass,
  IPAdress,
  subnets,
  generateSubnets,
  Subnet,
} from "@/db";
export default Vue.extend({
  data() {
    return {
      subnetsCount: 0,
      ip: "127.0.0.1",
      port: "8888",
      subnets: [] as Array<Subnet>,
      headers: [{ text: "Network ID", value: "networkId" }],
    };
  },
  name: "Home",
  computed: {
    ipAddress(): IPAdress {
      return new IPAdress(this.ip);
    },
    networkClass(): NetworkClass | null {
      let networkClass: NetworkClass | null = null;

      for (let i = 0; i < networkClasses.length; i++) {
        let element = networkClasses[i];

        if (
          this.ipAddress.byte1 >= element.startAddress.byte1 &&
          this.ipAddress.byte1 <= element.endAddress.byte1
        ) {
          networkClass = element;
        }
      }

      return networkClass;
    },
  },
  methods: {
    change(ip: string, port: string, valid: boolean) {
      this.ip = ip;
      console.log(this.ipAddress.isValid);

      console.log(ip, port, valid);
    },
    generate() {
      this.subnets = generateSubnets(this.ipAddress, this.subnetsCount);
    },
  },
  components: {
    VueIp,
  },
});
</script>