<template>
  <v-card>
    <v-card-title class="align-start">
      <span class="font-weight-semi-bold">Plants</span>
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
                Type
              </th>
              <th class="text-center text-uppercase">
                Plant assigned to
              </th>
              <th class="text-center text-uppercase">
                Organization
              </th>
              <th class="text-center text-uppercase">
                Edit
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
                {{ item.user_id }}
              </td>
              <td class="text-center">
                {{ item.organization }}
              </td>
              <td class="text-center">
                  <v-btn plain href="/edit-plant">
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
        name: 'Furn',
        user_id: 1,
        organization: 'Acme Narre Warren',
      },
      {
        id: 2,
        name: 'Lilly',
        user_id: 1,
        organization: 'Acme Narre Warren',
      },
      {
        id: 3,
        name: 'Furn',
        user_id: 15,
        organization: 'Acme Berwick',
      },
      {
        id: 4,
        name: 'Vine',
        user_id: 15,
        organization: 'Acme Berwick',
      },
      {
        id: 5,
        name: 'Rose',
        user_id: 15,
        organization: 'Acme Berwick',
      },
      {
        id: 6,
        name: 'Furn',
        user_id: 15,
        organization: 'Acme Berwick',
      },
      {
        id: 7,
        name: 'Tree',
        user_id: 15,
        organization: 'Acme Berwick',
      },
      {
        id: 8,
        name: 'Furn',
        user_id: 18,
        organization: 'Acme Melbourne',
      },
      {
        id: 9,
        name: 'Lilly',
        user_id: 18,
        organization: 'Acme Melbourne',
      },
      {
        id: 10,
        name: 'Vine',
        user_id: 18,
        organization: 'Acme Melbourne',
      },
      {
        id: 11,
        name: 'Tree',
        user_id: 18,
        organization: 'Acme Melbourne',
      },
      {
        id: 12,
        name: 'Lilly',
        user_id: 18,
        organization: 'Acme Melbourne',
      },
      {
        id: 13,
        name: 'Tree',
        user_id: 18,
        organization: 'Acme Melbourne',
      },
      {
        id: 14,
        name: 'Tree',
        user_id: 21,
        organization: 'Acme Richmond',
      },
      {
        id: 15,
        name: 'Furn',
        user_id: 21,
        organization: 'Acme Richmond',
      },
      {
        id: 16,
        name: 'Furn',
        user_id: 21,
        organization: 'Acme Richmond',
      },
      {
        id: 17,
        name: 'Vine',
        user_id: 21,
        organization: 'Acme Richmond',
      },

    ]

    return {
      orgs,
    }
  },
}
</script>
