
import Axios from 'axios'

export const axios = Axios.create({
    baseURL : 'https://api.apilayer.com/exchangerates_data/'
})