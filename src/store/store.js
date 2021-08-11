import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: false,
    state: {

        tittleAbout: "ALGO SOBRE MI",
        textAbout: "Me llamo Alexander, soy <strong>Desarrollador Web FullStack</strong>  y técnico superior en Quimica Industrial. Hace unos meses atrás me encamine a hacia un nuevo rumbo que es la programación. Hice un Bootcamp dedesarrollo Web y Móvil superando así un reto personal y profesional. Hoy en dia continuo estudiando mediante cursos online y aprendiendo cada día más. Me encuentro en busqueda de una oportunidad para proyectar mis conocimientos y que me permita continuar creciendo tanto personal como profesionalmente."
    },


    getters: {
        tittleAbout: state => state.tittleAbout
    },

    mutations: {

        /* setUser(state, user) {
            state.user = user;
        },
        setRole(state, role) {
            state.role = role;
        } */

    }
})