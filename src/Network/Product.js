import axios from 'axios'
import { rootURL } from './Variable'

function getProduct(productId, callback, errorCallback){
    let url = rootURL + "product"

    axios({
        url: url,
        params:{
            productId: productId
        }
    })
    .then((response)=>{
        let data = response.data
        var exData = null
        if(data.length > 0){
            exData = data[0]
        }
        callback(exData)
    })
    .catch((error)=>{
        errorCallback(error)
    })
}

export { getProduct }