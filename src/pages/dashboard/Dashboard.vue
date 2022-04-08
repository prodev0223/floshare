<template lang="">
  <div>
    <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
            <li class="breadcrumb-item" aria-current="page"><a href="#">Jeff Block</a></li>
            <li class="breadcrumb-item active" aria-current="page"><a href="#">Team</a> </li>
        </ol>
    </nav>
  </div>
  <div class="bg-white p-3 border-radius-10">
    <ul class="tabs">
        <li class="active" rel="tab1">Team </li>
        <li rel="tab2"> New Activity</li>
        <li rel="tab3">Steps Today</li>
        <li rel="tab4">Steps 7 Days</li>
    </ul>
    <div class="tab_container">
        <h3 class="d_active tab_drawer_heading" rel="tab1">Team </h3>
        <div id="tab1" class="tab_content">
            <div class="row">
                <div class="col-md-2"><a href="">Bob Porpoato</a></div>
                <div class="col-md-2"><a href="">Acme Products</a></div>
                <div class="col-md-2"><a href="">Jeff Block</a></div>
                <div class="col-md-2"><a href="">Daffy Duck</a></div>
                <div class="col-md-2"><a href="">Donald Duck</a></div>
                <div class="col-md-2"><a href="">Goofy</a></div>
                <div class="col-md-2"><a href="">Kungfu</a></div>
                <div class="col-md-2"><a href="">Ronald Reagan</a></div>
                <div class="col-md-2"><a href="">All</a></div>
            </div>
        </div>
        <!-- #tab1 -->
        <h3 class="tab_drawer_heading" rel="tab2">New Activity</h3>
        <div id="tab2" class="tab_content">
            <div class="row">
                <div class="col-md-2"><a href="">ABC Company</a> </div>
                <div class="col-md-2"><a href="">Acme Products</a> </div>
                <div class="col-md-2"><a href="">Products</a> </div>
                <div class="col-md-2"><a href="">Compar</a> </div>
                <div class="col-md-2"><a href="">Widget Pros</a> </div>
                <div class="col-md-2"><a href="">Loogle</a> </div>
                <div class="col-md-2"><a href="">Bookface</a> </div>
                <div class="col-md-2"><a href="">All</a> </div>
            </div>
        </div>
        <!-- #tab2 -->
        <h3 class="tab_drawer_heading" rel="tab3">Steps Today</h3>
        <div id="tab3" class="tab_content">
            <div class="row">
                <div class="col-md-2"><a href="">ABC Company</a> </div>
                <div class="col-md-2"><a href="">Acme Products</a> </div>
                <div class="col-md-2"><a href="">Products</a> </div>
                <div class="col-md-2"><a href="">Compar</a> </div>
                <div class="col-md-2"><a href="">Widget Pros</a> </div>
                <div class="col-md-2"><a href="">Loogle</a> </div>
                <div class="col-md-2"><a href="">Bookface</a> </div>
                <div class="col-md-2"><a href="">All</a> </div>
            </div>
        </div>
        <!-- #tab3 -->
        <h3 class="tab_drawer_heading" rel="tab4">Steps 7 Days</h3>
        <div id="tab4" class="tab_content">
            <div class="row">
                <div class="col-md-2"><a href="">ABC Company</a> </div>
                <div class="col-md-2"><a href="">Acme Products</a> </div>
                <div class="col-md-2"><a href="">Products</a> </div>
                <div class="col-md-2"><a href="">Compar</a> </div>
                <div class="col-md-2"><a href="">Widget Pros</a> </div>
                <div class="col-md-2"><a href="">Loogle</a> </div>
                <div class="col-md-2"><a href="">Bookface</a> </div>
                <div class="col-md-2"><a href="">All</a> </div>
            </div>
        </div>
        <!-- #tab4 -->
    </div>
    <!-- .tab_container -->
  </div>
</template>
<script>
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/style.css";
import "@/assets/css/navbartab.css";
export default {
  name: "Dashboard",
};
</script>
<style scoped>
nav {
    visibility: visible
}
</style>
