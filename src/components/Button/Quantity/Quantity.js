/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
export function Quantity(props) {
  return (
    <>
      <button className="btn btn-danger" onClick={() => props.decrement()}>➖</button>
      <button className="btn btn-danger" onClick={() => props.increment()}>➕</button>
      <p>
        Кол-во:
        {' '}
        {props.value}
      </p>
    </>
  )
}
