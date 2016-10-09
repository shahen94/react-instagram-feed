export const POSTS_API = () => 'https://jsonplaceholder.typicode.com/photos';
export const POSTS_ITEM_API = (id) => `https://jsonplaceholder.typicode.com/photos/${id}`;
export const USERS_API = (username = '') =>  `https://jsonplaceholder.typicode.com/users`;

export default class FeedAPIs {
  static fetchPosts(format = 'json') {
    return fetch(POSTS_API())
      .then((res) => res[format]());
  }

  static fetchSearchResult(query, format = 'json') {
    return fetch(USERS_API())
      .then((res) => res[format]());
  }

  static getItem(id, format = 'json') {
    return fetch(POSTS_ITEM_API(id))
      .then((res) => res[format]());
  }
}
