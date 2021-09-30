<template>
  <v-row>
    <v-col
      cols="12"
      md="80"
    >
      <v-card>
        <v-img
          src="@/assets/images/pages/about.jpg"
          height="250"
        />
        <v-card-title>
          The EasyGreen Crew
        </v-card-title>
        <v-card-text>
          Product Owner: Benjamin Speelmeyer
        </v-card-text>
        <v-card-text>
          Scrum Master: Olivia Wichtowski
        </v-card-text>
        <v-card-text>
          Development Team: Hang Yang, Dewmini Abeyaretne, Zhenzhuo Ye, Zongzhou Wang
        </v-card-text>
        <v-card-title>
          Project Summary
        </v-card-title>
        <v-card-text>
          The purpose of this project is to design and develop a smart plant monitoring system for the company, Acme Smart Plants. Acme Smart Plants look after plants in offices. They have found that plants are often neglected and die. This project has been offered to Easy Green to resolve this issue. The system will need to be able to monitor plant health 24/7 by using instrumentation including an IoT (Internet of Things) device with sensors to perceive the temperature, humidity and light intensity of a plant’s environment, as well as the percentage of moisture in the soil. Via a web application, users will be able to monitor plant health and be notified of any plants requiring attention. This will result in less plants dying, better use of the Acme workforce and happier Acme customers with improved office ambience.
        </v-card-text>
        <v-card-title>
          Project Sponsor
        </v-card-title>
        <v-card-text>
          The project sponsor is Reza Soltanpoor of RMIT University. RMIT University is an educational institution in Australia working in collaboration with Acme Smart Plants to provide the Easy Green solution to Acme customers.
        </v-card-text>
      </v-card>
    </v-col>

  </v-row>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiPoll, mdiLabelVariantOutline, mdiCurrencyUsd, mdiHelpCircleOutline } from '@mdi/js'
import StatisticsCardVertical from '@/components/statistics-card/StatisticsCardVertical.vue'

// demos

export default {
  name: 'dashboard',
  components: {
  },
  setup() {

    return {

    }
  },
}
</script>
