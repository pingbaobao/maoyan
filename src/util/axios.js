import axios from 'axios'
const ajax = (options) => {
    options.params = options.params || {}
       return  axios(options)
        .then(res => {
            return res.data      
        })
        .catch(err => {
            return err
        })
}
export default ajax