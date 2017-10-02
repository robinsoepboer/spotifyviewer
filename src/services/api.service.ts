import * as SpotifyWebApi from 'spotify-web-api-js';

export class ApiService {

    public getTopArtists(): Promise<SpotifyApi.UsersTopArtistsResponse> {
        let spotifyApi = new SpotifyWebApi();
        spotifyApi.setAccessToken(this.getToken());

        return spotifyApi.getMyTopArtists();
    }

    public getTopTracks(): Promise<SpotifyApi.UsersTopTracksResponse> {
        let spotifyApi = new SpotifyWebApi();
        spotifyApi.setAccessToken(this.getToken());

        return spotifyApi.getMyTopTracks();
    }

    public redirectToAuthorize(response: any): void{
        window.location.href = '/index.html';        
    } 

    /* Private functions  */

    private getToken(): string {           
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
}