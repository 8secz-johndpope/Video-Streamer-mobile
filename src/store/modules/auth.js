const state = {
    login_state: '',
};

const getters =  {
    login_state: state => state.login_state
};

const mutations = {
    LOGIN_STATE(state, login_state) {
        state.login_state = login_state
    }
};



export default {
    state,
    mutations,
    getters,
};
