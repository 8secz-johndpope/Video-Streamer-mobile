const state = {
    video: '',
};

const getters =  {
    video: state => state.video
};

const mutations = {
    Pass_Video(state, video) {
        state.video = video
    }
};



export default {
    state,
    mutations,
    getters,
};
