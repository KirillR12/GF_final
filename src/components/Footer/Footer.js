/* eslint-disable jsx-a11y/anchor-is-valid */
import './Footer.css'

const year = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer-bs">
      <div className="row">

        <div className="col-md-3 footer-brand">
          <h2>
            <i className="fa-solid fa-dog">DogFood</i>
            <i className="fa-solid fa-dog" />
          </h2>
          <div className="info">
            <p>Магазин собачей еды DogFood</p>
            <p>
              ©
              {' '}
              {year}
              {' '}
              {' '}
              Безопасный сайт
            </p>
          </div>
        </div>

        <div className="col-md-3 footer-social">
          <ul>
            <li><a href="">Каталог</a></li>
            <li><a href="">Новости</a></li>
            <li><a href="#">Акции</a></li>
            <li><a href="#">Отзывы</a></li>
          </ul>
        </div>

        <div className="col-md-3 footer-social">
          <ul>
            <li><a href="#">Оплата и доставка</a></li>
            <li><a href="#">Часто спрашивают</a></li>
            <li><a href="#">Обратная связь</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </div>
        <div className="col-md-3 footer-nav">
          <ul className="pages">
            <li><a href="#"><p>Мы на связи:</p></a></li>
            <li><a href="#">+7 999 000 99 99</a></li>
            <li><a href="#">rtdkirill@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export {
  Footer,
}
