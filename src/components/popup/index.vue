<template>
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
        <a href="#" @click="onClose">
            <i class="bi bi-x-circle-fill close-icon"></i>
        </a>
        </div>
        <div class="modal-body text-center m-auto">
        <i class="fas fa-check-circle fa-6x mt-3 icon-color"></i>
        <h4 class="text-succes mt-3">{{message}}</h4>
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
               <a href="#" @click="onClose"
               ><i class="bi bi-x-circle-fill close-icon"></i
               ></a>
          </div>
          <div class="modal-body text-center m-auto">
               <img src="@/assets/img/error.svg" alt="" />

               <h4 class="text-danger text-uppercase mt-3">{{message}}</h4>
          </div>
          </div>
     </div>
</div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
    export default {
        name: 'Popup',
        computed: {
             ...mapState({
                 successPopup: state => state.popup.successPopup,
                 errorPopup: state => state.popup.errorPopup,
                 message: state => state.popup.message
             })
        },
        methods: {
            ...mapMutations(['setSuccessPopup', 'setErrorPopup']),
            onClose() {
                this.setSuccessPopup({ bool: false, message: '' });
                window.$('#success').modal('hide');
                window.$('#error').modal('hide');
                this.setErrorPopup({ bool: false, message: '' })
            }
        },
        watch: {
            successPopup() {
                window.$('#success').modal('show');
            },
            errorPopup() {
                window.$('#error').modal('show');
            }
        }
        
    }
</script>
<style></style>