<template>
<div class="bg-white p-3 border-radius-10">
    <div class="m-2">
        <!-- header -->
        <div class="header-main m-0 header-chage border-bottom-2">
            <div>
                <nav style="
                    --bs-breadcrumb-divider: url(
                        &#34;data:image/svg + xml,
                        %3Csvgxmlns='http://www.w3.org/2000/svg'width='8'height='8'%3E%3Cpathd='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z'fill='currentColor'/%3E%3C/svg%3E&#34;
                    );
                    " aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Robert</a></li>
                        <li class="breadcrumb-item active" aria-current="page">
                            Flo
                        </li>
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
            <table class="table">
                <thead>
                    <th>Name</th>
                    <th>Created By</th>
                    <th>Date</th>

                </thead>
                <tbody>
                    <tr>
                        <td>Robert</td>
                        <td>Abc product</td>
                        <td>03/20/2021</td>

                    </tr>
                    <tr>
                        <td>Aaftab</td>
                        <td>loogle</td>
                        <td>06/20/2021</td>

                    </tr>
                    <tr>
                        <td>Bob Porporato</td>
                        <td>tweeter</td>
                        <td>03/20/2021</td>

                    </tr>
                </tbody>
            </table>
            <div>
                <a href="#">
                    <i class="fas fa-plus-circle fa-3x plus-icon-color"></i></a>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        name: 'FloCount'
    }
</script>
<style></style>