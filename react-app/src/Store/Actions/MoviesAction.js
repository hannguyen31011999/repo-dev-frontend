import moviesContant from "../Contants/MoviesContant";

export const confirmForm = (form) => ({
    type: moviesContant.confirmForm,
    payload: form
});

export const selectSeat = (seat, ref) => ({
    type: moviesContant.selectSeat,
    payload: {
        seat,
        ref
    }
});

export const confirmReceipt = () => ({
    type: moviesContant.confirmReceipt
})