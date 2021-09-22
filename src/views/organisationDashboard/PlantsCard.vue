<template>
    <v-card>
        <v-card-title class="align-start">
            <span class="font-weight-semi-bold">Organization Plants</span>
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
                        <v-btn href="edit-plant">Edit</v-btn>
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
        name: 'Furn',
        user_id: 1,
      },
      {
        id: 2,
        name: 'Lilly',
        user_id: 1,
      },
      {
        id: 3,
        name: 'Furn',
        user_id: 15,
      },
      {
        id: 4,
        name: 'Vine',
        user_id: 15,
      },
       {
        id: 5,
        name: 'Rose',
        user_id: 15,
      },
       {
        id: 6,
        name: 'Furn',
        user_id: 15,
      },
       {
        id: 7,
        name: 'Tree',
        user_id: 15,
      },
       {
        id: 8,
        name: 'Furn',
        user_id: 18,
      },
       {
        id: 9,
        name: 'Lilly',
        user_id: 18,
      },
       {
        id: 10,
        name: 'Vine',
        user_id: 18,
      },
       {
        id: 11,
        name: 'Tree',
        user_id: 18,
      },
       {
        id: 12,
        name: 'Lilly',
        user_id: 18,
      },
       {
        id: 13,
        name: 'Tree',
        user_id: 18,
      },
       {
        id: 14,
        name: 'Tree',
        user_id: 21,
      },
       {
        id: 15,
        name: 'Furn',
        user_id: 21,
      },
       {
        id: 16,
        name: 'Furn',
        user_id: 21,
      },
       {
        id: 17,
        name: 'Vine',
        user_id: 21,
      },
      
    ]

    return {
      orgs,
    }
  },
}
</script>