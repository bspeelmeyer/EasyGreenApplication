<template>
  <v-card class="greeting-card">
    <v-row class="ma-0 pa-0">
      <v-col cols="8">
        <v-card-title class="text-no-wrap pt-1 ps-2">
          Congratulations {{ userName }} 🥳
        </v-card-title>
        <v-card-subtitle class="text-no-wrap ps-2">
          You overall plants health is trending up!!
        </v-card-subtitle>
        <v-card-text class="d-flex align-center mt-2 pb-2 ps-2">
          <div>
            <p class="text-xl font-weight-semibold primary--text mb-2">
              86.9% ↑
            </p>
          </div>
        </v-card-text>
      </v-col>

      <v-col cols="4">
        <v-img
          contain
          height="108"
          max-width="83"
          class="greeting-card-trophy"
          src="@/assets/images/misc/trophy.png"
        ></v-img>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import { getUserInfo } from "@/api/user";

export default {
  name: 'PlantStatus',

  data() {
    return {
      userName: '',
    }
  },

  mounted() {
    this.initUserName()
  },

  computed: {
    ...mapState({
      id: state => state.user.id,
    }),
  },

  methods: {
    initUserName() {
      console.log(this.id)
      getUserInfo(this.id).then(resp => {
        const data = resp.data;
        if (data) {
          this.userName = data.userName.toUpperCase();
        }
      })
    }
  }
}

</script>
<style lang="scss" scoped>
.greeting-card {
  position: relative;
  .greeting-card-bg {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .greeting-card-trophy {
    position: absolute;
    bottom: 10%;
    right: 8%;
  }
}
// rtl
.v-application {
  &.v-application--is-rtl {
    .greeting-card-bg {
      right: initial;
      left: 0;
      transform: rotateY(180deg);
    }
    .greeting-card-trophy {
      left: 8%;
      right: initial;
    }
  }
}
</style>
