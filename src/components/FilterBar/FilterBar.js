/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-bind */
import styles from './styles.module.css'
import { useFilterBar } from './CustomHookFilterBar/useFilterBar'

export function FilterBar() {
  const {
    styl, styl1, styl2, styl3, disableFilter,
    expensiveFilter, cheapFilter, newFilter, disableFilterFake,
  } = useFilterBar()

  return (
    <span className={styles.container}>
      <h3>Фильтры поиска</h3>
      {styl ? <button type="button" className={`btn btn-warning ${styles.button}`} onClick={disableFilter}>По умолчанию</button>
        : <button type="button" className={`btn btn-danger ${styles.button}`} onClick={disableFilterFake}>По умолчанию</button>}

      {styl1 ? <button type="button" className={`btn btn-warning ${styles.button}`} onClick={expensiveFilter}>Сначала дорогие</button>
        : <button type="button" className={`btn btn-danger ${styles.button}`} onClick={disableFilterFake}>Сначала дорогие</button>}

      {styl2 ? <button type="button" className={`btn btn-warning ${styles.button}`} onClick={cheapFilter}>Сначала дешевые</button>
        : <button type="button" className={`btn btn-danger ${styles.button}`} onClick={disableFilterFake}>Сначала дешевые</button>}

      {styl3 ? <button type="button" className={`btn btn-warning ${styles.button}`} onClick={newFilter}>Сначала новые</button>
        : <button type="button" className={`btn btn-danger ${styles.button}`} onClick={disableFilterFake}>Сначала новые</button>}
    </span>
  )
}
