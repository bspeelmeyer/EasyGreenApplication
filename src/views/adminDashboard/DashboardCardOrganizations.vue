<template>
    <v-card>
        <v-card-title class="align-start">
            <span class="font-weight-semi-bold">Organizations Overview</span>
        </v-card-title>
        <v-card-text>
             <v-simple-table
            height="auto"
            fixed-header
        >
            <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-uppercase">
                        Name
                    </th>
                    <th class="text-center text-uppercase">
                        Users
                    </th>
                    <th class="text-center text-uppercase">
                        Plants
                    </th>
                    <th class="text-center text-uppercase">
                        View
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="item in orgs"
                :key="item.org"
                >
                    <td>{{ item.name }}</td>
                    <td class="text-center">
                        {{ item.users }}
                    </td>
                    <td class="text-center">
                        {{ item.plants }}
                    </td>
                    <td class="text-center">
                        <v-btn href="/organization-board">View</v-btn>
                    </td>
                </tr>
            </tbody>
            </template>
            </v-simple-table>
        </v-card-text>
       
    </v-card>
</template>
<script>
export default {
  setup() {
    const orgs = [
      {
        name: 'Acme Narre Warren',
        users: 4,
        plants: 14,
      },
      {
        name: 'Acme Berwick',
        users: 2,
        plants: 20,
      },
      {
        name: 'Acme Melbourne',
        users: 35,
        plants: 152,
      },
      {
        name: 'Acme Richmond',
        users: 15,
        plants: 86,
      },
      {
        name: 'Acme Geelong',
        users: 1,
        plants: 86,
      },
      {
        name: 'Acme Morwell',
        users: 1,
        plants: 10,
      },
      {
        name: 'Acme Geelong',
        users: 1,
        plants: 86,
      },
      {
        name: 'Acme Shepperton',
        users: 16,
        plants: 28,
      }
    ]

    return {
      orgs,
    }
  },
}
</script>