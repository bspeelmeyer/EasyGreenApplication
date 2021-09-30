<template>
    <v-card>
        <v-card-title class="align-start">
            <span class="font-weight-semi-bold">Organization Users</span>
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
                        Plants assigned
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
                        {{ item.plants }}
                    </td>
                    <td class="text-center">
                        <v-btn href="/edit-user">Edit</v-btn>
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
        id: 1,
        name: 'David Jones',
        plants: 2,
      },
      {
        id: 15,
        name: 'Sarah Marshall',
        plants: 5,
      },
      {
        id: 18,
        name: 'Mike Taylor',
        plants: 6,
      },
      {
        id: 21,
        name: 'Steve Jobs',
        plants: 5,
      },
      
    ]

    return {
      orgs,
    }
  },
}
</script>