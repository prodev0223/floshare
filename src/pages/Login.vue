<template>
    <div class="container-fluid">
        <div class="row">
            <div class="card card-w">
                <div class="card-body">
                    <!-- logo -->
                    <div class="logo-img">
                        <img src="../assets/img/logo.png" alt="logn img" />
                    </div>
                    <div class="login-contant">
                        <!-- User Name -->

                        <input type="email" v-model="email" placeholder="Email" class="form-control" />
                        <!-- Password -->

                        <input type="password" v-model="password" placeholder="Password" class="form-control" />
                        <!-- Buttom for submit & Reset -->
                        <div class="d-flex flex-column">
                            <button type="submit" v-on:click="submit" class="btn btn-greenligth">Login</button>
                            <button type="reset" class="btn btn-greendark" data-bs-toggle="modal" data-bs-target="#forgetpassword">
                                Forgot Password
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- forgot password model  -->
    <!-- Button trigger modal -->
    <!-- Modal -->
    <div class="modal fade" id="forgetpassword" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog model-top">
            <div class="modal-content">
                <div class="modal-header bg-cblue">
                    <h5 class="modal-title">forgot password</h5>
                    <!-- <button type="button" class="btn-close" ></button> -->
                    <a href="" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-circle-fill close-icon"></i
            ></a>
                </div>
                <div class="modal-body">
                    <label class="text-lable">Email</label>
                    <input type="email" placeholder="Email" class="form-control" v-model="email"/>
                    <div class="text-center">
                        <button type="submit" v-on:click="forgetPassword" class="btn btn-greenligth btn-p-l-r">
                            SEND
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState, mapActions, mapMutations } from 'vuex'
    import { validateEmail } from '@/utils'

    export default {
        name: "login",
        data() {
            return {
                email: '',
                password: ''
            }
        },
        computed: {
            ...mapState({authenticated: state => state.auth.authenticated}),
        },
        methods: {
            ...mapActions(["login"]),
            ...mapMutations(['setLoading']),
            async submit() {
                if (!validateEmail(this.email)) {
                    this.$toast.show("Please enter correct email.", {
                        type: "warning",
                        position: "top-right",
                        duration: 3000,
                    });
                    return;
                }
                if (!this.password) {
                    this.$toast.show("Please enter password.", {
                        type: "warning",
                        position: "top-right",
                        duration: 3000,
                    });
                    return;
                }
                this.setLoading(true);
                await this.login({ email: this.email, password: this.password });
                this.setLoading(false);
                if (this.authenticated) {
                    this.$router.push("/admin")
                }
            },
            async forgetPassword() {
                if (!validateEmail(this.email)) {
                    this.$toast.show("Please enter correct email.", {
                        type: "warning",
                        position: "top-right",
                        duration: 3000,
                    });
                    return;
                }
            }
        }
    }
</script>
<style scoped></style>