const initialState = {
    data: [],
    form: {},
    isLoading: false,
    isLogin: false
}

const guestReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'FETCH_GUEST':
            return { ...state, isLoading: true };
        case 'FETCH_GUEST_SUCCESS':
            console.log(payload);
            return { ...state, isLoading: false };
        case 'LOGIN':
            return { ...state, isLoading: true };
        default:
            return state;
    }
}

export default guestReducer;