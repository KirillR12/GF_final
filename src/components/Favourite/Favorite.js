/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-underscore-dangle */
import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { getProductsByIds } from '../../Api'
import { FavoriteButton } from './FavoriteButton/FavoriteButton'
import styles from './styles.module.css'

const GET_PRODUCTS_BY_ID_QUERY_KEY = 'GET_PRODUCTS_BY_ID_QUERY_KEY'

export function Favorite() {
  const favorite = useSelector((store) => store.favourite)

  const {
    data, error, isSuccess, isError,
  } = useQuery({
    queryKey: [GET_PRODUCTS_BY_ID_QUERY_KEY, favorite],
    queryFn: getProductsByIds,
  })

  if (isError) return <p>{`${error}`}</p>
  if (isSuccess) {
    const productsInFavoriteJSX = data.map((el) => (
      <div key={el._id}>
        <div className={styles.infoContainer}>
          <img src={el.pictures} className={styles.img} />
          <div className={styles.propertiesContainer}>
            <div className={styles.nameContainer}>
              <h1>{el.name}</h1>
            </div>
            <p>
              {el.price}
              {' '}
              Рублей
            </p>
            <FavoriteButton el={el} />
          </div>
        </div>
        <hr />
      </div>
    ))

    return (
      <>
        <h3>Избранные товары:</h3>
        <div className={styles.container}>
          <div className={styles.left}>
            {data.length ? productsInFavoriteJSX
              : <h3>Вы ничего не добавили в избранные товары</h3>}
          </div>
        </div>
      </>
    )
  }
}
