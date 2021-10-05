<template>
  <v-row>
    <v-col
      cols="12"
      md="12"
    >
      <users-card></users-card>
    </v-col>
    <v-col
      cols="12"
      md="12"
    >
      <plants-card></plants-card>
    </v-col>
  </v-row>
</template>
<script>
import PlantsCard from './PlantsCard.vue'
import UsersCard from './UsersCard.vue'

export default {
  components: {
    UsersCard,
    PlantsCard,
  },
  setup() {
    return {}
  },
}
</script>
