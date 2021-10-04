<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <admin-overview-card></admin-overview-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <dashboard-card-organizations></dashboard-card-organizations>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <admin-user-overview></admin-user-overview>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <admin-plant-overview></admin-plant-overview>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import DashboardCardOrganizations from './DashboardCardOrganizations.vue'
import AdminOverviewCard from './AdminOverviewCard.vue'
import AdminUserOverview from './AdminUserOverview.vue'
import AdminPlantOverview from './AdminPlantOverview.vue'

export default {
  components: {
    DashboardCardOrganizations,
    AdminOverviewCard,
    AdminUserOverview,
    AdminPlantOverview,
  },
  setup() {
    return {}
  },
}
</script>
