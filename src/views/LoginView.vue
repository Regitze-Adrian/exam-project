<template>
    <div>
        <div class="loginBox">
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
                        color="light-green-darken-1"
                        @click.prevent="logIn()"
                    >
                        Login
                    </v-btn>
                    <v-btn
                        color="red-darken-1"
                        @click.prevent="logOut()"
                    >
                        LogOut
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </div>
    </div>
</template>

<script setup >

import useUsers from '@/modules/useUsers'

const { logIn, logOut, password, email } = useUsers()

</script>

<style lang="scss">
    
.v-row {
    justify-content: center;
    margin: 170px;
}

</style>