<template>
<div class="bg-white p-3 border-radius-10">
    <div class="m-2">
        <!-- header -->
        <div class="header-main m-0">
            <img src="@/assets/img/abc-removebg-preview.png" class="" />
            <h5>Flo Name:- <span class="fw-bold">James</span></h5>
        </div>
        <!-- end header -->
        <div class="flo-share-table">
            <table class="table">
                <tr>
                    <td>
                        <h5><a href="#" data-bs-toggle="modal" data-bs-target="#setdate">03/20/2021</a></h5>
                    </td>
                    <td>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#Attach-file" class="attachment-noti"><img src="@/assets/img/attachment.png" />
                        <span class="noti-1">2</span></a>
                    </td>
                    <td>
                        <a href="#">
                            <h5>Board Decision Meeting</h5>
                        </a>
                    </td>
                    <td>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#editmodel">
                            <h5 class="bg-notes">JB,BP, <br />+3</h5>
                        </a>
                    </td>
                    <td>
                        <a href="#" class="sign-noti" data-bs-toggle="modal"
                            data-bs-target="#notes"><i class="fas fa-file-signature fa-2x"></i>
                            <span class="noti">2</span></a>
                    </td>
                    <td>
                        <a href="#">
                            <i class="fas fa-thumbs-up thumbs-up-01 fa-2x"></i></a>
                    </td>
                    <td>
                        <a href="#">
                            <i class="fas fa-thumbs-down thumbs-up-and-down fa-2x"></i></a>
                    </td>
                    <td>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#decline">
                            <i class="far fa-trash-alt text-danger fa-2x"></i>
                        </a>
                    </td>
                </tr>
                <tr style="border-left:4px solid #ED2C2C">
                    <td>
                        <h5><a href="#"> 03/20/2021</a></h5>
                    </td>
                    <td>
                        <a href="#"><img src="@/assets/img/attachment.png" /> </a>
                    </td>
                    <td>
                        <a href="#"><h5>Board Decision Meeting</h5></a>
                    </td>
                    <td>
                        <a href="#"><h5 class="bg-notes">JB,BP, <br />+3</h5></a>
                    </td>
                    <td>
                        <a href="#"><i class="fas fa-file-signature fa-2x"></i></a>
                    </td>
                    <td>
                        <a href="#">
                            <i class="fas fa-thumbs-up thumbs-up-and-down fa-2x"></i>
                        </a>
                    </td>
                    <td>
                        <a href="#">
                            <i class="fas fa-thumbs-down thumbs-down-01 fa-2x"></i>
                        </a>
                    </td>
                    <td>
                        <a href="#">
                            <i class="far fa-trash-alt text-danger fa-2x"></i>
                        </a>
                    </td>
                </tr>
                <tr style="border-left:4px solid #F8FD00">
                    <td>
                        <h5>
                            <a href="#" data-bs-toggle="modal" data-bs-target="#setdate">03/20/2021</a>
                        </h5>
                    </td>
                    <td>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#Attach-file"><img src="@/assets/img/attachment.png" /></a>
                    </td>
                    <td>
                        <a href="#">
                            <h5>Board Decision Meeting</h5>
                        </a>
                    </td>
                    <td>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#editmodel">
                            <h5 class="bg-notes">JB,BP, <br />+3</h5>
                        </a>
                    </td>
                    <td>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#notes"><i
                                class="fas fa-file-signature fa-2x"></i>
                        </a>
                    </td>
                    <td>
                        <a href="#">
                            <i class="fas fa-thumbs-up fa-2x thumbs-up-and-down"></i></a>
                    </td>
                    <td>
                        <a href="#">
                            <i class="fas fa-thumbs-down fa-2x thumbs-up-and-down"></i></a>
                    </td>
                    <td>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#decline">
                            <i class="far fa-trash-alt text-danger fa-2x"></i></a>
                    </td>
                </tr>
            </table>
        </div>
        <div class="d-flex justify-content-between">
            <a href="#" data-bs-toggle="modal" data-bs-target="#steps">
                <i class="fas fa-plus-circle fa-3x plus-icon-color"></i>
            </a>
            <div class="d-flex">
                <router-link to="/admin/share-flo/history"> <i class="fas fa-history fa-2x mt-1"></i></router-link>
                <div class="dropdown ms-4">
                    <div class="user-icon" id="userdropdown" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i class="fas fa-cog"></i>
                    </div>

                    <ul class="dropdown-menu" aria-labelledby="userdropdown">
                        <li>
                            <a class="dropdown-item" href="#" data-bs-toggle="modal"
                                data-bs-target="#update-flo-name">
                                Edit Flo Name</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#" data-bs-toggle="modal"
                                data-bs-target="#Save-New-Template">Save As New Template
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- model  desgin lists -->
<!-- Button trigger modal -->
<!-- Modal -->
<div class="modal fade" id="editmodel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog ">
        <div class="modal-content">
            <div class="modal-header bg-cblue">
                <h5 class="modal-title">users</h5>
                <!-- <button type="button" class="btn-close" ></button> -->
                <a href="" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-circle-fill close-icon"></i></a>
            </div>
            <div class="modal-body">
                <div class="row m-2">
                    <div class="col-md-5">
                        <h5 class="fw-bold">Bob Porporato</h5>
                    </div>
                    <div class="col-md-7">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Flo Access
                            </label>
                            <span class="dropdown ms-3 Pointer-icon">
                                <span id="userdropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fas fa-cog fa-lg"></i>
                                </span>

                                <ul class="dropdown-menu" aria-labelledby="userdropdown">
                                    <li>
                                        <a class="dropdown-item" href="#" data-bs-toggle="modal"
                                            data-bs-target="#update-contact">
                                            Edit Contact</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#"> Delete Contact </a>
                                    </li>
                                </ul>
                            </span>
                        </div>
                    </div>
                    <!-- <a href="#" class="ms-3"><i class="fas fa-cog fa-lg"></i></a>  -->
                    <p class="border-bottom-line pt-0"></p>
                    <div class="col-md-5">
                        <h5 class="fw-bold">Bob Porporato</h5>
                    </div>
                    <div class="col-md-7">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Flo Access
                            </label>
                            <span class="dropdown ms-3 Pointer-icon">
                                <span id="userdropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fas fa-cog fa-lg"></i>
                                </span>

                                <ul class="dropdown-menu" aria-labelledby="userdropdown">
                                    <li>
                                        <a class="dropdown-item" href="#"> Edit Contact</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#"> Delete Contact </a>
                                    </li>
                                </ul>
                            </span>
                        </div>
                    </div>
                    <p class="border-bottom-line pt-0"></p>
                    <div class="col-md-5">
                        <h5 class="fw-bold">Bob Porporato</h5>
                    </div>
                    <div class="col-md-7">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                                checked />
                            <label class="form-check-label" for="flexCheckDefault">
                                Flo Access
                            </label>

                            <span class="dropdown ms-3 Pointer-icon">
                                <span id="userdropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fas fa-cog fa-lg"></i>
                                </span>

                                <ul class="dropdown-menu" aria-labelledby="userdropdown">
                                    <li>
                                        <a class="dropdown-item" href="#"> Edit Contact</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#"> Delete Contact </a>
                                    </li>
                                </ul>
                            </span>
                        </div>
                    </div>
                    <p class="border-bottom-line pt-0"></p>

                    <div class="col-md-12">
                        <div class="p-2" style="background-color: #dfe0dc">
                            <!-- Name -->
                            <label class="text-lable">Name<span class="text-danger">*</span></label>
                            <input type="text" placeholder="Name" class="form-control" />
                            <!-- Email -->
                            <label class="text-lable">Email</label>
                            <input type="email" placeholder="Email" class="form-control" />
                            <!-- Company list -->
                            <select class="form-select" aria-label="Default select example">
                                <option>Company list</option>
                                <option>Abc product</option>
                                <option>Jaxson product</option>
                            </select>
                            <!--   Give Flo Access -->
                            <div class="form-check pt-3">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                                    checked />
                                <label class="form-check-label text-color-access" for="flexCheckDefault">
                                    Give Flo Access
                                </label>
                            </div>

                            <div class="text-center">
                                <button type="submit" class="btn btn-greenligth btn-p-l-r">
                                    ADD
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- end  -->
<!-- model update contact -->
<div class="modal fade" id="update-contact" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog model-top">
        <div class="modal-content">
            <div class="modal-header bg-cblue">
                <h5 class="modal-title">update contact</h5>
                <a href="" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-circle-fill close-icon"></i></a>
            </div>
            <div class="modal-body">
                <div class="row m-2">
                    <div class="col-md-12">
                        <!-- Name -->
                        <label class="text-lable">Name<span class="text-danger">*</span></label>
                        <input type="text" placeholder="Name" class="form-control" />
                        <!-- Email -->
                        <label class="text-lable">Email</label>
                        <input type="email" placeholder="Email" class="form-control" />

                        <div class="row">
                            <div class="col-md-6">
                                <!--   Give Flo Access -->
                                <div class="form-check pt-3">
                                    <input class="form-check-input" type="checkbox" value=""
                                        id="flexCheckDefault" checked />
                                    <label class="form-check-label text-color-access" for="flexCheckDefault">
                                        Give Flo Access
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-check pt-3">
                                    <i class="fas fa-bell fa-lg"></i>
                                    <label class="form-check-label text-color-access" for="flexCheckDefault">
                                        Notifications
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="text-center">
                            <button type="submit" class="btn btn-greenligth btn-p-l-r">
                                ADD
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- end -->

<!-- flo Share Attach file -->
<div class="modal fade" id="Attach-file" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog model-top">
        <div class="modal-content">
            <div class="modal-header bg-cblue">
                <h5 class="modal-title">Attach file</h5>
                <!-- <button type="button" class="btn-close" ></button> -->
                <a href="" data-bs-dismiss="modal" aria-label="Close"><i
                        class="bi bi-x-circle-fill close-icon"></i></a>
            </div>
            <div class="modal-body">
                <div class="file-upload">
                    <div class="image-upload-wrap">
                        <input class="file-upload-input" type="file" accept="image/*" />
                        <div class="drag-text">
                            <i class="fas fa-file-alt"></i>
                            <h3>Click to browse or drag and drop your files</h3>
                        </div>
                    </div>
                    <div class="file-upload-content">
                        <img class="file-upload-image" src="#" alt="your image" />
                    </div>
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-greenligth btn-p-l-r">
                        UPLOAD
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- end  -->
<!--  flo share -notes -->
<div class="modal fade" id="notes" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog model-top" style="max-width: 700px">
        <div class="modal-content">
            <div class="modal-header bg-cblue">
                <h5 class="modal-title">notes</h5>
                <!-- <button type="button" class="btn-close" ></button> -->
                <a href="" data-bs-dismiss="modal" aria-label="Close"><i
                        class="bi bi-x-circle-fill close-icon"></i></a>
            </div>
            <div class="modal-body">
                <div class="text-end">
                    <button type="submit" class="btn btn-greenligth" data-bs-toggle="modal"
                        data-bs-target="#new-note">
                        ADD
                        <i class="fas fa-plus-circle ms-4"></i>
                    </button>
                </div>
                <div class="row m-2">
                    <div class="col-md-6 note">
                        <h5>
                            Example te tentered here. This is where notes will be left.
                        </h5>
                    </div>
                    <div class="col-md-4 note">
                        <h5>10/29/21 5:50 pm</h5>
                        <h5>Jeff Block</h5>
                    </div>
                    <div class="col-md-2 note">
                        <a href="#">
                            <i class="fas fa-minus-circle remove fa-2x text-danger"></i></a>
                    </div>

                    <div class="col-md-6 note">
                        <h5>More notes entered.</h5>
                    </div>
                    <div class="col-md-4 note">
                        <h5>10/29/21 5:50 pm</h5>
                        <h5>Bob Porpoato</h5>
                    </div>
                    <div class="col-md-2 note">
                        <a href="#">
                            <i class="fas fa-minus-circle remove fa-2x text-danger"></i></a>
                    </div>
                    <div class="col-md-6 note">
                        <h5>
                            Example te tentered here. This is where notes will be left.
                        </h5>
                    </div>
                    <div class="col-md-4 note">
                        <h5>10/29/21 5:50 pm</h5>
                        <h5>Product Company</h5>
                    </div>
                    <div class="col-md-2 note">
                        <a href="#">
                            <i class="fas fa-minus-circle remove fa-2x text-danger"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- end -->
<!-- new add note -->
<div class="modal fade" id="new-note" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog model-top">
        <div class="modal-content">
            <div class="modal-header bg-cblue">
                <h5 class="modal-title">add note</h5>
                <!-- <button type="button" class="btn-close" ></button> -->
                <a href="" data-bs-dismiss="modal" aria-label="Close"><i
                        class="bi bi-x-circle-fill close-icon"></i></a>
            </div>
            <div class="modal-body">
                <textarea name="" class="form-control border-d" placeholder="Add Your Note here..." id=""
                    cols="30" rows="5"></textarea>
                <div class="text-center">
                    <button type="submit" class="btn btn-greenligth btn-p-l-r">
                        SAVE
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- end -->

<!--flo Share decline -->
<div class="modal fade" id="decline" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog model-top">
        <div class="modal-content">
            <div class="modal-header bg-cblue">
                <h5 class="modal-title">Why did you decide to end the flo?</h5>
                <!-- <button type="button" class="btn-close" ></button> -->
                <a href="" data-bs-dismiss="modal" aria-label="Close"><i
                        class="bi bi-x-circle-fill close-icon"></i></a>
            </div>
            <div class="modal-body">
                <textarea name="" class="form-control border-d"
                    placeholder="i would like to reschedule the step. " id="" cols="30" rows="5"></textarea>
                <h5>
                    If you were to decide to pick it back up, when will would be a good time to contact you?
                </h5>
                <div class="text-center">
                    <button type="submit" class="btn btn-date">
                        10/26/2021 2:20 PM <i class="fas fa-calendar-alt"></i>
                    </button>
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-greenligth btn-p-l-r">
                        Decline Follow-up
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- end -->

<!-- model update contact -->
<div class="modal fade" id="Save-New-Template" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog model-top">
        <div class="modal-content">
            <div class="modal-header bg-cblue">
                <h5 class="modal-title">save as new Template</h5>
                <!-- <button type="button" class="btn-close" ></button> -->
                <a href="" data-bs-dismiss="modal" aria-label="Close"><i
                        class="bi bi-x-circle-fill close-icon"></i></a>
            </div>
            <div class="modal-body">
                <div class="row m-2">
                    <div class="col-md-12">
                        <!-- Name -->
                        <label class="text-lable">Name<span class="text-danger">*</span></label>
                        <input type="text" placeholder="James" class="form-control" />
                        <div class="row step-bg">
                            <div class="col-md-3">
                                <h3>Step-1</h3>
                            </div>
                            <div class="col-md-7">
                                <input type="text" class="form-control" placeholder="" />
                            </div>
                            <div class="col-md-2">
                                <a href="#">
                                    <i class="fas fa-plus-circle fa-2x plus-icon-color"></i></a>
                            </div>

                            <div class="col-md-3">
                                <h3>Step-2</h3>
                            </div>
                            <div class="col-md-7">
                                <input type="text" name="addmore[]" class="form-control" placeholder="" />
                            </div>
                            <div class="col-md-2">
                                <a href="#">
                                    <i class="fas fa-minus-circle remove fa-2x text-danger ms-1">
                                    </i>
                                </a>
                            </div>
                        </div>

                        <div class="text-center">
                            <button type="submit" class="btn btn-greenligth btn-p-l-r">
                                UPDATE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- end -->

<!-- model update flo namet -->
<div class="modal fade" id="update-flo-name" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog model-top">
        <div class="modal-content">
            <div class="modal-header bg-cblue">
                <h5 class="modal-title">update flo name</h5>
                <!-- <button type="button" class="btn-close" ></button> -->
                <a href="" data-bs-dismiss="modal" aria-label="Close"><i
                        class="bi bi-x-circle-fill close-icon"></i></a>
            </div>
            <div class="modal-body">
                <div class="row m-2">
                    <div class="col-md-12">
                        <!-- Name -->
                        <label class="text-lable">Flo name <span class="text-danger">*</span></label>
                        <input type="text" placeholder="Name" class="form-control" />

                        <div class="text-center">
                            <button type="submit" class="btn btn-greenligth btn-p-l-r">
                                ADD
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- end -->

<!-- model  flo name -->
<div class="modal fade" id="add-flo-name" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog model-top">
        <div class="modal-content">
            <div class="modal-header bg-cblue">
                <h5 class="modal-title">add flo name</h5>
                <!-- <button type="button" class="btn-close" ></button> -->
                <a href="" data-bs-dismiss="modal" aria-label="Close"><i
                        class="bi bi-x-circle-fill close-icon"></i></a>
            </div>
            <div class="modal-body">
                <div class="row m-2">
                    <div class="col-md-12">
                        <!-- Name -->
                        <label class="text-lable">Flo* <span class="text-danger">*</span></label>
                        <input type="text" placeholder="Name" class="form-control" />
                        <label class="text-lable">Widget Pros </label>
                        <select class="form-select" aria-label="Default select example">
                            <option>Widget Pros</option>
                            <option>Loogle</option>
                            <option>Bookface</option>
                        </select>
                        <div class="text-center">
                            <button type="submit" class="btn btn-greenligth btn-p-l-r">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- end -->

<!-- model steps -->
<div class="modal fade" id="steps" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog model-top">
        <div class="modal-content">
            <div class="modal-header bg-cblue">
                <h5 class="modal-title">steps</h5>
                <!-- <button type="button" class="btn-close" ></button> -->
                <a href="" data-bs-dismiss="modal" aria-label="Close"><i
                        class="bi bi-x-circle-fill close-icon"></i></a>
            </div>
            <div class="modal-body">
                <div class="row m-2">
                    <div class="col-md-12">
                        <select class="form-select" aria-label="Default select example">
                            <option>j</option>
                            <option>Jaxson</option>
                            <option>Bookface</option>
                        </select>
                        <div class="mt-3">
                            <p class="border-bottom-line">Bob Porporato</p>
                            <p class="border-bottom-line">John Smith</p>
                            <p class="border-bottom-line">James Jones</p>
                            <p class="border-bottom-line">Betty White</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- end -->
<!-- model setdate -->
<div class="modal fade" id="setdate" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog model-top" style="max-width: 900px; top: 0;">
        <div class="modal-content">
            <div class="modal-header bg-cblue">
                <h5 class="modal-title">set date</h5>
                <!-- <button type="button" class="btn-close" ></button> -->
                <a href="" data-bs-dismiss="modal" aria-label="Close"><i
                        class="bi bi-x-circle-fill close-icon"></i></a>
            </div>
            <div class="modal-body" style="background: #dfe0dc;">
                <div class="row">
                    <div class="col-md-6">
                        <div class="calendar">
                            <div class="calendar-header">
                                <span class="month-picker" id="month-picker">February</span>
                                <div class="year-picker">
                                    <span class="year-change" id="prev-year">
                                        <pre>&lt;</pre>
                                    </span>
                                    <span id="year">2021</span>
                                    <span class="year-change" id="next-year">
                                        <pre>&gt;</pre>
                                    </span>
                                </div>
                            </div>
                            <div class="calendar-body">
                                <div class="calendar-week-day">
                                    <div>Sun</div>
                                    <div>Mon</div>
                                    <div>Tue</div>
                                    <div>Wed</div>
                                    <div>Thu</div>
                                    <div>Fri</div>
                                    <div>Sat</div>
                                </div>
                                <div class="calendar-days"></div>
                            </div>

                            <div class="month-list"></div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card border-radius-10 mb-4 mt-4">
                            <div class="card-body">
                                <label>From</label>
                                <h5 class="text-danger">07:00 AM</h5>
                            </div>
                        </div>
                        <div class="card border-radius-10 mb-4">
                            <div class="card-body">
                                <label>To</label>
                                <h5 class="text-danger">07:00 AM</h5>
                            </div>
                        </div>
                        <div class="form-check pt-3 mb-4">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                                checked="">
                            <label class="form-check-label " for="flexCheckDefault">
                                Send Calendar Invite
                            </label>
                        </div>
                        <button type="submit" class="btn  btn-greenligth w-100">Apply</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        name: 'ShareFlo',
    }
</script>
<style scoped></style>