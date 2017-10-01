<template>
    <div>
        <p>
            Please log in to Spotify, and authorize the SpotifyViewer app to view the dashboard.
        </p>
        <a :href="spotifyBaseUrl + queryStringParameters">Log in</a>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Config } from '../models/config';

let config: Config = require('../../config.json');

export default Vue.extend({
    name: 'authorize',
    data() {
        return {
            spotifyBaseUrl: 'https://accounts.spotify.com/authorize?',
            queryStringParameters:  'client_id=' + config.appClientId + 
                                    '&redirect_uri=' + config.callbackUrl + 
                                    '&scope=' + encodeURIComponent(config.scope) + 
                                    '&response_type=token&state=123'
        }
    }
});
</script>

<style>
    div {
        margin-left: 25px;
    }

    a {
        font-size: 14px;
        line-height: 1.5;
        border-radius: 500px;
        padding: 7px 35px;
        color: #fff;
        background-color: #2ebd59;
        text-decoration: none;
        transition: background-color .15s ease,border-color .15s ease,color .15s ease;   
    }

    a:hover {
        background-color: #1ed760;
    }
</style>