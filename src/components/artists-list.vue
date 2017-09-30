<template>
    <div>
        <button v-on:click="getTopArtists">Get my top artists</button>
        <div v-if="artists.items.length !== 0">
            <artist-component 
                v-for="artist in artists.items" 
                v-bind:key="artist"
                :artist="artist">
            </artist-component>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as SpotifyWebApi from 'spotify-web-api-js';
import ArtistComponent from './artist.vue';

export default Vue.extend({
    name: 'artists-list',
    data() {
        return {
            artists: {
                items: {}
            }
        }
    },
    methods: {
        getTopArtists(): void {
            let spotifyApi = new SpotifyWebApi();
            spotifyApi.setAccessToken(this.getToken());

            spotifyApi.getMyTopArtists()
                .then(data => {
                    this.artists = data;
                });
        },

        getToken(): string {           
            let query = window.location.hash.substring(1);
            let vars = query.split("&");
            let token = '';

            for (let i = 0 ; i < vars.length; i++) {
                    let pair = vars[i].split("=");
                    if(pair[0] == 'access_token')
                        token = pair[1];
                    if(pair[0] == 'expires_in')
                        localStorage.setItem('expires_in', pair[1]);
            }

            if(!token)
            {
                window.location.href = '/error.html';                
            }

            return token;
        }
    },
    components:{
        ArtistComponent
    }
});
</script>

<style>

</style>