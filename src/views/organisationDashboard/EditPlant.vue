<template>
    <v-card>
        <v-card-title class="align-start">
            <span class="font-weight-semi-bold">Edit Plants</span>
        </v-card-title>
        <v-card-text>
              <v-form>
                <v-text-field
                v-model="Id"
                label="First Name"
                outlined
                dense
                disabled
                placeholder="Id"
                ></v-text-field>

                 <v-text-field
                v-model="Type"
                label="Plant Type"
                outlined
                dense
                placeholder="Plant Type"
                ></v-text-field>

                <v-select
                :items="items"
                label="Assign user"
                dense
                outlined
                ></v-select>

                <v-btn color="primary">
                Confirm Edit
                </v-btn>
                <v-btn
                href="organization-board"
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
    const Id = ref('1')
    const Type = ref('Fern')
    const items = ref(['1','15','18','21'])
    

    return {
      Id,
      Type,
      items
      
      
}
    },
}
</script>