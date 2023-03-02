/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
import { useDispatch, useSelector } from 'react-redux'
import {
  cartDecrement, cartIncrement, deleteCart, cartSelect, cartUnselect,
} from '../../redux/slices/cartSlices'
import { Quantity } from './Quantity/Quantity'
import styles from './styles.module.css'

export function Button({ el }) {
  const cart = useSelector((store) => store.cart)
  const [{ count, isSelected }] = cart.filter((product) => product.id === el._id)

  const dispatch = useDispatch()

  const increment = () => {
    dispatch(cartIncrement({ id: el._id }))
  }
  const decrement = () => {
    dispatch(cartDecrement({ id: el._id }))
  }

  const deleteFromCart = () => {
    dispatch(deleteCart({ id: el._id }))
  }

  const radioSelect = () => {
    if (isSelected) {
      dispatch(cartUnselect({ id: el._id }))
    } else dispatch(cartSelect({ id: el._id }))
  }

  return (
    <div>
      <Quantity increment={increment} decrement={decrement} value={count} />
      <button type="button" className="btn btn-danger" onClick={deleteFromCart}>Удалить</button>
      <input className={styles.input} type="radio" checked={isSelected} onClick={radioSelect} />
    </div>
  )
}
