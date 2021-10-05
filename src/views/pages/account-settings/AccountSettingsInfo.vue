<template>
  <v-card
    flat
    class="pa-3 mt-2"
  >
    <v-form class="multi-col-validation">
      <v-card-text class="pt-5">
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="optionsLocal.dateOfBirth"
              outlined
              dense
              label="Birthday"
              disabled
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="optionsLocal.userName"
              outlined
              dense
              label="Username"
              disabled
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="optionsLocal.firstName"
              outlined
              dense
              label="FirstName"
              disabled
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="optionsLocal.lastName"
              outlined
              dense
              label="LastName"
              disabled
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="optionsLocal.phone"
              outlined
              dense
              label="Phone"
              disabled
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="optionsLocal.email"
              outlined
              dense
              label="Email"
              disabled
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="optionsLocal.gender"
              outlined
              dense
              label="Gender"
              disabled
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="optionsLocal.address"
              outlined
              dense
              label="Address"
              disabled
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-form>
  </v-card>
</template>

<script>
import { ref } from '@vue/composition-api'
import { getAdminInfo, getUserInfo } from "@/api/user";
import {mapState} from "vuex";

export default {
  props: {
    informationData: {
      type: Object,
      default: () => {},
    },
  },

  mounted() {
    this.initInfo()
  },

  computed: {
    ...mapState({
      id: state => state.user.id,
      role: state => state.user.role,
    }),
  },

  setup(props) {
    const optionsLocal = ref(JSON.parse(JSON.stringify(props.informationData)))

    const resetForm = () => {
      optionsLocal.value = JSON.parse(JSON.stringify(props.informationData))
    }

    return { optionsLocal, resetForm }
  },

  methods: {
    initInfo() {
      console.log(this.id)
      console.log(this.role)
      if (this.role === 'USER') {
        getUserInfo(this.id).then(resp => {
          const data = resp.data;
          if (data) {
            this.optionsLocal = {...data}
          }
        })
      } else {
        getAdminInfo(this.id).then(resp => {
          const data = resp.data;
          if (data) {
            this.optionsLocal = {...data}
          }
        })
      }
    },
  }
}
</script>
