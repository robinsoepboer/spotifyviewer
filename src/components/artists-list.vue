<template>
    <div>
        <button v-on:click="getTopArtists">Get my top artists</button>
        <div v-if="artists !== {}">
            {{ JSON.stringify(artists) }}
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as SpotifyWebApi from 'spotify-web-api-js';

export default Vue.extend({
    name: 'artists-list',
    data() {
        return {
            token: 'BQDe3LUmFjRcK4RGvQRY4DNl12ajDlGuCKkdbKoRBsfrpTGUdHb9EXc0Kfjw-MC3LS87dJineWeih0HtL9QouMDXep48W1REy73yl0upXxKDO7NuahxWZu2RbwY_zDR7X8PsPmoJaoo6VrLP7P-Av3s',
            artists: {}
        }
    },
    methods: {
        getTopArtists(event: any): void {
            let spotifyApi = new SpotifyWebApi();
            spotifyApi.setAccessToken(this.token);

            spotifyApi.getMyTopArtists()
                .then(data => {
                    this.artists = data;
                });
        }
    }
});
</script>

<style>

</style>