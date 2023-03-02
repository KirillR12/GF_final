/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-underscore-dangle */
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { addCart, deleteCart } from '../../../redux/slices/cartSlices'
import { favouriteAdd, favouriteDelete } from '../../../redux/slices/favouriteSlices'

export function CatalogButton({ el }) {
  const cart = useSelector((store) => store.cart)
  const idsInCart = cart.map((product) => product.id)
  const favorite = useSelector((store) => store.favourite)
  const dispatch = useDispatch()
  const navigate = useNavigate()
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
    toast(`Продукт "${el.name}" Добавлен в корзину`, { type: 'success', icon: '🛒' })
  }

  const deleteFromBasket = () => {
    dispatch(deleteCart({ id: el._id }))
    toast(`Продукт "${el.name}" Удален из корзины`, { type: 'error', icon: '🛒' })
  }

  const favoriteADD = () => {
    dispatch(favouriteAdd(el._id))
    toast(`Продукт "${el.name}" Добавлен в избранное`, { type: 'success', icon: '❤️' })
  }

  const favoriteDel = () => {
    dispatch(favouriteDelete(el._id))
    toast(`Продукт "${el.name}" Удален из избранного`, { type: 'error', icon: '❤️' })
  }

  return (
    <>
      {idsInCart.includes(el._id) ? <button type="button" className="btn btn-warning" onClick={deleteFromBasket}>Удалить из корзины</button>
        : <button type="button" className="btn btn-warning" onClick={addToCart}>В корзину</button>}
      {favorite.includes(el._id) ? <button type="button" className="btn btn-warning" onClick={favoriteDel}>💔</button>
        : <button type="button" className="btn btn-warning" onClick={favoriteADD}>❤️</button>}
      <button type="button" className="btn btn-warning" onClick={() => navigate(`${el._id}`)}>Подробнее</button>
    </>
  )
}
