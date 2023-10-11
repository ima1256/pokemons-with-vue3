import axios from 'axios'
import {ref} from 'vue'

export const useGetData = () => {
   
    const data = ref(null)
    const loading = ref(true)
    const error = ref(false)

    const getData = async (url) => {

        loading.value = true

        try {

            const res = await axios.get(url)

            data.value = res.data
            
        } catch(e) {
            console.log('catch', e)
            error.value = 'Internal server error'
        } finally {
            loading.value = false
        }
    }

    return {
        getData,
        data,
        loading,
        error
    }
}