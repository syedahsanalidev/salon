import axios from 'axios'
export async function login(body){
    return await axios.post("https://624038750adaf66ad74af3de.mockapi.io/blog",body);
    
   
};
