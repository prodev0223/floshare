<template>
    <div class="bg-white p-3 border-radius-10">
        <div class="m-2">
            <!-- header -->
            <div class="header-main m-0 header-chage border-bottom-2">
                <h3>Companies</h3>
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
                <table class="table text-center">
                    <thead>
                        <th>Name</th>
                        <th>Created By</th>
                        <th>Date</th>
                        <th>Flo Count</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Robert</td>
                            <td>Abc product</td>
                            <td>03/20/2021</td>
                            <td>03</td>
                            <td>
                                <router-link to="/admin/companies/flo/1"><img src="@/assets/img/flo-icon.svg" width="25" alt="flo" /></router-link>
                                <router-link to="/admin/companies/contact/2"><img src="@/assets/img/clicks-icon.svg" class="ms-4" width="25" alt="flo" /></router-link>
                            </td>
                        </tr>
                        <tr>
                            <td>Aaftab</td>
                            <td>loogle</td>
                            <td>06/20/2021</td>
                            <td>03</td>
                            <td>
                                <router-link to="/admin/companies/flo/1"><img src="@/assets/img/flo-icon.svg" width="25" alt="flo" /></router-link>
                                <router-link to="/admin/companies/contact/2"><img src="@/assets/img/clicks-icon.svg" class="ms-4" width="25" alt="flo" /></router-link>
                            </td>
                        </tr>

                        <tr>
                            <td>Bob Porporato</td>
                            <td>tweeter</td>
                            <td>03/20/2021</td>
                            <td>03</td>
                            <td>
                                <router-link to="/admin/companies/flo/1"><img src="@/assets/img/flo-icon.svg" width="25" alt="flo" /></router-link>
                                <router-link to="/admin/companies/contact/2"><img src="@/assets/img/clicks-icon.svg" class="ms-4" width="25" alt="flo" /></router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- new button -->
            <div>
                <a href="#" data-bs-toggle="modal" data-bs-target="#newCompany">
                    <i class="fas fa-plus-circle fa-3x plus-icon-color"></i>sdfsdf
                </a>
            </div>
            <!--New Company  Modal -->
            <div
                class="modal fade"
                id="newCompany"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
            <div class="modal-dialog model-top">
                <div class="modal-content">
                    <div class="modal-header bg-cblue">
                        <h5 class="modal-title">NEW company</h5>
                        <!-- <button type="button" class="btn-close" ></button> -->
                        <a href="" data-bs-dismiss="modal" aria-label="Close"
                        ><i class="bi bi-x-circle-fill close-icon"></i
                        >dfsf</a>
                    </div>
                    <div class="modal-body">
                        <label class="text-lable">Name</label>
                        <input
                        type="text"
                        v-model="name"
                        placeholder="Name"
                        class="form-control"
                        />
                        <div class="file-upload"> 
                            <label class="text-lable">Image</label>
                            <div class="image-upload-wrap">
                                <input
                                    class="file-upload-input"
                                    type="file"
                                    accept="image/*"
                                    @change="handleFiles"
                                    multiple
                                />
                                <div class="file-upload-content" v-if="image">
                                    <img class="file-upload-image" v-bind:src="[previewImg]" alt="your image" />
                                </div>
                                <div class="drag-text" v-if="!image">
                                    <i class="far fa-image"></i>
                                    <h3>
                                        Click to browse or drag and drop your logo
                                    </h3>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="text-center">
                        <button type="submit" @click="submit" class="btn btn-greenligth btn-p-l-r">
                            SAVE
                        </button>
                    </div>
                </div>
            </div>      
        </div>
    </div>
</div>
</template>
<script>
    import { mapActions } from 'vuex';
    export default {
        name: 'Companies',
        data() {
            return {
                name: '',
                image: '',
                previewImg: ''
            }
        },
        methods: {
            ...mapActions({createAndUpdate: 'company/createAndUpdate'}),
            handleFiles($event) {
                const file = $event.target.files[0];
                if (file && file.type.substr(0, 5) === "image") {
                    this.image = file
                    const reader = new FileReader();
                    reader.readAsDataURL(file)
                    reader.onload = () => {
                        this.previewImg = reader.result
                    }
                    
                }
            },
            async submit() {
                const formdata = new FormData();
                formdata.append('data', {
                    id: 0,
                    companyName: this.name,
                    userId: 0
                })
                formdata.append('companyLogo', this.image)
                await this.createAndUpdate(formdata);
            }
        }
    }
</script>
<style scoped></style>