/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
/* eslint-disable no-mixed-operators */
/* eslint-disable consistent-return */
import { Catalog } from '../Pages/Catalog'

export const Sorting = (data, sort) => {
  const [...array] = data
  switch (sort) {
    case 'Disable':
      return data.map((el) => <Catalog el={el} key={el._id} />)
    case 'First expensive':
      array.sort((a, b) => ((b.price - (b.price * b.discount / 100)) - (a.price - (a.price * a.discount / 100))))
      return array.map((el) => <Catalog el={el} key={el._id} />)
    case 'First cheap':
      array.sort((a, b) => ((a.price - (a.price * a.discount / 100)) - (b.price - (b.price * b.discount / 100))))
      return array.map((el) => <Catalog el={el} key={el._id} />)
    case 'First new':
      array.sort((a, b) => (Date.parse(b.created_at) - Date.parse(a.created_at)))
      return array.map((el) => <Catalog el={el} key={el._id} />)
    default:
      break
  }
}
