<template>
  <v-card>
    <v-card-title class="align-start">
      <span class="font-weight-semibold">Organization Control Panel</span>
    </v-card-title>

    <v-card-text>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-btn
            block
            :to="{ name: 'organization-board' }"
            color="primary"
            elevation="2"
          >
            Create Organization
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-btn
            block
            :to="{ name: 'edit-user' }"
            color="primary"
            elevation="2"
          >
            Create User
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-btn
            block
            :to="{ name: 'edit-plant' }"
            color="primary"
            elevation="2"
          >
            Create Plant
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline

export default {
  setup() {

  },
}
</script>
