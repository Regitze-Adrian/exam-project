<template>
    <div>
        <v-row>
            <v-col md="6" xs="12" offset-md="3">
                <h1>Administrator Login</h1>

                <div class="info">
                    <v-text-field 
                        v-model="email"
                        label="Email"
                        required
                    >
                    </v-text-field>
                    <v-text-field 
                        v-model="password"
                        label="Password"
                        required
                    >
                    </v-text-field>
                    <v-btn
                        color="primary"
                        @click.prevent="logIn()"
                    >
                        Login
                    </v-btn>
                    <v-btn
                        color="error"
                        @click.prevent="logOut()"
                    >
                        LogOut
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script setup >

import useUsers from '@/modules/useUsers'

const { logIn, logOut, password, email } = useUsers()

</script>

<style lang="scss">
    
</style>