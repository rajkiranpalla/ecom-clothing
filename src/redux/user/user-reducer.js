const INITIAL_STATE = {
    currentUser: null
}

/* reducer is a pure function that takes in current state and the action 
 and returns the new state as per the action type */
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            };
        default :
            return state;
    }
}

export default userReducer;