<template lang="">
  <div>
    <nav
      class="offcanvas offcanvas-start show"
      tabindex="-1"
      id="offcanvas"
      data-bs-keyboard="false"
      data-bs-backdrop="true"
      data-bs-scroll="true"
    >
      <div class="p-2 mt-3 text-center">
        <router-link to="/" class="offcanvas-title">
          <img src="@/assets/img/logo.png" alt="logo" width="110" />
        </router-link>
      </div>
      <div class="offcanvas-body px-0">
        <ul class="list-unstyled ps-0">
          <li class="mb-3">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control form-b-b"
                placeholder="www.floshare"
              />
              <span class="input-group-text">
                <i class="bi bi-search"></i>
              </span>
            </div>
          </li>
          <li v-bind:class="[path == '/admin/jeff-block' ? 'active-li': '', 'mt-5 mb-3']">
            <router-link to="/admin/jeff-block">JEFF BLOCK</router-link>
          </li>
          <li v-bind:class="[path == '/admin/share-flo' ? 'active-li': '', 'mb-3']">
            <a href="#" data-bs-toggle="modal" data-bs-target="#add-flo-name">New flo</a>
          </li>
          <li v-bind:class="[path == '/admin/dashboard' ? 'active-li': '', 'mb-3']">
            <router-link to="/admin/dashboard">Dashboard</router-link>
          </li>
          <li v-bind:class="[path == '/admin/templates' ? 'active-li': '', 'mb-3']">
            <router-link to="/admin/templates">Templates</router-link>
          </li>
          <li v-bind:class="[path == '/admin/companies' ? 'active-li': '', 'mb-3']">
            <router-link to="/admin/companies">companies</router-link>
          </li>
          <li v-bind:class="[path == '/admin/contacts' ? 'active-li': '', 'mb-3']">
            <router-link to="/admin/contacts">contacts</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <main class="container-fluid">
      <div class="row">
        <div class="col p-4">
          <!-- toggler -->
          <button
            id="sidebarCollapse"
            class="float-end"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas"
            role="button"
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <!-- main -->
        <div class="container row" style="padding-right: 0">
          <div class="header-main">
            <img src="@/assets/img/abc-removebg-preview.png" class="" />

            <div class="dropdown">
              <div
                class="user-icon"
                id="userdropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa fa-user-circle"></i>
              </div>

              <ul class="dropdown-menu" aria-labelledby="userdropdown">
                <li>
                  <router-link class="dropdown-item" to="/admin/account">
                    <img src="@/assets/img/account.svg" alt="Account" />
                    Account
                  </router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/admin/contacts"
                    ><img
                      src="@/assets/img/support.svg"
                      alt="contact support"
                    />
                    Contact Support</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/"
                    ><img src="@/assets/img/signout.svg" alt="Sign Out" /> Sign
                    Out
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="row mt-2 mp-c">
            <router-view />
          </div>
        </div>
      </div>
    </main>
  </div>
  <div class="modal fade" id="add-flo-name" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog model-top">
          <div class="modal-content">
              <div class="modal-header bg-cblue">
                  <h5 class="modal-title">add flo name</h5>
                  <a href="" data-bs-dismiss="modal" aria-label="Close"><i class="bi bi-x-circle-fill close-icon"></i></a>
              </div>
              <div class="modal-body">
                  <div class="row m-2">
                      <div class="col-md-12">
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
</template>
<script>
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/style.css";
import "@/assets/css/navbartab.css";
export default {
  name: "Admin",
  data() {
      return {
          path: window.location.pathname
      }
  },
  updated() {
      this.path = window.location.pathname
  }
};
</script>
<style scoped>
nav {
    visibility: visible
}
</style>
