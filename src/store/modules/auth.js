const state = {
    login_state: '',
    users: []
};

const getters =  {
    login_state: state => state.login_state,
    users: state => state.users
};

const mutations = {
    LOGIN_STATE(state, login_state) {
        state.login_state = login_state
    },
    SAVE_USERS(state, users){
        state.users = users
    }
};



export default {
    state,
    mutations,
    getters,
};
