/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/alt-text */
import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getProductById } from '../../Api'
import { CommentContainer } from './CommentContainer/CommentContainer'
import styles from './styles.module.css'

const GET_PRODUCTBYID_QUERY_KEY = 'GET_PRODUCTBYID_QUERY_KEY'

export function DetaliProduct() {
  const { id } = useParams()

  const token = useSelector((store) => store.user.token)
  const { data, isSuccess } = useQuery({
    queryKey: [GET_PRODUCTBYID_QUERY_KEY, token, id],
    queryFn: getProductById,
  })

  if (isSuccess) {
    return (
      <div>
        <div className={styles.container}>
          <img className={styles.img} src={data.pictures} />
          <div>
            <h4>
              Имя:
              {' '}
              {data.name}
            </h4>
            <h4>
              Остаток:
              {' '}
              {data.stock}
            </h4>
            <h4>
              Цена:
              {' '}
              {data.price}
              {' '}
              рублей
            </h4>
            <h4>
              Вес:
              {' '}
              {data.wight}
            </h4>
            <h4>
              Описание:
              {' '}
              {data.description}
            </h4>
          </div>
        </div>
        <CommentContainer id={id} />
      </div>
    )
  }
}
