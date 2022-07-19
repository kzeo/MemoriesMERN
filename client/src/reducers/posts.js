export default (posts = [], action) => {
  switch (action.type) {
    case 'UPADATE':
      return posts.map((post) =>
        post._id == action.payload._id ? action.payload : post
      )
    case 'FETCH_ALL':
      return [...posts, action.payload]
    case 'CREATE':
      return posts
    default:
      return posts
  }
}
