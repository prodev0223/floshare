<template>
<div class="bg-white p-3 border-radius-10">
    <div class="m-2">
        <!-- header -->
        <div class="header-main m-0 header-chage border-bottom-2">
            <div>
                <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);"
                    aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Robert</a></li>
                        <li class="breadcrumb-item active" aria-current="page"> Contacts</li>


                    </ol>
                </nav>
            </div>
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
                    <th>Added By</th>
                    <th>Email</th>
                    <th>Contact Id </th>
                </thead>
                <tbody>
                    <tr>
                        <td>Robert</td>
                        <td> Jeff Block</td>
                        <td>Robert@fastco.com</td>
                        <td>01</td>
                    </tr>
                    <tr>
                        <td>Aaftab</td>
                        <td>James</td>
                        <td>Aaftab@fastco.com</td>
                        <td>03</td>
                    </tr>
                    <tr>
                        <td>Bob Porporato</td>
                        <td> Jeff Aagam</td>
                        <td>Bob.Porporato@fastco.com</td>
                        <td>06</td>
                    </tr>
                </tbody>
            </table>

        </div>
        <!-- new button -->
        <div>
            <a href="#" data-bs-toggle="modal" data-bs-target="#forgetpassword">
                <i class="fas fa-plus-circle fa-3x plus-icon-color"></i></a>
        </div>
        <!--New Company  Modal -->
        <div class="modal fade" id="forgetpassword" data-bs-backdrop="static"
            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
            aria-hidden="true">
            <div class="modal-dialog model-top">
                <div class="modal-content">
                    <div class="modal-header bg-cblue">
                        <h5 class="modal-title">NEW company</h5>
                        <!-- <button type="button" class="btn-close" ></button> -->
                        <a href="" data-bs-dismiss="modal" aria-label="Close"><i
                                class="bi bi-x-circle-fill close-icon"></i></a>
                    </div>
                    <div class="modal-body">
                        <label class="text-lable">Name</label>
                        <input type="text" placeholder="Name" class="form-control" />
                        <div class="file-upload"> <label class="text-lable">Image</label>
                            <div class="image-upload-wrap">

                                <input class="file-upload-input" type="file" accept="image/*" />
                                <div class="drag-text">
                                    <i class="far fa-image"></i>
                                    <h3>
                                        Click to browse or drag and drop your logo

                                    </h3>
                                </div>
                            </div>
                            <div class="file-upload-content">
                                <img class="file-upload-image" src="#" alt="your image" />

                            </div>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-greenligth btn-p-l-r">
                                SAVE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end  -->
    </div>
</div>
</template>
<script>
    export default {
        name: 'CompaniesContact',
    }
</script>
<style></style>