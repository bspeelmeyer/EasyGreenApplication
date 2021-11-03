<template>
  <v-data-table
    :headers="headers"
    :items="organisationsData"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Organizations</v-toolbar-title>
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
              New Organization
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
                      label="Organization Name"
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
            <v-card-title class="text-h5">Sure to delete this organization?</v-card-title>
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
import { mdiDelete, mdiPencil} from '@mdi/js';
import { mapState } from "vuex";
import {
  createOrganization,
  deleteOrganizationBySelect,
  getAllOrganization,
  updateOrganization
} from "@/api/organization";
import {createPlant} from "@/api/plant";

const headers = [
  {
    text: 'Organization Id', value: 'id'
  },
  {
    text: 'Organization Name', value: 'Name'
  },
  {
    text: 'Actions', value: 'actions', sortable: false
  },
]

export default {
  name: "EditOrganization",

  async mounted() {
    await getAllOrganization().then((resp) => {
      const data = resp.data
      console.log(data)
      this.organisationsData = data
    })
  },

  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: headers,
    organisationsData: [],
    organizationId: '',
    editedItemId: '',
    editedIndex: -1,
    editedItem: {
      name: '',
    },
    defaultItem: {
      name: '',
    },

    icons: {
      mdiPencil,
      mdiDelete,
    },
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Organization' : 'Edit Organization'
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
      this.editedItemId = item.id
      this.editedIndex = this.organisationsData.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.organizationId = item.id
      this.editedIndex = this.organisationsData.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      deleteOrganizationBySelect(this.organizationId).then(() => {
        this.$alert("The organization has been deleted.")
        this.organisationsData.splice(this.editedIndex, 1)
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
        Object.assign(this.organisationsData[this.editedIndex], this.editedItem)
        const param = {
          ...this.editedItem,
          id: this.editedItemId
        }
        updateOrganization(param).then((res) => {
          if (res) {
            this.$alert("Organization has been updated.")
          }
          window.location.reload()
        })
      } else {
        console.log(this.editedItem)
        this.organisationsData.push(this.editedItem)
        const param = {
          ...this.editedItem
        }
        createOrganization(param).then((resp) => {
          if (resp.code === 200) {
            alert('An organization has been created successfully!')
          }
          window.location.reload()
        })
      }
      this.close()
    },
  },
}
</script>

<style scoped>

</style>
