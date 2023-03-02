/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import { useDispatch, useSelector } from 'react-redux'
import { addCart, deleteCart } from '../../../redux/slices/cartSlices'
import { favouriteDelete } from '../../../redux/slices/favouriteSlices'
import styles from './styles.module.css'

export function FavoriteButton({ el }) {
  const dispatch = useDispatch()
  const cart = useSelector((store) => store.cart)
  const idsInCart = cart.map((product) => product.id)

  const addToCart = () => {
    dispatch(addCart({
      id: el._id,
      count: 1,
      price:
      el.price,
      stock: el.stock,
      name: el.name,
      pictures:
      el.pictures,
    }))
  }

  const deleteFromCart = () => {
    dispatch(deleteCart({ id: el._id }))
  }

  const favoriteDel = (e) => {
    e.preventDefault()
    dispatch(favouriteDelete(el._id))
  }

  return (
    <div className={styles.btnFavurite}>
      {idsInCart.includes(el._id)
        ? <button type="button" className="btn btn-warning" onClick={deleteFromCart}>Удалить из корзины</button>
        : <button type="button" className="btn btn-warning" onClick={addToCart}>В корзину</button>}
      <button type="button" className="btn btn-warning" onClick={favoriteDel}>Удалить из избранного</button>
    </div>
  )
}
