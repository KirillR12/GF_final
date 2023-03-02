/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-underscore-dangle */
import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { getProductsByIds } from '../../Api'
import { Button } from '../Button/Button'
import { Sum } from '../Button/Sum/Sum'
import styles from './styles.module.css'

export const GET_PRODUCTS_BY_ID_QUERY_KEY = 'GET_PRODUCTS_BY_ID_QUERY_KEY'

export function Basket() {
  const cart = useSelector((store) => store.cart)
  const total = cart.length

  const {
    data, error, isSuccess, isError,
  } = useQuery({
    queryKey: [GET_PRODUCTS_BY_ID_QUERY_KEY, cart.map((el) => el.id)],
    queryFn: getProductsByIds,
  })

  if (isError) return <p>{`${error}`}</p>
  if (isSuccess) {
    const proverka = data.map((el) => (
      <div key={el._id}>
        <hr />
        <div className={styles.infoContainer}>
          <img src={el.pictures} className={styles.img} />
          <div className={styles.propertiesContainer}>
            <div className={styles.nameContainer}>
              <h1>{el.name}</h1>
            </div>
            <h5>
              Максимальное кол-во:
              {el.stock}
              <Button el={el} />
            </h5>
            <p>
              {el.price}
              {' '}
              Рублей
            </p>
          </div>
        </div>
      </div>
    ))
    return (
      <div className={styles.container}>
        <div className={styles.left}>
          {total ? <Sum /> : <h3>Вы ничего не добавили в корзину</h3>}
          {proverka}
        </div>
      </div>
    )
  }
}
