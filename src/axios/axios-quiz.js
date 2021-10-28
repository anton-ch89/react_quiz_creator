import axios from "axios";

export default axios.create({
    baseURL: 'https://quizcreator-880f2-default-rtdb.europe-west1.firebasedatabase.app/'
})