import { useSelector } from 'react-redux'
import styles from './styles.module.css'

export function Sum() {
  const cart = useSelector((store) => store.cart)
  const totalPrice = cart.reduce((summ, product) => (
    (product.isSelected) ? summ + product.price * product.count
      : summ), 0)
  return (
    <div className={styles.container}>
      <h1>🛒</h1>
      <h3>
        Cумма покупки:
        {' '}
        {totalPrice}
        {' '}
        Рублей
      </h3>
    </div>
  )
}
