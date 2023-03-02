/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */
import { CatalogButton } from './CatalogButton/CatalogButton'
import styles from './styles.module.css'

export function Catalog({ el }) {
  return (
    <div key={el._id} className="card-deck">
      <div className="card">
        <img src={el.pictures} className="imgcard card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{el.name}</h5>
          <p className="card-text">
            {el.price}
            {' '}
            Рублей
          </p>
          <CatalogButton el={el} />
        </div>
      </div>
    </div>
  )
}
