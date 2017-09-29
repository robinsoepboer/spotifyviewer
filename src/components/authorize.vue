<template>
    <div>
        <a :href="spotifyBaseUrl + queryStringParameters">Authorize SpotifyViewer</a>
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

</style>