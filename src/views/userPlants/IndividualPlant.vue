<template>
  <v-data-table
    :headers="headers"
    :items="plantsData"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>My Plants</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Plant
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Dessert name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.calories"
                      label="Calories"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.fat"
                      label="Fat (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.carbs"
                      label="Carbs (g)"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.protein"
                      label="Protein (g)"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.health>
      <v-icon
        style="color: green"
      >
        {{ icons.mdiEmoticonHappy}}
      </v-icon>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        {{ icons.mdiPencil }}
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        {{ icons.mdiDelete }}
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import { mdiDelete, mdiPencil, mdiEmoticonHappy} from '@mdi/js';
import { getDataListByUserId } from "@/api/data";
import { mapState } from "vuex";
import {deletePlantBySelect} from "@/api/plant";

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
  },
  {
    text: 'Actions', value: 'actions', sortable: false
  },
]

export default {
  name: "IndividualPlant",

  async mounted() {
    await getDataListByUserId(this.id).then((resp) => {
      const data = resp.data
      console.log(data)
      this.plantsData = data
    })
  },

  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: headers,
    plantsData: [],
    editedIndex: -1,
    itemId: '',
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },

    icons: {
      mdiPencil,
      mdiDelete,
      mdiEmoticonHappy,
    },
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Plant' : 'Edit Plant'
    },

    ...mapState({
      id: state => state.user.id,
    }),
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {},

    editItem (item) {
      this.editedIndex = this.plantsData.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.itemId = item.id
      this.editedIndex = this.plantsData.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      deletePlantBySelect(this.itemId).then(() => {
        this.$alert("The plant has been deleted.")
        this.plantsData.splice(this.editedIndex, 1)
        this.closeDelete()
      })
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.plantsData[this.editedIndex], this.editedItem)
      } else {
        this.plantsData.push(this.editedItem)
      }
      this.close()
    },
  },
}
</script>

<style scoped>

</style>
