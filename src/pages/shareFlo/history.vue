<template>
 <div class="bg-white p-3 border-radius-10">
    <div class="m-2">
        <!-- header -->
        <div class="header-main m-0 header-chage border-bottom-2">
            <h3>History</h3>
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
                    <th>Action</th>
                    <th>Step </th>
                    <th>Date </th>
                </thead>
                <tbody>
                    <tr>
                        <td>Robert</td>
                        <td>Add flo </td>
                        <td>Step-1</td>
                        <td>03/20/2021</td>
                    </tr>
                    <tr>
                        <td>Aaftab</td>
                        <td>Add flo </td>
                        <td>Step-2</td>
                        <td>03/20/2021</td>
                    </tr>
                    <tr>
                        <td>Bob Porporato</td>
                        <td>Add node </td>
                        <td>Step-6</td>
                        <td>03/20/2021</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        name: 'History'
    }
</script>
<style></style>