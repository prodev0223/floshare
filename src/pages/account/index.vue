<template>
<div class="bg-white p-3 border-radius-10">
    <div class="m-2">
        <div class="row">
            <div class="col-md-6">
                <div class="row">
                    <div class="col-md-3">
                        <h4 class="fw-bold">Name:</h4>
                    </div>
                    <div class="col-md-9">
                        <h4>Bob Porporato</h4>
                    </div>
                    <div class="col-md-3">
                        <h4 class="fw-bold">User Id:</h4>
                    </div>
                    <div class="col-md-9">
                        <h4>1000001</h4>
                    </div>
                    <div class="col-md-3">
                        <h4 class="fw-bold">Email Id:</h4>
                    </div>
                    <div class="col-md-9">
                        <h4>Bob.Porporato@FloShare.com</h4>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="btn-account">
                    <div>
                        <button type="submit" class="btn btn-edit">
                            <i class="fas fa-user-edit"></i>
                        </button>

                        <button type="submit" class="btn btn-logout">
                            <i class="fas fa-sign-out-alt"></i>
                        </button>
                    </div>
                    <button type="submit" class="btn btn-greenligth" data-bs-toggle="modal"
                        data-bs-target="#ChangePassword">
                        Change Password
                    </button>
                </div>
            </div>
            <p class="border-bottom-line"></p>
            <div class="col-md-6">
                <h4 class="fw-bold mb-3">Subscription</h4>
                <h5 class="mb-3">FloShare Trial - 5 Users</h5>
                <h5>Expires on 1 Dec 2021</h5>
                <button type="submit" class="btn btn-logout">
                    Upgrade
                </button>

                <button type="submit" class="btn btn-Trial">
                    Cancel Trial
                </button>
            </div>
            <div class="col-md-6">
                <div class="p-r">
                    <div>
                        <h4 class="fw-bold mb-3">Help And Feedback</h4>
                        <h5 class="mb-4">
                            <a href="#"> <i class="fas fa-info-circle"></i> Need Help ?</a>
                        </h5>
                        <h5 class="mb-4">
                            <a href="#"><i class="fas fa-phone-alt"></i> Call Us</a>
                        </h5>
                        <h5 class="mb-4">
                            <a href="#"><i class="far fa-envelope"></i> Email Us</a>
                        </h5>
                    </div>

                    <router-link to="account/user-list" type="submit"
                        class="btn btn-logout float-end btn-user">
                        Users
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="ChangePassword" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog model-top">
        <div class="modal-content">
            <div class="modal-header bg-cblue">
                <h5 class="modal-title">reset password</h5>
                <!-- <button type="button" class="btn-close" ></button> -->
                <a href="" data-bs-dismiss="modal" aria-label="Close"><i
                        class="bi bi-x-circle-fill close-icon"></i></a>
            </div>
            <div class="modal-body">
                <label class="text-lable">Old Password</label>
                <input type="text" placeholder="old password" class="form-control" />
                <label class="text-lable">New Password</label>
                <input type="text" placeholder="New password" class="form-control" />
                <label class="text-lable">Confirm Password</label>
                <input type="text" placeholder="Confirm password" class="form-control" />
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
<!-- Modal set password-->
<div class="modal fade" id="setpassword" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog model-top">
        <div class="modal-content">
            <div class="modal-header bg-cblue">
                <h5 class="modal-title">set password</h5>
                <!-- <button type="button" class="btn-close" ></button> -->
                <a href="" data-bs-dismiss="modal" aria-label="Close"><i
                        class="bi bi-x-circle-fill close-icon"></i></a>
            </div>
            <div class="modal-body">
                <label class="text-lable">New Password</label>
                <input type="text" placeholder="New password" class="form-control" />
                <label class="text-lable">Confirm Password</label>
                <input type="text" placeholder="Confirm password" class="form-control" />
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
</template>
<script></script>
<style></style>