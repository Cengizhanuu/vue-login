<template>

    <div id="login">
        <h1>Login</h1>
        <div class="form-inputs">
            <label for="email">E-Mail</label>
            <input type="text" id="email" name="email" v-model="input.email" placeholder="E-Mail" />
        </div>
        <div class="form-inputs">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" v-model="input.password" placeholder="Password" />
        </div>
        <div class="validate" v-if="validate.value">
            <p>E-Mail or password error</p>
        </div>
        <button type="button" v-on:click="login()">Login</button>
        <div class="sign-up">
            <router-link to="signup">Sign Up</router-link>
        </div>
        <div class="forgot-password">
            <a href="javascript:;">Forgot Password</a>
        </div>
    </div>
   
</template>

<script>
    import axios from "axios";

    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    email: "",
                    password: ""
                },
                validate: {
                    value: false
                }
            }
        },
        methods: {
            login() {
                if(this.input.email != "" && this.input.password != "") {
                    axios
                    .post("http://31.3.0.185:88/api/login", {
                        email: this.input.email,
                        password: this.input.password
                    })
                    .then(response => (
                        this.$router.push( '/page' )
                    ))
                    .catch(error => {
                        this.validate.value = true;
                    });
                } else {
                    this.validate.value = true;
                }
            }
        }
    }
</script>