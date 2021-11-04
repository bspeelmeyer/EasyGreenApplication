<template>
  <div>
    <v-sheet>
      <v-data-table
        :headers="headers"
        :items="plantsData"
        :items-per-page="20"
        class="text-center text-uppercase"
      >
        <template v-slot:item.health>
          <v-icon
            style="color: green"
          >
          {{ icons.mdiEmoticonHappy}}
          </v-icon>
        </template>
      </v-data-table>
    </v-sheet>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { deleteSelectedPlant, getDataListByUserId } from "@/api/data";
import { mdiDelete, mdiPencil, mdiEmoticonHappy} from '@mdi/js';

const headers = [
  {
    text: 'Plant', value: 'plantName'
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
  {
    text: 'Health', value: 'health', sortable: false
  }
]

export default {
  name: 'UserPlantsTable',
  computed: {
    ...mapState({
      id: state => state.user.id,
    }),
  },

  async mounted() {
    await getDataListByUserId(this.id).then((resp) => {
      const data = resp.data
      console.log(data)
      this.plantsData = data
    })
  },

  data() {
    return {
      headers,
      plantsData: [],
      icons: {
        mdiPencil,
        mdiDelete,
        mdiEmoticonHappy,
      },
    }
  },

  methods: {
    deleteItem(item) {
      console.log(item.id)
      console.log(this.plantsData.indexOf(item))
      this.$confirm('Are you sure you want to delete this plant?',
        'Delete plant',{
          confirmButtonText: 'Confirm',
          cancelButtonText: 'Cancel',
          type: 'warning'
      }).then(() => deleteSelectedPlant(item.id)).then(() => {
        this.$alert("The plant has been deleted.")
      })
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
