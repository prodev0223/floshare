<template>
    <div class="bg-white p-3 border-radius-10">
        <div class="m-2">
            <!-- header -->
            <div class="header-main m-0 header-chage border-bottom-2">
                <h3>TEMPLATES</h3>
                <div class="row">
                    <div class="input-group mb-3 col-md-4">
                        <input type="text" class="form-control form-b-b" placeholder="" />
                        <span class="input-group-text">
                            <i class="bi bi-search"></i>
                        </span>
                    </div>
                </div>
            </div>
            <!-- end header -->
            <div class="scroll-bar">
                <table class="table">
                    <thead>
                        <th>Name</th>
                        <th>Created By</th>

                        <th>Action</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Acme Products</td>
                            <td>Robert</td>
                            <td>
                                <a href=""><i class="fas fa-edit fa-2x"></i></a>
                                <a href=""><i class="far fa-trash-alt text-danger fa-2x ms-2"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>Aaftab</td>
                            <td>loogle</td>
                            <td>
                                <a href=""><i class="fas fa-edit fa-2x"></i></a>
                                <a href=""><i class="far fa-trash-alt text-danger fa-2x ms-2"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td>Acme Products</td>
                            <td>Robert</td>
                            <td>
                                <a href=""><i class="fas fa-edit fa-2x"></i></a>
                                <a href=""><i class="far fa-trash-alt text-danger fa-2x ms-2"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- new button -->
            <div>
                <router-link to="/admin/templates/add">
                    <i class="fas fa-plus-circle fa-3x plus-icon-color"></i>
                </router-link>
            </div>

        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
    export default {
        name: 'Templates',
        computed: {
            ...mapState(['templates'])
        },
    }
</script>
<style></style>