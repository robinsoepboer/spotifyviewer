<template>
    <div class="artist">
        <img :src="artist.images[2].url">
        <div class="info">
            <span>
                {{ artist.name }}
            </span>
            <a :src="artist.external_urls.spotify">
                <img href="src/assets/spotify.svg" class="spotify-icon">            
            </a>           
        </div>
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
    .artist {
        display: flex;
        padding: 10px;
        margin: 5px;
    }
    
    .artist img {
        height: 50px;
        width: 50px;
        border-radius: 10px;
    }

    .artist img.spotify-icon {
        height: 25px;
        width: 25px;
        border-radius: 10px;
    }

    .artist .info {
        margin-left: 10px;
        display: flex;
        align-items: stretch;
        font-size: 20px;
    }

    .artist .info span, .artist .info a {
        display: flex;
        align-items: center;
        margin: 0 5px;
    }
</style>