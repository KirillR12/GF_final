/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
import { useMutation } from '@tanstack/react-query'
import { Formik, Form, Field } from 'formik'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import { signUp } from '../../Api'
import styles from './styles.module.css'

const SINGUP_QUERY_KEY = 'SINGUP_QUERY_KEY'

export function SignUp() {
  const navigate = useNavigate()
  const token = useSelector((store) => store.token)

  const {
    mutate,
  } = useMutation({
    queryKey: [SINGUP_QUERY_KEY],
    mutationFn: signUp,
    onSuccess: () => {
      toast('Вы успешно зарегистрировались', { type: 'success' })
      navigate('/home')
    },
  })

  const trySingUp = (e) => {
    mutate({
      email: e.login,
      password: e.password,
      group: e.group,
    })
  }

  if (!token) {
    return (
      <div>
        <Formik
          initialValues={{
            login: '',
            password: '',
            group: '',
          }}
          validationSchema={Yup.object({
            login: Yup
              .string()
              .email('Not valid email')
              .required('Required to fill!'),
            password: Yup.string()
              .required('Required to fill!')
              .min(5),
            group: Yup.string()
              .required('Required to fill!'),
          })}
          onSubmit={(e) => {
            trySingUp(e)
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
                <Field id="password" name="password" placeholder="Пароль" type="password" />
              </div>
              <div>
                <label htmlFor="group">Группа</label>
                <Field id="group" name="group" placeholder="Группа" type="group" />
              </div>
              <button className="btn btn-warning" type="submit">Зарегистрироваться</button>
              <Link className="btn btn-warning" to="/signin">Войти</Link>
            </div>
          </Form>
        </Formik>
      </div>

    )
  } return null
}
