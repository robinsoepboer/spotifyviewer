<template>
    <div>
        <h2>Your top tracks:</h2>
        <div id="tracks-list">
            <track-component v-for="track in tracks.items" v-bind:key="track" :track="track"></track-component>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import TrackComponent from './track.vue';
import { ApiService } from '../services/api.service';
import * as SpotifyWebApi from 'spotify-web-api-js';

export default Vue.extend({
    name: 'tracks-list',
    data() {
        let data = {
            tracks: {
                items: {}
            }
        }

        let apiService = new ApiService();
        apiService.getTopTracks()
            .then(response => {
                data.tracks = response;
            })
            .catch(apiService.redirectToAuthorize);

        return data;
    },
    methods: {
    },
    components: {
        TrackComponent
    }
});
</script>

<style>
#tracks-list {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin:0 20px;
}

h2 {
    margin-left: 25px;
}
</style>