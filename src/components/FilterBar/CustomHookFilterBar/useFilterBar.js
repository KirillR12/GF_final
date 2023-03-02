import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSort } from '../../../redux/slices/sortSlices'

export function useFilterBar() {
  const sort = useSelector((store) => store.sort)
  const dispatch = useDispatch()
  const [styl, setStyl] = useState(true)
  const [styl1, setStyl1] = useState(true)
  const [styl2, setStyl2] = useState(true)
  const [styl3, setStyl3] = useState(true)

  useEffect(() => {
    if (sort === 'Disable') {
      setStyl(false)
      setStyl1(true)
      setStyl2(true)
      setStyl3(true)
    }
    if (sort === 'First expensive') {
      setStyl(true)
      setStyl1(false)
      setStyl2(true)
      setStyl3(true)
    }
    if (sort === 'First cheap') {
      setStyl(true)
      setStyl1(true)
      setStyl2(false)
      setStyl3(true)
    }
    if (sort === 'First new') {
      setStyl(true)
      setStyl1(true)
      setStyl2(true)
      setStyl3(false)
    }
  }, [sort])

  function disableFilter() {
    dispatch(setSort('Disable'))
  }
  function expensiveFilter() {
    dispatch(setSort('First expensive'))
  }
  function cheapFilter() {
    dispatch(setSort('First cheap'))
  }
  function newFilter() {
    dispatch(setSort('First new'))
  }
  function disableFilterFake() {
    dispatch(setSort('Disable'))
  }

  return {
    styl,
    styl1,
    styl2,
    styl3,
    disableFilter,
    expensiveFilter,
    cheapFilter,
    newFilter,
    disableFilterFake,
  }
}
