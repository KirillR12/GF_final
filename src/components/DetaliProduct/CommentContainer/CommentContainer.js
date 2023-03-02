import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { getCommentsByProductID } from '../../../Api'
import { Comment } from './Comment/Comment'

export const GET_COMMENTS_QUERY_KEY = 'GET_COMMENTS_QUERY_KEY'

export function CommentContainer({ id }) {
  const { token } = useSelector((store) => store.user)

  const {
    data, isSuccess,
  } = useQuery({
    queryKey: [GET_COMMENTS_QUERY_KEY, id, token],
    queryFn: getCommentsByProductID,
  })

  if (isSuccess) {
    const comments = data.map((elem) => <Comment params={elem} />)
    return (
      [comments]
    )
  }
}
