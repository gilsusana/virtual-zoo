import axios from "axios";

export const Animals = () => {

    const url = 'https://zoo-animal-api.herokuapp.com';
    
    const getList = async (num) => {
        const res = await axios.get(`${url}/animals/rand/${num}`);
        return res;
    };

    return {
        getList
    }

}