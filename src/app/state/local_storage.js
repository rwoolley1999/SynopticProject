import axios from 'axios';

export const LoadState = () => {
    // loading data from state.json file in server 
    axios.post('http://localhost:7777/state').then(resp => {

        console.log(resp.data);
    });
    // utilising localStorage 
    try {
        const serialisedState = localStorage.getItem('state');
        if (serialisedState === null) {
            return undefined;
        }
        return JSON.parse(serialisedState);
    } catch (err) {
        console.log(err);
        return undefined;
    }
};

export const SaveState = (state) => {
    // sending data to the server to be written to state.json
    axios.post('http://localhost:7777/state').then(resp => {

        console.log(JSON.stringify(resp.data));

        // utilising local storage
        try {
            const serialisedState = JSON.stringify(state);
            localStorage.setItem('state', serialisedState);
            console.log(serialisedState);
        } catch (err) {
            return err;
        }
    })
};




