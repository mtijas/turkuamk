/**
 * TUAS JS-21 course Exercise 6 Part 6 JavaScript
 * As done during the lecture, so not my code.
 */

const url = 'https://my-json-server.typicode.com/typicode/demo/comments';

const getWithPromises = url => fetch(url).then(resp => resp.json());

const getWithAsyncAwait = async (url) => {
  const resp = await fetch(url);
  return await resp.json();
};

getWithPromises(url)
  .then((json) => {
    console.log(json);
    return json;
});

getWithAsyncAwait(url)
  .then((json) => {
    console.log(json);
    return json;
});
