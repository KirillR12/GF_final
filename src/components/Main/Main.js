/* eslint-disable no-undef */
import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import styles from './styles.module.css'
import { getProductsByWord } from '../../Api'
import { Sorting } from '../Sorting/Sorting'
import { FilterBar } from '../FilterBar/FilterBar'

export const GET_PRODUCTS_QUERY_KEY = 'PRODUCTS_QUERY_KEY'

export function Main() {
  const searchString = useSelector((store) => store.search)
  const token = useSelector((store) => store.user.token)
  const sort = useSelector((store) => store.sort)

  const {
    data, isSuccess, isLoading,
  } = useQuery({
    queryKey: [GET_PRODUCTS_QUERY_KEY, searchString, token],
    queryFn: getProductsByWord,
  })
  if (isLoading) {
    <h3>Загрузка...</h3>
  }
  if (isSuccess) {
    const preparedData = Sorting(data, sort)
    if (data.length === 0) {
      return <p>Ничего не найдено</p>
    }
    return (
      <>
        <FilterBar />
        <div className={styles.container}>
          {preparedData}
        </div>
      </>
    )
  }
}
