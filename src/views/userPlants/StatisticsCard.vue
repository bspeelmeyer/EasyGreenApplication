<template>
  <v-card>
    <v-card-title class="align-start">
      <span class="font-weight-semibold">{{ plantName }} Statistics</span>
      <v-spacer></v-spacer>
      <v-btn
        icon
        small
        class="me-n3 mt-n2"
      >
        <v-icon>
          {{ icons.mdiDotsVertical }}
        </v-icon>
      </v-btn>
    </v-card-title>

    <v-card-subtitle class="mb-8 mt-n5">
      <span>😎</span>
    </v-card-subtitle>

    <v-card-text>
      <v-row>
        <v-col
          v-for="data in statisticsData"
          :key="data.title"
          cols="6"
          md="3"
          class="d-flex align-center"
        >
          <v-avatar
            size="44"
            :color="resolveStatisticsIconVariation (data.title).color"
            rounded
            class="elevation-1"
          >
            <v-icon
              dark
              color="white"
              size="30"
            >
              {{ resolveStatisticsIconVariation (data.title).icon }}
            </v-icon>
          </v-avatar>
          <div class="ms-3">
            <p class="text-xs mb-0">
              {{ data.title }}
            </p>
            <h3 class="text-xl font-weight-semibold">
              {{ data.total }}
            </h3>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiAccountOutline, mdiCurrencyUsd, mdiTrendingUp, mdiDotsVertical, mdiLabelOutline, mdiTemperatureCelsius, mdiWater, mdiPot, mdiWeatherSunny } from '@mdi/js'
import { getDataById } from "@/api/data";

export default {
  mounted() {
    this.initData();
  },

  data: () => ({
    plantName: '',
  }),

  setup() {
    const statisticsData = [
      {
        title: 'Temperature',
        total: '10°',
      },
      {
        title: 'Humidity',
        total: '32%',
      },
      {
        title: 'Soil Moisture',
        total: '54%',
      },
      {
        title: 'Light Intensity',
        total: '24Lux',
      },
    ]

    const resolveStatisticsIconVariation = data => {
      if (data === 'Temperature') return { icon: mdiTemperatureCelsius, color: 'primary'}
      if (data === 'Humidity') return { icon: mdiWater, color: 'success' }
      if (data === 'Soil Moisture') return { icon: mdiPot, color: 'warning' }
      if (data === 'Light Intensity') return { icon: mdiWeatherSunny, color: 'info' }

      return { icon: mdiAccountOutline, color: 'success' }
    }

    return {
      statisticsData,
      resolveStatisticsIconVariation,
      dataId: '',
      plantName: 'Name',

      // icons
      icons: {
        mdiDotsVertical,
        mdiTrendingUp,
        mdiAccountOutline,
        mdiLabelOutline,
        mdiCurrencyUsd,
      },
    }
  },

  methods: {
    initData() {
      this.dataId = this.$route.params && this.$route.params.id
      getDataById(this.dataId).then((res) => {
        const resData = res.data;
        if (resData) {
          this.plantName = resData.plantName

        }
      })
    }
  }
}
</script>
