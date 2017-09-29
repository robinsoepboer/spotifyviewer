import Vue from "vue";
import ArtistsListComponent from "./components/artists-list.vue";
import AuthorizeComponent from "./components/authorize.vue";

let v = new Vue({
    el: "#app",
    components: {
        ArtistsListComponent,
        AuthorizeComponent
    }
});