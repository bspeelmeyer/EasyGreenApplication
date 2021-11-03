<template>
  <v-app>
    <admin-vertical-nav-menu :is-drawer-open.sync="isDrawOpen"></admin-vertical-nav-menu>

    <v-app-bar
      app
      flat
      absolute
      color="transparent"
    >
      <div class="boxed-container w-full">
        <div class="d-flex align-center mx-6">
          <!-- Left Content -->
          <v-app-bar-nav-icon
            class="d-block d-lg-none me-2"
            @click="isDrawOpen = !isDrawOpen"
          ></v-app-bar-nav-icon>


          <v-spacer></v-spacer>

          <!-- Right Content -->
          <a
            href="https://github.com/EasyGreenDevelopment/EasyGreenApplication"
            target="_blank"
            rel="nofollow"
          >
            <v-icon class="ms-6 me-4">
              {{ icons.mdiGithub }}
            </v-icon>
          </a>
          <theme-switcher></theme-switcher>

          <app-bar-user-menu></app-bar-user-menu>
        </div>
      </div>
    </v-app-bar>

    <v-main>
      <div class="app-content-container boxed-container pa-6">
        <slot></slot>
      </div>
    </v-main>

    <v-footer
      app
      inset
      color="transparent"
      absolute
      height="56"
      class="px-0"
    >
      <div class="boxed-container w-full">
        <div class="mx-6 d-flex justify-space-between">
          <span>
            <a
              href="https://themeselection.com"
              class="text-decoration-none"
              target="_blank"
            >EasyGreen </a>&copy; 2021</span>
          <span class="d-sm-inline d-none">
            <a
              target="_blank"
              class="text--secondary text-decoration-none"
              @click="redirectToAbout"
            >About Us</a>
          </span>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiMagnify, mdiBellOutline, mdiGithub } from '@mdi/js'
import AdminVerticalNavMenu from './components/vertical-nav-menu/AdminVerticalNavMenu.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import AppBarUserMenu from './components/AppBarUserMenu.vue'

export default {
  name: "AdminContent",
  components: {
    AdminVerticalNavMenu,
    ThemeSwitcher,
    AppBarUserMenu,
  },
  setup() {
    const isDrawOpen = ref(null)

    return {
      isDrawOpen,

      // Icons
      icons: {
        mdiMagnify,
        mdiBellOutline,
        mdiGithub,
      },
    }
  },

  methods: {
    redirectToAbout() {
      this.$router.push('/admin-about-us')
    }
  }
}
</script>

<style lang="scss" scoped>
.v-app-bar ::v-deep {
  .v-toolbar__content {
    padding: 0;

    .app-bar-search {
      .v-input__slot {
        padding-left: 18px;
      }
    }
  }
}

.boxed-container {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}
</style>

