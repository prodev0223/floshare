<template>
    <div v-if="isLoading" style="position: fixed; width: 100%; text-align: center; padding-top: 45vh; height: 100vh; background-color: #8e98a157; z-index: 99999">
       <img src="@/assets/img/loading.svg" alt="" id="loading" width="100">    
    </div>
</template>
<script>
    import { mapState } from 'vuex';
    export default {
        name: 'Loader',
        computed: {
            ...mapState({ isLoading: state => state.loader.isLoading })
        }
    }
</script>
<style></style>