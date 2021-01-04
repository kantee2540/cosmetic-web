import axios from 'axios'
import { rootURL } from './Variable'

function beautySetLimit(limit, callback, errorcallback){
    let url = rootURL + "beautyset"

    axios({
        url: url,
        params:{
            limit: limit
        }
    })
    .then((response)=>{
        callback(response.data)
    })
    .catch((error)=>{
        errorcallback(error)
    })
}

export { beautySetLimit }