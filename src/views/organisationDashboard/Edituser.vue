<template>
    <v-card>
        <v-card-title class="align-start">
            <span class="font-weight-semi-bold">Edit User</span>
        </v-card-title>
        <v-card-text>
              <v-form>
                <v-text-field
                v-model="firstname"
                :prepend-inner-icon="icons.mdiAccountOutline"
                label="First Name"
                outlined
                dense
                placeholder="First Name"
                ></v-text-field>

                <v-text-field
                v-model="email"
                :prepend-inner-icon="icons.mdiEmailOutline"
                label="Email"
                type="email"
                outlined
                dense
                placeholder="Email"
                ></v-text-field>

                <v-text-field
                v-model="password"
                :prepend-inner-icon="icons.mdiLockOutline"
                label="Password"
                outlined
                dense
                type="password"
                placeholder="password"
                ></v-text-field>

                <v-text-field
                v-model="password"
                :prepend-inner-icon="icons.mdiLockOutline"
                label="Confirm Password"
                outlined
                dense
                type="Confirm Password"
                placeholder="Confirm Password"
                ></v-text-field>

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
import { mdiAccountOutline, mdiEmailOutline, mdiCellphone, mdiLockOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const firstname = ref('')
    const email = ref('')
    const mobile = ref()
    const password = ref()

    return {
      firstname,
      email,
      mobile,
      password,

      // icons
      icons: {
        mdiAccountOutline,
        mdiEmailOutline,
        mdiCellphone,
        mdiLockOutline,
      },
    }
  },
}
</script>