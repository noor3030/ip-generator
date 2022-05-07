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
      <v-col cols="12" sm="3" align="center"
        ><v-text-field
          label="عدد الشبكات"
          outlined
          v-model="subnetsCount"
        ></v-text-field>
        <v-btn class="primary" @click="generate">Generate</v-btn></v-col
      >
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="3" align="center">
        <v-card class="pa-3">
          <h3>IP: {{ ipAddress.ip }}</h3>
          <h3 v-if="networkClass">Class: {{ networkClass.name }}</h3>
          <h3 v-if="networkClass">
            Subnet Mask: {{ networkClass.subnetMask }}
          </h3>
          <h3 v-if="subnet">
            Subnet: {{ subnetsCount }} -> {{ subnet.subnet }}
          </h3>
          <h3 v-if="subnet">Host: {{ subnet.host }}</h3>
          <h3 v-if="subnet">Subnet Mask: {{ subnet.subnetMask }}</h3>
        </v-card>
      </v-col>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="subnets"
      class="elevation-1 mt-10"
      hide-default-footer
      disable-pagination
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
  generateSubnets,
  Subnet,
  SubnetMask,
  getSubnetMask,
} from "@/db";
export default Vue.extend({
  data() {
    return {
      subnet: null as SubnetMask | null,
      subnetsCount: 0,
      ip: "127.0.0.1",
      port: "8888",
      subnets: [] as Array<Subnet>,
      headers: [
        { text: "Network ID", value: "networkId" },
        { text: "Subnet Mask", value: "subnetMask" },
        { text: "Host ID Range Start", value: "hostIdRangeStart" },
        { text: "Host ID Range End", value: "hostIdRangeEnd" },
        { text: "# of Usable Host", value: "ofUsableHost" },
        { text: "Broadcast Host", value: "broadcastHost" },
      ],
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
      this.subnet = getSubnetMask(this.subnetsCount);
    },
  },
  components: {
    VueIp,
  },
});
</script>