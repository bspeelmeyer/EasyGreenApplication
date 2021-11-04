<template>
  <v-row>
    <v-col
      cols="12"
      md="12"
    >
      <StatisticsCard></StatisticsCard>
    </v-col>
<!--    WeeklyOverviewCard-->
    <v-col
      cols="12"
      md="4"
    >
      <WeeklyOverviewCard></WeeklyOverviewCard>
    </v-col>
<!--    WeeklyWaterRequirementsCard-->
    <v-col
      cols="12"
      md="4"
    >
      <WeeklyWaterRequirementsCard></WeeklyWaterRequirementsCard>
    </v-col>
<!--    WeeklyMaxDailyTempCard-->
    <v-col
      cols="12"
      md="4"
    >
      <WeeklyMaxDailyTempCard></WeeklyMaxDailyTempCard>
    </v-col>
  </v-row>
</template>

<script>
import StatisticsCard from "@/views/userPlants/StatisticsCard";
import WeeklyOverviewCard from "@/views/userPlants/WeeklyOverviewCard";
import WeeklyWaterRequirementsCard from "@/views/userPlants/WeeklyWaterRequirementsCardCard";
import WeeklyMaxDailyTempCard from "@/views/userPlants/WeeklyMaxDailyTempCard";

export default {
  name: "SubDetailPlant",
  components: {WeeklyMaxDailyTempCard, WeeklyOverviewCard, StatisticsCard, WeeklyWaterRequirementsCard },

  data: () => ({}),

  methods: {}
}
</script>

<style scoped>

</style>
