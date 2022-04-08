<template>
<div class="bg-white p-3 border-radius-10">
    <div class="m-2">
        <!-- header -->
        <div class="header-main m-0 header-chage border-bottom-2">
            <h3>ADD-TEMPLATE</h3>
        </div>
        <!-- end header -->
        <div class="row pt-3 textbox-bottom">
            <div class="col-md-4">
                <h3>Template Name</h3>
            </div>
            <div class="col-md-4">
                <input type="text" v-model="templateName" class="form-control" placeholder="" />
            </div>
            <div class="offset-4"></div>
            <!-- steps add -->
            <div class="col-md-4">
                <h3>Step-1</h3>
            </div>
            <div class="col-md-4">
                <input type="text" v-model="step1" class="form-control" placeholder="" />
            </div>
            <div class="col-md-4">
                <a href="#">
                    <i class="fas fa-plus-circle fa-2x plus-icon-color"></i></a>
            </div>



            <div class="col-md-4">
                <h3>Step-2</h3>
            </div>
            <div class="col-md-4">
                <input type="text" v-model="step2" name="addmore[]" class="form-control" placeholder="" />
            </div>
            <div class="col-md-4">

                <a href="#">
                    <i class="fas fa-minus-circle remove fa-2x text-danger ms-1"></i>
                </a>

            </div>

            <div class="col-md-4">
                <h3>Step-3</h3>
            </div>
            <div class="col-md-4">
                <input type="text" v-model="step3" name="addmore[]" class="form-control" placeholder="" />
            </div>
            <div class="col-md-4">

                <a href="#">
                    <i class="fas fa-minus-circle remove fa-2x text-danger ms-1"></i></a>

            </div>
        </div>
        <!-- save -->
        <div class="text-center">
            <button type="submit" v-on:click="save" class="btn btn-greenligth btn-p-l-r">
                SAVE
            </button>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        name: 'AddTemplate',
        data() {
            return {

            }
        }
    }
</script>
<style></style>