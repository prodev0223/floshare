<template>
<div class="container-fluid">
      <div class="row">
        <div class="card card-w mb-5">
          <div class="card-body">
            <div>
              <h2 class="text-center text-color-bluedark">Sign-up</h2>
            </div>
            <div class="Register-contant">
              <!-- User Name -->

              <input
                type="text"
                placeholder="First Name"
                v-model="firstName"
                class="form-control"
              />
              <!-- Last -->

              <input type="text" placeholder="Last Name" v-model="lastName" class="form-control" />
              <!-- Email -->

              <input type="email" placeholder="Email" v-model = "email" class="form-control" />
              <!-- Password -->

              <input
                type="Password"
                placeholder="Password"
                v-model="password"
                class="form-control"
              />
              <!-- Confirm Pasword -->

              <input
                type="Password"
                placeholder="Confirm Pasword"
                v-model="confirmPass"
                class="form-control"
              />
              <!-- Buttom for submit -->
              <div class="d-flex flex-column">
                <button type="submit" class="btn btn-greenligth" v-on:click="submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    import { mapActions, mapState, mapMutations } from 'vuex'
    import { validateEmail, validatePassword } from '@/utils'
    export default {
        name: 'register',
        data() {
            return {
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confirmPass: ''
            }
        },
        computed: {
          ...mapState({
            subscription: state => state.auth.subscription,
          })
        },
        methods: {
          ...mapActions(['signUp']),
          ...mapMutations(['setLoading']),
          async submit() {
            if (!this.firstName || this.firstName.trim() === '') {
              this.$toast.show("Please enter first name.", {
                  type: "warning",
                  position: "top-right",
                  duration: 3000,
              });
              return;
            } else if (!this.lastName || this.lastName.trim() === '') {
              this.$toast.show("Please enter last name.", {
                  type: "warning",
                  position: "top-right",
                  duration: 3000,
              });
              return;
            } else if (!validateEmail(this.email)) {
              this.$toast.show("Please enter correct email.", {
                  type: "warning",
                  position: "top-right",
                  duration: 3000,
              });
              return;
            }
            if (!validatePassword(this.password)) {
              this.$toast.show("Minimum 6 characters, at least one uppercase letter, one number and one special character.", {
                  type: "warning",
                  position: "top-right",
                  duration: 3000,
              });
              return;
            }
            if (this.confirmPass !== this.password) {
              this.$toast.show("please confirm password.", {
                  type: "warning",
                  position: "top-right",
                  duration: 3000,
              });
              return;
            }
            this.setLoading(true);
            await this.signUp({
              name: this.firstName + ' ' + this.lastName,
              email: this.email,
              password: this.password,
              confirmPass: this.confirmPass,
              subscription: this.subscription
            })
            this.setLoading(false);
            this.$router.push('/login');
          }
        }
    }
</script>
<style></style>