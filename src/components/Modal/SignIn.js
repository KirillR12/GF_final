/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable no-self-compare */
import { useMutation } from '@tanstack/react-query'
import { Formik, Form, Field } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import { signIn } from '../../Api'
import { setToken, setUserGroup, setUserID } from '../../redux/slices/userSlices'
import styles from './styles.module.css'

const SINGIN_QUERY_KEY = 'SINGIN_QUERY_KEY'

export function SignIn() {
  const dispatch = useDispatch()
  const token = useSelector((store) => store.token)
  const navigate = useNavigate()

  const {
    mutate,
  } = useMutation({
    queryKey: [SINGIN_QUERY_KEY],
    mutationFn: signIn,
    onSuccess: (data) => {
      dispatch(setToken(data.token))
      dispatch(setUserGroup(data.data.group))
      dispatch(setUserID(data.data._id))
      toast('Вы успешно вошли', { type: 'success' })
      navigate('/home')
    },
    onError: (error) => {
      toast(`${error.message}`, { type: 'error' })
    },
  })

  const trySingIn = (e) => {
    mutate({
      email: e.login,
      password: e.password,
    })
  }
  if (!token) {
    return (
      <div>
        <Formik
          initialValues={{
            login: '',
            password: '',
          }}
          validationSchema={Yup.object({
            login: Yup
              .string()
              .email('Не корректный адрес эл.почты')
              .required('Обязательное поле'),
            password: Yup.string()
              .required('Обязательное поле')
              .min(5),
          })}
          onSubmit={(e) => {
            trySingIn(e)
          }}
        >
          <Form className={styles.container}>
            <div className={styles.form}>
              <div>
                <label htmlFor="login">Логин</label>
                <Field id="login" name="login" placeholder="name_123@gmail.com" />
              </div>
              <div>
                <label htmlFor="password">Пароль</label>
                <Field placeholder="Пароль" id="password" name="password" type="password" />
              </div>
              <button className="btn btn-warning" type="submit">Войти</button>
              <Link className="btn btn-warning" to="/signup">Зарегистрироваться</Link>
            </div>
          </Form>
        </Formik>
      </div>
    )
  } return null
}
