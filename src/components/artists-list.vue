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
        return {
            artists: {
                items: {}
            }
        };
    },
    created: function(){
        let apiService = new ApiService();
        apiService.getTopArtists()
            .then(response => {
                this.artists = response;
            })
            .catch(apiService.redirectToAuthorize);
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