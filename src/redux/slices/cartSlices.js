/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit'
import { getInitialState } from '../initialStore'

const cartSlice = createSlice({
  name: 'cart',
  initialState: getInitialState().cart,
  reducers: {
    addCart: (state, action) => [action.payload, ...state],

    deleteCart: (state, action) => state.filter((elem) => elem.id !== action.payload.id),
    cartIncrement: (state, action) => state.map((elem) => (elem.id === action.payload.id && elem.count < elem.stock
      ? { ...elem, count: elem.count + 1 } : elem)),
    cartDecrement: (state, action) => state.map((elem) => (elem.id === action.payload.id && elem.count !== 0
      ? { ...elem, count: elem.count - 1 } : elem))
      .filter((elem) => elem.count > 0),
    cartSelect: (state, action) => state
      .map((elem) => (elem.id === action.payload.id ? { ...elem, isSelected: true } : elem)),
    cartUnselect: (state, action) => state
      .map((elem) => (elem.id === action.payload.id ? { ...elem, isSelected: false } : elem)),
  },
})

export const {
  addCart, deleteCart, cartIncrement, cartDecrement, cartSelect, cartUnselect,
} = cartSlice.actions
export const cartReducer = cartSlice.reducer
