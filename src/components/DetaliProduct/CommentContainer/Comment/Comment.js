export function Comment({ params }) {
  return (
    <>
      <div>
        <hr />
        <h4>
          👤
          {params.author.name}
        </h4>
      </div>
      <div>
        <p>
          Комментарий:
          {' '}
          {params.text}
        </p>
      </div>
    </>
  )
}
