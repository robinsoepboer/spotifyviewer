import Vue from "vue";
import ArtistsListComponent from "./components/artists-list.vue";

let v = new Vue({
    el: "#app",
    components: {
        ArtistsListComponent,
    }
});