<template>
  <v-card>
    <v-card-title class="align-start">
      <span class="font-weight-semi-bold">Users</span>
    </v-card-title>
    <v-card-text>
      <v-simple-table
        height="300"
        fixed-header
      >
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-uppercase">
                Id
              </th>
              <th class="text-center text-uppercase">
                Name
              </th>
              <th class="text-center text-uppercase">
                Plants Assiged
              </th>
              <th class="text-center text-uppercase">
                Organization
              </th>
              <th class="text-center text-uppercase">
                Manage
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in orgs"
              :key="item.org"
            >
              <td>{{ item.id }}</td>
              <td class="text-center">
                {{ item.name }}
              </td>
              <td class="text-center">
                {{ item.plants }}
              </td>
              <td class="text-center">
                {{ item.organization }}
              </td>
              <td class="text-center">
                  <v-btn plain href="/edit-user">
                  <v-icon large class="mr-2">
                    {{ icons.mdiPencil }}
                  </v-icon>
                </v-btn>
                <v-btn plain>
                  <v-icon large @click="deleteItem(item)">
                    {{ icons.mdiDelete }}
                  </v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>
<script>
import { mdiDelete, mdiPencil } from '@mdi/js'


export default {
   data() {
    return {
      icons: {
        mdiPencil,
        mdiDelete,
      },
    }
  },
  
  setup() {
    const orgs = [
      {
        id: 1,
        name: 'David Jones',
        plants: 2,
        organization: 'Acme Narre Warren',
      },
      {
        id: 15,
        name: 'Sarah Marshall',
        plants: 5,
        organization: 'Acme Berwick',
      },
      {
        id: 18,
        name: 'Mike Taylor',
        plants: 6,
        organization: 'Acme Melbourne',
      },
      {
        id: 21,
        name: 'Steve Jobs',
        plants: 5,
        organization: 'Acme Richmond',
      },
    ]

    return {
      orgs,
    }
  },
}
</script>
