<template>
    <div class="artist">
        <div class="image-wrapper">
            <img :src="artist.images[2].url">
        </div>
        <div class="info">
            {{ artist.name }}    
        </div>
        <a :href="artist.external_urls.spotify">
            <img src="src/assets/spotify.svg" class="spotify-icon">            
        </a>
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
    }
});
</script>

<style>
    .artist {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1 1 100px;
        padding: 5px;
        margin: 5px;
    }
    
    .artist .image-wrapper {
        height: 100px;
        width: 100px;
        border-radius: 10px;
        margin-bottom: 10px;
        overflow: hidden;
    }

    .artist .image-wrapper img {
        height: 100px;
        width: auto;
        min-width:100px;
    }

    .artist .spotify-icon {
        height: 25px;
        width: 25px;
        border-radius: 10px;
    }

    .artist .info {
        margin-bottom: 10px;
        font-size: 20px;
        text-align: center;
        width:130px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .artist .info span, .artist .info a {
        display: flex;
        align-items: center;
        margin: 0 5px;
    }
</style>