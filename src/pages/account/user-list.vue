<template>
<div class="bg-white p-3 border-radius-10">
    <div class="m-2">
        <!-- header -->
        <div class="header-main m-0 header-chage border-bottom-2">
            <h3>Users</h3>
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
                    <th>Email</th>
                    <th>Manager</th>
                    <th>Is Admin</th>
                    <th>Remove</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Robert</td>
                        <td>Robert@fastco.com</td>
                        <td>Jeff block</td>
                        <td>YES</td>
                        <td>
                            <i class="far fa-trash-alt text-danger fa-2x"></i>
                        </td>
                    </tr>
                    <tr>
                        <td>Aaftab</td>
                        <td>Aaftab@fastco.com</td>
                        <td>James</td>
                        <td>NO</td>
                        <td>
                            <i class="far fa-trash-alt text-danger fa-2x"></i>
                        </td>
                    </tr>

                    <tr>
                        <td> Jeff Aagam</td>
                        <td>Bob.Porporato@fastco.com</td>
                        <td>Bob Porporato</td>
                        <td>YES</td>
                        <td>
                            <i class="far fa-trash-alt text-danger fa-2x"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <a href="#" data-bs-toggle="modal" data-bs-target="#adduser">
                <i class="fas fa-plus-circle fa-3x plus-icon-color"></i></a>

        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'UserList'
}
</script>
<style scoped></style>