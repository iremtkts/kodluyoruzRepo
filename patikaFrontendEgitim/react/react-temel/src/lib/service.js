
import axios from "axios";

async function getData(id) {
    const { data: user } = await axios(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    console.log("user", user);
};

export default getData;