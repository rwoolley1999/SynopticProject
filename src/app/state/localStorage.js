export const loadState=()=>{
    try{
        const serialisedState = localStorage.getItem('state');
        if(serialisedState === null){
            return undefined;
        }
        return JSON.parse(serialisedState);
    }catch(err){
        console.log(err);
        return undefined;
    }
};

export const saveState=(state)=>{
    try{
        const serialisedState = JSON.stringify(state);
        localStorage.setItem('state', serialisedState);
        console.log(serialisedState);
    }catch(err){
        return err;
    }
};




