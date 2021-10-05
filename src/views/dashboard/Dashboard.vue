<template>
  <v-row>
    <v-col
      cols="12"
      md="80"
    >
      <v-card>
        <v-img
          src="@/assets/images/pages/dashboard.jpg"
          height="250"
        />
        <v-card-title>
          WELCOME TO EASYGREEN
        </v-card-title>
        <v-card-text>
          Your plant health is trending up! Check out your plants below
        </v-card-text>
      </v-card>
    </v-col>
    <v-col
      cols="12"
      md="80"
    >
      <UserPlantsTable></UserPlantsTable>
    </v-col>

  </v-row>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiPoll, mdiLabelVariantOutline, mdiCurrencyUsd, mdiHelpCircleOutline } from '@mdi/js'
import StatisticsCardVertical from '@/components/statistics-card/StatisticsCardVertical.vue'

// demos
import UserPlantsTable from "@/views/simple-table/UserPlantsTable";

export default {
  name: 'dashboard',
  components: {
    UserPlantsTable,
  },
  setup() {

    return {

    }
  },
}
</script>
