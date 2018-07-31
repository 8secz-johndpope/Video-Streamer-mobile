<template>
    <FlexboxLayout class="page">
        <StackLayout class="form">

            <StackLayout class="input-field login_input">
                <TextField hint="Enter email address" keyboardType="email" class="input_field"  v-model="login_form.email"></TextField>
            </StackLayout>

            <StackLayout class="input-field login_input">
                <TextField :secure="true" hint="Enter Password" class="input_field" v-model="login_form.password" ></TextField>
            </StackLayout>

            <StackLayout>
                <Button text="Login" @tap="login()" class="btn btn-primary "  ></Button>
            </StackLayout>

        </StackLayout>
    </FlexboxLayout>

</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        data(){
            return {
                login_form: {},
                useUrl: 'https://tuts-master.herokuapp.com/api/users'

            }
        },
        computed: {
            ...mapGetters({
                users: 'users'
            })
        },
        methods: {
            login(){
                let vm = this;
                if(users.length > 0) {
                    if(login_form.email && login_form.password != '') {

                    }
                }

                this.$http.post('https://tuts-master.herokuapp.com/api/login', vm.ogin_form).then(response => {
                    let login_state = response.data;
                    this.$store.commit('LOGIN_STATE', login_state);
                }, response => {
                    console.log(response, 'response failed');
                });
            },
            getUsers(){
                this.$http.get(useUrl).then(response => {
                    let users = response.data;
                    this.$store.commit('SAVE_USERS', users);

                }, response => {
                    console.log(response, 'response failed');
                });
            }

        },
        mounted(){
            this.getUsers()
        }

    };
</script>

