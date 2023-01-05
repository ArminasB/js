const state = {
    secondsElapsed: 0,
    intervalId: null,
    tick() {
        state.secondsElapsed++;

    },

    start(updateFunction) {
        console.log(updateFunction);
        if(!state.intervalId) {
            state.intervalId = setInterval(() => {
                state.tick();
                updateFunction(state.secondsElapsed);
            }, 1000);
        }
    },

    stop() {
        if(state.intervalId){
            clearInterval(state.intervalId);
            state.intervalId = null;
        }
    },

};

export default state;