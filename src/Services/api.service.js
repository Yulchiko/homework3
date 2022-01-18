const baseURL = 'https://jsonplaceholder.typicode.com';

export const urls = {
    users: '/users',
    posts: '/posts',
    comments: '/comments',

}


export default function ApiService(endpoint) {
    this.getAllData = () => fetch(`${baseURL}/${endpoint}`)
        .then(value => value.json())
    this.getSingleData = (id) => fetch(`${baseURL}/${endpoint}/${id}`)
        .then(value => value.json())
    this.getUserPosts = (userId) => fetch(`${baseURL}/users/${userId}/posts`)
        .then(value => value.json())
    this.getUserComments = (postId) => fetch(`${baseURL}/posts/${postId}/comments`)
        .then(value => value.json())
}
