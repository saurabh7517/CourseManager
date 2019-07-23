import { handleResponse, handleError } from "./apiUtils";
import * as apiConstants from './apiConstants';
const baseUrl = apiConstants.apiUrl + "/authors/";

export function getAuthors() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
