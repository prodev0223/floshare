<template>
  <div>
    <Loader />
    <Popup />
    <RequestDemo />
    <router-view />
  </div>
</template>

<script>
import Loader from '@/components/loader';
import Popup from '@/components/popup';
import RequestDemo from '@/components/request-demo'
export default {
  name: "App",
  components: {
    Loader,
    Popup,
    RequestDemo                                 
  }
};
</script>
