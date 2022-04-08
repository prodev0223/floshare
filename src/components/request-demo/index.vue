<template>
  <div
    class="modal fade"
    id="requestdemo"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-cblue">
          <h5 class="modal-title">Request Demo</h5>
          <!-- <button type="button" class="btn-close" ></button> -->
          <a href="#" @click="handleClick"
            ><i class="bi bi-x-circle-fill close-icon"></i
          ></a>
        </div>
        <div class="modal-body">
          <label class="text-lable"
            >Name <span style="color: red">*</span>
          </label>
          <input
            type="text"
            v-model="name"
            placeholder="Name"
            class="form-control"
          />
          <label class="text-lable"
            >Email <span style="color: red">*</span></label
          >
          <input
            type="email"
            v-model="email"
            placeholder="Email"
            class="form-control"
          />
          <label class="text-lable"
            >Phone Number <span style="color: red">*</span></label
          >
          <input
            type="text"
            placeholder="Phone Number"
            v-model="mobileNumber"
            class="form-control"
          />
          <label class="text-lable"
            >Number Of User/s <span style="color: red">*</span></label
          >
          <input
            type="number"
            placeholder="Number Of User/s"
            class="form-control"
            v-model="noOfUsers"
          />
          <label class="text-lable"
            >Description <span style="color: red">*</span></label
          >
          <textarea
            name=""
            class="form-control border-d"
            placeholder="Description"
            id=""
            cols="30"
            rows="3"
            v-model="description"
          ></textarea>
          <div class="text-center">
            <button
              type="submit"
              class="btn btn-greenligth btn-p-l-r"
              v-on:click="send"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import { validatePhoneNumber, validateEmail, validateUserNum } from '@/utils'
export default {
  name: "RequestDemo",
  data() {
    return {
        name: "",
        email: "",
        mobileNumber: "",
        noOfUsers: "",
        description: "",
    };
  },
  computed: {
    ...mapState({
      popupOpen: state => state.request.popupOpen,
    })
  },
  methods: {
    ...mapMutations(['setLoading', 'offModal']),
    ...mapActions(['saveRequests']),
     toast(message) {
          this.$toast.show(message, {
               type: "warning",
               position: "top-right",
               duration: 3000,
          });
     },
     handleClick() {
          this.offModal();
          window.$("#requestdemo").modal('hide');
     },
     async send() {
          if (this.name.trim() === '') {
               this.toast("Please enter your name.");
               return;
          }
          if (!this.email) {
               this.toast("please enter your email.");
               return;
          } else if (!validateEmail(this.email)) {
               this.toast("email must be an email address.");
               return;
          }
          if (!this.mobileNumber) {
               this.toast("Please enter phone number.");
               return;
          } else if (!validatePhoneNumber(this.mobileNumber)) {
               this.toast("phone number should be accept only numbers");
               return;
          }
          if (!this.description || this.description.trim() === '') {
               this.toast("Please enter description.");
               return;
          }
          if (!this.noOfUsers || !validateUserNum(this.noOfUsers)) {
               this.toast("Please enter no Of Users.");
               return;
          }
          await this.saveRequests({
               name: this.name,
               email: this.email,
               mobileNumber: this.mobileNumber,
               noOfUsers: this.noOfUsers,
               description: this.description,
          })
          window.$('#requestdemo').modal('hide');
          this.name = "";
          this.email = "";
          this.mobileNumber = "";
          this.noOfUsers = "";
          this.description = "";
    },
  },
  watch: {
    popupOpen(value) {
      if (value)
        window.$("#requestdemo").modal('show');
    }
  }
};
</script>
<style></style>