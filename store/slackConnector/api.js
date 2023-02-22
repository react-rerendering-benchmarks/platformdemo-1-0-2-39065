import axios from "axios"
const slackConnector = axios.create({
  baseURL: "https://cb-sales-demos-ent--38169.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function slackconnector_get__read(payload) {
  return slackConnector.post(
    `/modules/slack/service/create-channel/`,
    payload.data
  )
}
export const apiService = { slackconnector_get__read }
