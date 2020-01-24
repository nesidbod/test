import axios from 'axios'
const serviceUrl = process.env.REACT_APP_MM_API_URL

export const getInvoiceHistory = () => {
  return axios
    .get(serviceUrl + '/setting/invoice_history')
    .then(response => response.data)
}
