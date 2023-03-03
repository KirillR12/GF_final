/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Formik, Field, Form } from 'formik'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import { createProduct } from '../../Api'
import styles from './styles.module.css'

export const CREATE_PRODUCT_QUERY_KEY = 'CREATE_PRODUCT_QUERY_KEY'

export function CreateProduct() {
  const token = useSelector((store) => store.user.token)
  const navigate = useNavigate()
  const [url, setUrl] = useState('')
  const { mutate } = useMutation({
    queryKey: [CREATE_PRODUCT_QUERY_KEY],
    mutationFn: createProduct,
    onSuccess: (data) => {
      navigate(`/catalog/${data._id}`)
      toast(`Продукт "${data.name}" Добавлен в корзину`, { type: 'success', icon: '🛒' })
    },
  })
  const tryCreateProduct = (values) => {
    mutate([{ ...values, available: true }, token])
  }
  return (
    <>
      <h1>Создание нового продукта</h1>
      <div className={styles.bodyContainer}>
        <img className={styles.imageContainer} src={url} alt="Изображение продукта" />
        <Formik
          initialValues={{
            pictures: '',
            name: '',
            price: '',
            discount: '',
            stock: '',
            wight: '',
            description: '',
          }}
          validationSchema={Yup.object({
            pictures: Yup.string()
              .required('Необходимо'),
            name: Yup.string()
              .max(40, 'Должно быть не более 40 символов')
              .required('Необходимо'),
            price: Yup.number()
              .max(15000, 'Максимальная цена: 15000')
              .required('Необходимо'),
            discount: Yup.number()
              .max(99, 'Максимальная скидка: 99%')
              .required('Необходимо'),
            stock: Yup.number()
              .max(1000, 'Максимальный остаток: 1000')
              .required('Необходимо'),
            wight: Yup.number()
              .max(10000, 'Максимальный вес: 10000')
              .required('Необходимо'),
            description: Yup.string()
              .max(100, 'Должно быть не более 100 символов')
              .required('Необходимо'),
          })}
          onSubmit={(values) => {
            tryCreateProduct(values)
          }}
        >
          <Form>
            <div>
              <label htmlFor="pictures">Картинка</label>
              <Field id="pictures" name="pictures" placeholder="Url" validate={(e) => setUrl(e)} />
            </div>
            <div>
              <label htmlFor="name">Название</label>
              <Field id="name" name="name" placeholder="Название" />
            </div>
            <div>
              <label htmlFor="price">Цена</label>
              <Field id="price" name="price" placeholder="Цена (руб)" />
            </div>
            <div>
              <label htmlFor="discount">Скидка</label>
              <Field id="discount" name="discount" placeholder="Скидка (%)" />
            </div>
            <div>
              <label htmlFor="stock">Остаток</label>
              <Field id="stock" name="stock" placeholder="Остаток" />
            </div>
            <div>
              <label htmlFor="wight">Вес</label>
              <Field id="wight" name="wight" placeholder="Вес" />
            </div>
            <div>
              <label htmlFor="description">Комментарии</label>
              <Field id="description" name="description" placeholder="Комментарии" />
            </div>
            <button className="btn btn-warning" type="submit" text="Создать">Создать</button>
          </Form>
        </Formik>
      </div>
    </>
  )
}
