import moviesContant from "../Contants/MoviesContant";
import MoviesValidator from '../../Validators/MoviesValidate';
import data from '../../BookMoviesTickets/danhSachGhe.json';
import React from "react";
const initialState = {
    seatSelected: [],
    total: 0,
    isCheck: true,
    seats: "",
    form: {},
    disabledName: "",
    disabledNumber: "",
    myRef: React.createRef()
}

const moviesReducer = (state = initialState, action) => {
    const { type, payload } = action;
    const { seatSelected, form, total, seats, isCheck, disabledName, disabledNumber, myRef } = state;
    switch (type) {
        case moviesContant.confirmForm: {
            let maximum = 0
            data.forEach((item, index) => {
                if (index > 0) {
                    item.danhSachGhe.forEach(seat => {
                        maximum += seat.daDat ? 0 : 1;
                    });
                }
            });
            let isBool = false;
            let validator = new MoviesValidator(payload.get('name'), payload.get('number'));
            isBool = validator.checkEmpty("Please Enter your Name and Number of Seats")
                && validator.checkNameValid("Your name is not valid")
                && validator.checkNumberMaximum(maximum, `Maximum total seats are ${maximum}`);
            if (!isBool) return state;
            else {
                alert("Please Select your Seats NOW!");
                return { ...state, form: { name: payload.get('name'), number: payload.get('number') }, disabledName: "disabled", disabledNumber: "disabled" }
            }
        }
        case moviesContant.selectSeat: {
            const { seat, ref } = payload;
            if (Object.keys(form).length > 1) {
                const isBook = data.findIndex(item => item.danhSachGhe.findIndex(item => item.soGhe === seat.soGhe && seat.daDat) !== -1);
                const index = seatSelected.length > 0 ? seatSelected.findIndex((item) => item.soGhe === seat.soGhe) : -1;
                if (isCheck && isBook === -1) {
                    if (seatSelected.length < form.number && index === -1) {
                        const arr = [...seatSelected];
                        arr.push(seat);
                        ref.current.style.background = "green";
                        return { ...state, seatSelected: arr };
                    } else if (index !== -1) {
                        const arr = [...seatSelected];
                        arr.splice(index, 1);
                        ref.current.style.background = "#fff";
                        return { ...state, seatSelected: arr };
                    } else {
                        return state;
                    }
                } else {
                    return state;
                }
            } else {
                alert("Please Enter your Name and Number of Seats");
                return state;
            }
        }
        case moviesContant.confirmReceipt: {
            if (Object.keys(form).length > 1) {
                if (seatSelected.length > 0) {
                    let sum = seatSelected.reduce((sum, seat) => {
                        return sum += seat.gia;
                    }, 0);
                    let str = seatSelected.map(seat => {
                        return seat.soGhe;
                    })
                    return { ...state, total: sum, seats: str.join(), isCheck: false };
                } else {
                    alert("Please Enter your Name and Number of Seats");
                    return { ...state };
                }
            } else {
                alert("Please Enter your Name and Number of Seats");
                return state;
            }
        }
        default: {
            return state;
        }
    }
}

export default moviesReducer;