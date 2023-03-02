/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { getUserInfo } from '../../Api'
import { removeToken, removeUserGroup, removeUserID } from '../../redux/slices/userSlices'

const USERINFO_QUERY_KEY = 'USERINFO_QUERY_KEY'

export function Profile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector((store) => store.user.token)

  const {
    data, isSuccess,
  } = useQuery({
    queryKey: [USERINFO_QUERY_KEY],
    queryFn: getUserInfo,
  })

  const logOff = () => {
    dispatch(removeToken())
    dispatch(removeUserGroup())
    dispatch(removeUserID())
    toast('Вы успешно вышли', { type: 'error' })
    navigate('/home')
  }
  if (isSuccess) {
    if (token) {
      return (
        <div>
          <h1>👤</h1>
          <div>
            <h4>
              Имя:
              {' '}
              {data.name}
            </h4>
            <h4>
              Деятельность:
              {' '}
              {data.about}
            </h4>
            <h4>
              Id:
              {' '}
              {data._id}
            </h4>
            <h4>
              Email:
              {' '}
              {data.email}
            </h4>
            <h4>
              Группа:
              {' '}
              {data.group}
            </h4>
          </div>
          <button className="btn btn-warning" type="submit" onClick={logOff}>
            Выйти из аккаунта
          </button>
        </div>
      )
    } return null
  }
}
