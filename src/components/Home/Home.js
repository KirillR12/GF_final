/* eslint-disable jsx-a11y/alt-text */
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export function Home() {
  const token = useSelector((store) => store.user.token)

  return (
    <div>
      <h1>Здравствуйте, вас приветствует магазин DogFood</h1>
      {token
        ? (
          <button className="btn btn-warning" type="submit">
            <Link to="/catalog">Перейти в каталог</Link>
          </button>
        ) : (
          <>
            <h2>Для просмотра каталога вам требуется авторизироваться:</h2>
            <div className={styles.btnLink}>
              <Link className="btn btn-warning" to="/signin">Авторизироваться</Link>
              <hr />
              <Link className="btn btn-warning" to="/signup">Зарегистрироваться</Link>
            </div>
          </>
        )}
      <div className={styles.containerHome}>

        <img className={styles.imgHome} src="https://feedsmart.ru/sites/default/files/articles/sutochnaya-norma-suhogo-korma-i-konservov-dlya-sobak.jpg" />
        <div>
          <h6>
            Лакомства для собак в нашей стране представлены в основном зарубежными брендами,
            особенно в сегменте качественных продуктов —
            не только безопасных для здоровья питомцев,
            но и полезных.
            Преимущества собачьих лакомств,
            сделанных промышленным способом, в том,
            что они полностью готовы к употреблению.
            При этом современные палочки,
            снеки и другие звериные «деликатесы» имеют в своем составе витамины,
            микроэлементы и полезные минералы,
            что положительно сказывается на здоровье четвероногих друзей
          </h6>
        </div>
      </div>
    </div>
  )
}
