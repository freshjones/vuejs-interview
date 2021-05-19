export default {
    namespaced: true,
    state: {
        trains: {}
    },
    mutations: {
        setTrains(state, data) {
            state.trains = data
        }
    },
    actions: {
        setTrains(context, data) {
            context.commit('setTrains', data);
        }
    },
    getters: {
        getTrains(state) {
            return state.trains
        }
    }
};
