import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from '../../redux/slices/searchSlices'
import { useDebounce } from '../CustomHooks/useDebounce'
import styles from './styles.module.css'

export function Search() {
  const searchString = useSelector((store) => store.search)
  const [inp, setInp] = useState(searchString)
  const debounceValue = useDebounce(inp, 500)
  const dispatch = useDispatch()
  dispatch(setSearch(debounceValue))

  return (
    <input
      className={styles.input}
      onChange={(e) => setInp(e.target.value)}
      placeholder="Поиск..."
      value={inp}
    />
  )
}
