import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:"7fc3f18be2f9441e98fcce60b2bebc97"
    }
})