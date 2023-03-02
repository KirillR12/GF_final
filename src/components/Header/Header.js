/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import styles from './styles.module.css'
import { Search } from '../Search/Search'
import { removeToken, removeUserGroup, removeUserID } from '../../redux/slices/userSlices'

export function Header() {
  const token = useSelector((store) => store.user.token)
  const cart = useSelector((store) => store.cart)
  const dispatch = useDispatch()
  const total = cart.length

  const logOff = () => {
    dispatch(removeToken())
    dispatch(removeUserGroup())
    dispatch(removeUserID())
    toast('Вы успешно вышли', { type: 'error' })
  }

  return (
    <header>
      <Link className={styles.logo} to="/home">
        <i className="fa-solid fa-dog">DogFood</i>
        <i className="fa-solid fa-dog" />
      </Link>
      <nav className={styles.menu}>
        <div className={styles.search}>
          {token && <Search />}
        </div>
        <div>
          {token && (

          <Link to="/addproduct"><h3>➕</h3></Link>

          )}
        </div>
        <div>
          {token && (

          <Link to="/favorite"><h3>❤️</h3></Link>

          )}
        </div>
        {token && (
          <div>
            <Link to="/basket">
              <h3>
                🛒
                {' '}
                {total}
              </h3>
            </Link>
          </div>
        )}

        {token && (<Link to="/profile"><h3>👤</h3></Link>)}
        {!token && <Link to="/signin"><h3>🚪</h3></Link>}
        {token && <Link to="/home" onClick={logOff}><h3>🚪</h3></Link>}
      </nav>
    </header>
  )
}
