import axios from "axios"
const tODOJsonPlaceholder = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function todojsonplaceholder_get_todos_list(payload) {
  return tODOJsonPlaceholder.get(`/todos/`)
}
export const apiService = { todojsonplaceholder_get_todos_list }
