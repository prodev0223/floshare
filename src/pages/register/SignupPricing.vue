<template>
    <div class="container-fluid">
        <div class="container p-4">
            <div class="row" style="align-items: center">
                <h1 class="Sign-up-pricing">Sign-up pricing</h1>
                <div class="col-lg-4 col-md-12 mb-4">
                    <div class="Sign-up-card shadow-lg min-h-signup">
                        <div class="Sign-up-card-body c-p">
                            <div class="text-center p-3 border-bottom-2">
                                <h5 class="Sign-up-card-title">Single User</h5>
                                <span class="d-flex">
                                <span class="dolr-color"> $</span>
                                <span class="pr-mo"> <span class="h2">34</span>/month</span>
                                </span>
                            </div>

                            <ul class="list-group list-group-flush pt-5 pb-5">
                                <li class="list-group-item border-0">
                                    <img src="@/assets/img/cheack-icon.svg" /> Single User
                                </li>
                                <li class="list-group-item border-0">
                                    <img src="@/assets/img/cheack-icon.svg" /> 15 day trial
                                </li>
                            </ul>
                            <div class="Sign-up-card-body text-center">
                                <button v-on:click="thirtyFour" class="btn btn-greenligth btn-free">
                                    Free trial
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 mb-4">
                    <div class="Sign-up-card shadow-lg min-h-signup-2">
                        <div class="Sign-up-card-body c-p">
                            <div class="text-center p-3 border-bottom-2">
                                <h5 class="Sign-up-card-title">5 Users</h5>
                                <span class="d-flex">
                    <span class="dolr-color"> $</span>
                                <span class="pr-mo"> <span class="h2">75</span>/month</span>
                                </span>
                            </div>

                            <ul class="list-group list-group-flush pt-5 pb-5">
                                <li class="list-group-item border-0">
                                    <img src="@/assets/img/cheack-icon.svg" /> 5 Users
                                </li>
                                <li class="list-group-item border-0">
                                    <img src="@/assets/img/cheack-icon.svg" /> 100 day
                                </li>
                            </ul>
                            <div class="Sign-up-card-body text-center">
                                <button v-on:click="seventyFive" class="btn btn-greenligth btn-free">
                                    Free trial
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 mb-4">
                    <div class="Sign-up-card shadow-lg min-h-signup">
                        <div class="Sign-up-card-body c-p">
                            <div class="text-center p-3 border-bottom-2">
                                <h5 class="Sign-up-card-title">More Than 5 Users</h5>
                                <span class="d-flex">
                    <span class="dolr-color"> $</span>
                                <span class="pr-mo">
                      <span class="h2">300</span>/month</span>
                                </span>
                            </div>

                            <ul class="list-group list-group-flush pt-4 pb-4">
                                <li class="list-group-item border-0">
                                    <img src="@/assets/img/cheack-icon.svg" /> Unlimited users
                                </li>
                                <li class="list-group-item border-0">
                                    <img src="@/assets/img/cheack-icon.svg" /> 365 day
                                </li>
                            </ul>
                            <div class="Sign-up-card-body text-center">
                                <button class="btn btn-greenligth btn-free" v-on:click="threeHundred">
                                    Request Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    name: 'SignupPricing',
    computed: {

    },
    methods: {
        ...mapMutations(['subscription']),
        thirtyFour() {
            const subscription = {
                userId: 0,
                name: 'Single User',
                price: 34,
                duration: 15,
                maxUsers: 1,
                type: 'free'
            }
            this.subscription(subscription);
            this.$router.push("/register")

        },
        seventyFive() {
            const subscription = {
                userId: 0,
                name: '5 Users',
                price: 75,
                duration: 15,
                maxUsers: 1,
                type: 'free'
            }
            this.subscription(subscription);
            this.$router.push("/register")
        },
        threeHundred() {
            const subscription = {
                userId: 0,
                name: 'More Than 5 Users',
                price: 300,
                duration: 15,
                maxUsers: -1,
                type: 'request'
            }
            this.subscription(subscription);
            this.$router.push("/register")
        }
    }
}
</script>
<style scoped></style>