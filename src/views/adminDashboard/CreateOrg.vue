<template>
  <v-card>
    <v-card-title class="align-start">
      <span class="font-weight-semi-bold">Create Organization</span>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="Name"
          label="Name"
          outlined
          dense
          placeholder="Name"
        ></v-text-field>

        <v-text-field
          v-model="Type"
          label="Location"
          outlined
          dense
          placeholder="Location"
        ></v-text-field>

        <v-btn color="primary">
          Create
        </v-btn>
        <v-btn
          href="admin-dashboard"
          outlined
          class="mx-2"
        >
          Cancel
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>
<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const Id = ref('')
    const Type = ref('')
    const items = ref(['1', '15', '18', '21'])

    return {
      Id,
      Type,
      items,

    }
  },
}
</script>
