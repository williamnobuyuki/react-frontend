import axios from 'axios'
const BASE_URL = 'http://localhost:8000/api'

export function getSumario() {
    const request = axios.get(`${BASE_URL}/cicloPagamentos/sumario`)
    return {
        type: 'PAGAMENTO_SUMARIO_FETCHED',
        payload: request
    }
}