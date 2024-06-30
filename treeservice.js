// services/treeService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/tree';

export const createTree = async (depth) => {
  const response = await axios.post(API_URL, { depth });
  return response.data;
};

export const getTree = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
