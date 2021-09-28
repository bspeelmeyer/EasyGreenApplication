<template>
  <div>
    <v-sheet>
      <v-data-table
        :headers="headers"
        :items="plantsData"
        :items-per-page="20"
        class="elevation-1"
      >
        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-sheet>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getDataByUserId } from "@/api/data";
import { getPlant } from "@/api/plant";

const headers = [
  {
    text: 'Plant', value: 'plantId'
  },
  {
    text: 'Garden Light', value: 'lightIntensity'
  },
  {
    text: 'Humidity', value: 'humidity'
  },
  {
    text: 'Soil Moisture', value: 'soilMoisture'
  },
  {
    text: 'Air Temperature', value: 'temperature',
  },
  {text: 'Actions', value: 'actions', sortable: false},
]

export default {
  name: 'UserPlantsTable',
  computed: {
    ...mapState({
      id: state => state.user.id,
    }),
  },

  async mounted() {
    let plantsData = []
    await getDataByUserId(this.id).then((resp) => {
      const data = resp.data
      console.log(data)
      const labels = ['lightIntensity', 'humidity', 'soilMoisture', 'temperature']
      for (const plantData of data) {
        let obj = {}
        for (const key of labels) {
          obj[key] = plantData[key]
        }
        obj['_id'] = plantData['plantId']
        plantsData.push(obj)
      }
    })
  },

  data() {
    return {
      headers,
      plantsData: [],
    }
  },

  methods: {
    deleteItem(item) {
      console.log(item)
      console.log(this.plantsData.indexOf(item))
      if (!confirm("Are you sure to delete this plant?")) {
        return
      }
      // TODO
      // Delete specific plant that this user chose

    },

    editItem(item) {
      console.log(item)
      console.log(this.plantsData.indexOf(item))
      // TODO
      // redirect to plant edit page
    }
  }
}
</script>
