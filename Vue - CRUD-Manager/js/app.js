const App = {

    data() {

        return {
            /* CREATION DES VARIABLES */
            showHome: false,
            showCreateForm: false,
            showStudentsList: false,
        }
    },

    mounted() {
        this.changeNavigationState("home")
    },



    methods: {
        /* CREATION DES METHODES ==> FONCTIONS */
        gotoHome() {
            this.changeNavigationState("home")
        },

        gotoCreateForm() {
            this.changeNavigationState("create") // On peut mettre ceci à la place de 'showCreateForm' car 'showCreateForm' est dans la foncion 'changeNavigationState' et la case create 
        },

        gotoStudentsList() {
            this.changeNavigationState("list")
        },



        changeNavigationState(destination) {
            this.showCreateForm = false
            this.showHome = false
            this.showStudentsList = false

            switch (destination) {

                case "home":
                    this.showHome = true
                    break;

                case "create":
                    this.showCreateForm = true
                    break;
                
                case "list":
                    this.showStudentsList = true
                    break;

                default:
                    this.showHome = true

                    break;
            }
        }
    }
}


Vue.createApp(App).mount("#app")
