import axios from 'axios';

const port = 3004;
const http = `http://localhost:${port}/`;
export const getData = (category) => {
  return axios
    .get(http + category)
    .then((res) => {
      return {data: res, error: null};
    })
    .catch((err) => {
      return {data: null, error: err};
    });
};

export const postData = (category, data) => {
  return axios
    .post(http + category, {text: data})
    .then((res) => {
      return {data: res, error: null};
    })
    .catch((err) => {
      console.log(err);
      return {data: null, error: err};
    });
};
export const deleteData = (category, id) => {
  return axios
    .delete(http + category + '/' + id)
    .then((res) => {
      return {data: res, error: null};
    })
    .catch((err) => {
      console.log(err);
      return {data: null, error: err};
    });
};
