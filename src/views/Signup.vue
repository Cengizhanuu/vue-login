<template>
    <div id="sign-up">
        <h1>Sign Up</h1>
        <div class="form-inputs">
            <label for="username">Name</label>
            <input type="text" id="name" name="name" v-model="input.name" placeholder="Name" />
        </div>
        <div class="form-inputs">
            <label for="password">Last Name</label>
            <input type="text" id="lastname" name="lastname" v-model="input.lastname" placeholder="Last Name" />
        </div>
        <div class="form-inputs">
            <label for="username">E-Mail</label>
            <input type="text" id="email" name="email" v-model="input.email" placeholder="E-Mail" />
        </div>
        <div class="form-inputs">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" v-model="input.password" placeholder="Password" />
        </div>
        <div class="form-inputs">
            <label for="password">Password Confirmation</label>
            <input type="password" id="password-confirmation" name="password-confirmation" v-model="input.confirmation" placeholder="Password Confirmation" />
        </div>
        <div class="validate" v-if="validate.inputs">
            <p>Inputs error</p>
        </div>
        <div class="validate" v-if="validate.password">
            <p>Password confirmation or 8 characters error</p>
        </div>
        <button type="button" v-on:click="signup()">Signup</button>
    </div>
   
</template>

<script>
    import axios from "axios";

    export default {
        name: 'Signup',
        data() {
            return {
                input: {
                    name: "",
                    lastname: "",
                    email: "",
                    password: "",
                    confirmation: "",
                },
                validate: {
                    password: false,
                    inputs: false
                }
            }
        },
        methods: {
            signup() {
                if(this.input.name != "" && this.input.lastname != "" && this.input.email != "" && this.input.password != "" && this.input.confirmation != "") {
                    
                    if(this.input.password == this.input.confirmation && this.input.password.length >= 8){
                        axios
                        .post("http://31.3.0.185:88/api/register", {
                            name: this.input.name,
                            last_name: this.input.lastname,
                            email: this.input.email,
                            password: this.input.password,
                            password_confirmation: this.input.confirmation,
                        })
                        .then(response => (
                            this.$router.push( '/login' )
                        ))
                        .catch(error => {
                            this.validate.inputs = true;
                        });    
                    } else {
                        this.validate.password = true;
                    }
                    
                } else {
                    this.validate.inputs = true;
                }
            }
        }
    }
</script>