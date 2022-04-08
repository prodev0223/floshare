<template lang="">
  <div>
    <div v-if="isLoading" style="position: fixed; width: 100%; text-align: center; padding-top: 45vh; height: 100vh; background-color: #8e98a157; z-index: 99999">
       <img src="@/assets/img/loading.svg" alt="" id="loading" width="100">    
    </div>
    <TheHeader />
    <div
        class="modal fade"
        id="success"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog model-top">
          <div class="modal-content">
            <div class="modal-header bg-cblue">
              <h5 class="modal-title">success</h5>
              <!-- <button type="button" class="btn-close" ></button> -->
              <a href="" data-bs-dismiss="modal" aria-label="Close"
                ><i class="bi bi-x-circle-fill close-icon"></i
              ></a>
            </div>
            <div class="modal-body text-center m-auto">
              <i class="fas fa-check-circle fa-6x mt-3 icon-color"></i>

              <h4 class="text-succes mt-3">{{successMessage}}</h4>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="error"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog model-top">
          <div class="modal-content">
            <div class="modal-header bg-cblue">
              <h5 class="modal-title">warning</h5>
              <!-- <button type="button" class="btn-close" ></button> -->
              <a href="" data-bs-dismiss="modal" aria-label="Close"
                ><i class="bi bi-x-circle-fill close-icon"></i
              ></a>
            </div>
            <div class="modal-body text-center m-auto">
              <img src="@/assets/img/error.svg" alt="" />

              <h4 class="text-danger text-uppercase mt-3">{{errorMessage}}</h4>
            </div>
          </div>
        </div>
      </div>

    <section>
      <div class="mt-4">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8">
              <div class="bg-main">
                <div class="main-contant">
                  <h2>Get In Touch</h2>
                  <p class="text-color-contact">
                    feel free to drop us a line below!
                  </p>
                  <input
                    type="text"
                    class="form-control index-form-contact"
                    placeholder="Name *"
                    v-model="firstname"
                  />
                  <input
                    type="email"
                    class="form-control index-form-contact"
                    placeholder="Email *"
                    v-model="email"
                  />
                  <textarea
                    class="form-control mt-4"
                    name="type your massge"
                    placeholder="Type Your Massge *"
                    id=""
                    cols="30"
                    rows="5"
                    v-model="message"
                  ></textarea>

                  <button
                    type="submit"
                    class="btn btn-greenligth btn-p-l-r-2"
                    v-on:click="send"
                  >
                    Send
                  </button>
                </div>
              </div>
              <div class="bg-contact">
                <div class="card-body">
                  <h2 class="text-center text-white fw-bold">Contact Us</h2>

                  <h4 class="text-white">
                    <i class="fas fa-map-marker-alt"></i>
                    23 avenvde paris 75012 paris
                  </h4>
                  <h4 class="text-white">
                    <i class="fas fa-mobile-alt"></i>
                    +144 266 300 32
                  </h4>
                  <h4 class="text-white">
                    <i class="far fa-envelope"></i>
                    flo@share.com
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid mt-5">
          <div class="row m-contact">
            <div class="col-md-6">
              <div class="card border-radius-10">
                <div class="card-body text-center">
                  <i class="fas fa-phone-alt phone-icon"></i>
                  <h3 class="fw-bold">Talk to Sales</h3>
                  <p>
                    Interested in HubSpot's marketing software? Just pick up the
                    phone to chat with a member of our sales team.
                  </p>
                  <h6>+1 877 929 0687</h6>
                  <button type="submit" class="btn btn-greenligth btn-p-l-r-2">
                    View All Global Numbers
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card border-radius-10">
                <div class="card-body text-center">
                  <img src="@/assets/img/support.svg" alt="" width="70" />
                  <h3 class="fw-bold">Contact Customer Support</h3>
                  <p>
                    Sometimes you need a little help from your friends. Ora
                    HubSpot support rep. Don't worry... we're here for you.
                  </p>
                  <h6>+1 877 929 0687</h6>
                  <router-link type="submit" to="/admin/contacts" class="btn btn-greenligth btn-p-l-r-2">
                    Contact Support
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from "@/components/layout/TheHeader";
import TheFooter from "@/components/layout/TheFooter";
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@'"]+(\.[^<>()[\]\\.,;:\s@'"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default {
  name: "ContactUs",
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      firstname: "",
      email: "",
      message: "",
      isLoading: false,
      errorMessage: "",
      successMessage: "",
    };
  },
  methods: {
    send: function () {
      if (!this.firstname || this.firstname.trim() === '') {
        this.$toast.show("Please enter name.", {
          type: "error",
          position: "top-right",
          duration: 3000,
        });
        return;
      }
      if (!this.email) {
        this.$toast.show("Please enter email.", {
          type: "error",
          position: "top-right",
          duration: 3000,
        });
        return;
      } else if (!validateEmail(this.email)) {
        this.$toast.show("email must be an email address.", {
          type: "warning",
          position: "top-right",
          duration: 3000,
        });
        return;
      }
      if (!this.message || this.message.trim() === '') {
        this.$toast.show("Please enter message.", {
          type: "warning",
          position: "top-right",
          duration: 3000,
        });
        return;
      }

      const contact = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.firstname,
          email: this.email,
          message: this.message,
        }),
      };
      this.isLoading = true
      fetch(
        "https://floshare.microlent.com/contact-us/create-or-update",
        contact
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.statusCode === 200) {
            this.isLoading = false
            this.successMessage = data.message;
            window.$('#requestdemo').modal('hide');
            window.$('#success').modal('show');
            this.firstname = ""
            this.email = ""
            this.message = ""
            return;
          }
          if (data.statusCode === 400) {
            this.isLoading = false
            this.errorMessage = data.message
            console.log(data);
            window.$('#requestdemo').modal('hide');
            window.$('#error').modal('show');
            this.firstname = ""
            this.email = ""
            this.message = ""
            return;
          }
        });
    },
  },
};
</script>
<style lang=""></style>
