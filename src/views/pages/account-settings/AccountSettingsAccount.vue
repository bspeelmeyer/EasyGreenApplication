<template>
  <v-card
    flat
    class="pa-3 mt-2"
  >
    <v-card-text class="d-flex">
      <v-avatar
        rounded
        size="120"
        class="me-6"
      >
        <v-img src="@/assets/images/avatars/1.png"></v-img>
      </v-avatar>

      <!-- upload photo -->
      <div>
        <v-btn
          color="primary"
          class="me-3 mt-5"
          @click="$refs.refInputEl.click()"
        >
          <v-icon class="d-sm-none">
            {{ icons.mdiCloudUploadOutline }}
          </v-icon>
          <span class="d-none d-sm-block">Upload new photo</span>
        </v-btn>

        <input
          ref="refInputEl"
          type="file"
          accept=".jpeg,.png,.jpg,GIF"
          :hidden="true"
        />

        <v-btn
          color="error"
          outlined
          class="mt-5"
          @click="initUserInfo"
        >
          Reset
        </v-btn>
        <p class="text-sm mt-5">
          Upload new photo is not implemented yet*
        </p>
      </div>
    </v-card-text>

    <v-card-text>
      <v-form class="multi-col-validation mt-6">
        <v-row>
          <v-col
            md="6"
            cols="12"
          >
            <v-text-field
              v-model="accountDataLocale.userName"
              label="Username"
              dense
              outlined
            ></v-text-field>
          </v-col>

          <v-col
            md="6"
            cols="12"
          >
            <v-text-field
              v-model="accountDataLocale.firstName"
              label="First Name"
              dense
              outlined
            ></v-text-field>
          </v-col>

          <v-col
            md="6"
            cols="12"
          >
            <v-text-field
              v-model="accountDataLocale.lastName"
              label="Last Name"
              dense
              outlined
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="accountDataLocale.email"
              label="E-mail"
              dense
              outlined
              :rules="rules.email"
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-select
              v-model="accountDataLocale.gender"
              dense
              outlined
              label="Gender"
              :items="genders"
            ></v-select>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="accountDataLocale.address"
              dense
              outlined
              label="Address"
            ></v-text-field>
          </v-col>

          <!-- alert -->
<!--          <v-col cols="12">-->
<!--            <v-alert-->
<!--              color="warning"-->
<!--              text-->
<!--              class="mb-0"-->
<!--            >-->
<!--              <div class="d-flex align-start">-->
<!--                <v-icon color="warning">-->
<!--                  {{ icons.mdiAlertOutline }}-->
<!--                </v-icon>-->

<!--                <div class="ms-3">-->
<!--                  <p class="text-base font-weight-medium mb-1">-->
<!--                    Your email is not confirmed. Please check your inbox.-->
<!--                  </p>-->
<!--                  <a-->
<!--                    href="javascript:void(0)"-->
<!--                    class="text-decoration-none warning&#45;&#45;text"-->
<!--                  >-->
<!--                    <span class="text-sm">Resend Confirmation</span>-->
<!--                  </a>-->
<!--                </div>-->
<!--              </div>-->
<!--            </v-alert>-->
<!--          </v-col>-->

          <v-col cols="12">
            <v-btn
              color="primary"
              class="me-3 mt-4"
              @click.prevent="saveChange"
            >
              Save changes
            </v-btn>
            <v-btn
              color="secondary"
              outlined
              class="mt-4"
              type="reset"
              @click.prevent="redirectToDashboard"
            >
              Cancel
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiAlertOutline, mdiCloudUploadOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'
import {getAdminInfo, getUserInfo, updateUserInfo} from "@/api/user";
import {mapState} from "vuex";

export default {
  name: 'AccountSettings',
  props: {
    accountData: {
      type: Object,
      default: () => {},
    },
  },

  mounted() {
    this.initUserInfo();
  },

  setup(props) {
    const status = ['Active', 'Inactive', 'Pending', 'Closed']
    const genders = ['Male', 'Female', 'Other']

    const accountDataLocale = ref(JSON.parse(JSON.stringify(props.accountData)))

    const resetForm = () => {
      accountDataLocale.value = JSON.parse(JSON.stringify(props.accountData))
    }

    return {
      status,
      accountDataLocale,
      resetForm,
      genders,

      icons: {
        mdiAlertOutline,
        mdiCloudUploadOutline,
      },
      rules: {
        email: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        required: [value => !!value || 'Required.'],
      }
    }
  },

  computed: {
    ...mapState({
      id: state => state.user.id,
      role: state => state.user.role,
    }),
  },

  methods: {
    initUserInfo() {
      console.log(this.id)
      console.log(this.role)
      if (this.role === 'USER') {
        getUserInfo(this.id).then(resp => {
          const data = resp.data;
          if (data) {
            this.accountDataLocale = {...data}
          }
        })
      } else {
        getAdminInfo(this.id).then(resp => {
          const data = resp.data;
          if (data) {
            this.accountDataLocale = {...data}
          }
        })
      }
    },

    saveChange() {
      if (this.validate() === false) {
        this.$alert("Please fill required field.")
        return
      }
      const param = {
        ...this.accountDataLocale,
        id: this.id,
      }
      if (this.role.toLowerCase() === "user") {
        // update user info
        updateUserInfo(param).then(resp => {
          if (resp) {
            this.$alert("Profile has been updated.")
            this.initUserInfo()
          }
        })
      }
    },

    redirectToDashboard() {
      this.$router.push('/dashboard')
    }
  }
}
</script>
