<template>
  <v-row>
    <v-col
     cols="12"
     md="12"
    >
        <dashboard-card-organizations></dashboard-card-organizations>
    </v-col>
  </v-row>
</template>
<script>
import DashboardCardOrganizations from './DashboardCardOrganizations.vue'

export default {
  components: {
    DashboardCardOrganizations
  },
  setup() {
    return {}
  },
}
</script>
