<template>
    <div id="artists-list" >
        <artist-component v-for="artist in artists.items" v-bind:key="artist" :artist="artist"></artist-component>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import ArtistComponent from './artist.vue';
import { ApiService } from '../services/api.service';
import * as SpotifyWebApi from 'spotify-web-api-js';

export default Vue.extend({
    name: 'artists-list',
    data() {
        let data = {
            artists: {
                items: {}
            }
        }

        let apiService = new ApiService();
        apiService.getTopArtists()
            .then(response => {
                data.artists = response;
            });

        return data;
    },
    methods: {
    },
    components: {
        ArtistComponent
    }
});
</script>

<style>
#artists-list {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
}
</style>