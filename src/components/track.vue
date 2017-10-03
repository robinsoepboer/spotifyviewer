<template>
    <div class="track">
        <div class="image-wrapper">
            <img :src="track.album.images[2].url">
        </div>
        <div class="info">
            <div class="title">{{ track.name }}</div>
            <div class="artists">
                <span v-for="artist in track.artists" v-bind:key="artist">
                    <span v-if="artist !== track.artists[0]">, </span>{{ artist.name }}
                </span>
            </div>
        </div>
        <a :href="track.external_urls.spotify">
            <img src="src/assets/spotify.svg" class="spotify-icon">            
        </a>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: 'track',
    props: ['track'],
    data() {
        return {};
    }
});
</script>

<style>
.track {
    display: flex;
    margin:10px;
    flex-grow: 1;
}

.track .image-wrapper {
    height: 50px;
    width: 50px;
    border-radius: 1px;
    overflow: hidden;
}

.track .image-wrapper img {
    height: 50px;
    width: auto;
    min-width: 50px;
}

.track .info {
    display: flex;
    margin-left: 10px;
    flex-direction: column;
    justify-content: center;
    width: 250px;
}

.track .info .title,
track .info .artists {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.track .info .title {
    font-size: 16px;
}

.track .info .artists {
    font-size: 12px;
}

.track a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
}

.track .spotify-icon {
    height: 25px;
    width: 25px;
    border-radius: 10px;
}

</style>