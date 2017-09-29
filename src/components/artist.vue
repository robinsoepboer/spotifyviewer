<template>
    <div>
        {{ artist.name }} + {{ artist.popularity }}
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: 'artist',
    props: ['artist'],
    data() {
        return {
        }
    },
    methods: {
    }
});
</script>

<style>

</style>