<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card class="auth-card">
        <!-- logo -->
        <v-card-title class="d-flex align-center justify-center py-7">
          <router-link
            to="/"
            class="d-flex align-center"
          >
            <v-img
              :src="require('@/assets/images/logos/easygreen.png')"
              max-height="30px"
              max-width="30px"
              alt="logo"
              contain
              class="me-3 "
            ></v-img>

            <h2 class="text-2xl font-weight-semibold">
              EasyGreen
            </h2>
          </router-link>
        </v-card-title>

        <!-- title -->
        <v-card-text>
          <p class="text-2xl font-weight-semibold text--primary mb-2">
            Welcome to EasyGreen! 👋🏻
          </p>
          <p class="mb-2">
            Please sign-in to your account and start the adventure
          </p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form
            ref="form"
            v-model="valid"
          >
            <v-alert
              :value="loginAlert"
              border="top"
              dismissible
              type="success"
              transition="scale-transition"
            >
              Login Successfully!
            </v-alert>
            <v-alert
              :value="validateAlert"
              border="top"
              dismissible
              type="error"
              transition="scale-transition"
            >
              Please enter correct username or password
            </v-alert>
            <v-text-field
              v-model="email"
              outlined
              label="Email"
              placeholder="john@gmail.com"
              hide-details
              class="mb-3"
              :rules="emailRules"
            ></v-text-field>

            <v-text-field
              v-model="password"
              outlined
              :type="isPasswordVisible ? 'text' : 'password'"
              label="Password"
              placeholder="**********"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              hide-details
              :rules="passwordRules"
              @click:append="isPasswordVisible = !isPasswordVisible"
            ></v-text-field>

            <v-btn
              block
              color="primary"
              class="mt-6"
              @click.native.prevent="handleSubmit"
            >
              Login
            </v-btn>
          </v-form>
        </v-card-text>

        <!-- create new account  -->
        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <span class="me-2">
            New on our platform?
          </span>
          <router-link :to="{name:'pages-register'}">
            Create an account
          </router-link>
        </v-card-text>

        <!-- divider -->
        <v-card-text class="d-flex align-center mt-2">
          <v-divider></v-divider>
          <span class="mx-5">or</span>
          <v-divider></v-divider>
        </v-card-text>

        <!-- social links -->
        <v-card-actions class="d-flex justify-center">
          <v-btn
            v-for="link in socialLink"
            :key="link.icon"
            icon
            class="ms-1"
          >
            <v-icon :color="$vuetify.theme.dark ? link.colorInDark : link.color">
              {{ link.icon }}
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <!-- background triangle shape  -->
    <img
      class="auth-mask-bg"
      height="173"
      :src="require(`@/assets/images/misc/mask-${$vuetify.theme.dark ? 'dark':'light'}.png`)"
    >

    <!-- tree -->
    <v-img
      class="auth-tree"
      width="247"
      height="185"
      src="@/assets/images/misc/tree.png"
    ></v-img>

    <!-- tree  -->
    <v-img
      class="auth-tree-3"
      width="377"
      height="289"
      src="@/assets/images/misc/tree-3.png"
    ></v-img>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiFacebook, mdiTwitter, mdiGithub, mdiGoogle, mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'
import { mapActions } from 'vuex'
import auth from '@/utils/auth'

export default {
  name: 'Login',

  data() {
    const isPasswordVisible = ref(false)
    const socialLink = [
      {
        icon: mdiFacebook,
        color: '#4267b2',
        colorInDark: '#4267b2',
      },
      {
        icon: mdiTwitter,
        color: '#1da1f2',
        colorInDark: '#1da1f2',
      },
      {
        icon: mdiGithub,
        color: '#272727',
        colorInDark: '#fff',
      },
      {
        icon: mdiGoogle,
        color: '#db4437',
        colorInDark: '#db4437',
      },
    ]

    return {
      isPasswordVisible: false,
      socialLink,
      email: 'test@gmail.com',
      password: 'TEST123!',
      valid: true,
      loginAlert: false,
      validateAlert: false,

      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },

      passwordRules: [
        v => !!v || 'Password is required',
      ],

      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }
  },

  methods: {
    handleSubmit() {
      const {
        email, password,
      } = this
      const params = {
        email, password,
      }

      if (!this.$refs.form.validate()) {
        this.validateAlert = !this.validateAlert

        return
      }
      this.$store.dispatch('Login', params).then(res => {
        console.log(res)
        const response = res.data
        console.log(response.role)
        if (res.code !== 200) {
          this.$alert(res.message);
          this.loginAlert = true
        } else {
          if (response.role === "USER") {
            this.loginAlert = !this.loginAlert
            auth.setToken(response.token)
            setTimeout(() => {
              this.$router.replace('/dashboard')
            }, 2000)
          } else if (response.role === "ADMIN") {
            this.loginAlert = !this.loginAlert
            auth.setToken(response.token)
            setTimeout(() => {
              this.$router.replace('/admin-dashboard')
            }, 2000)
          }

        }

      })
    },
    ...mapActions(['Login']),
  },
}
</script>

<style lang="scss">
@import '~@/plugins/vuetify/default-preset/preset/pages/auth.scss';
</style>
