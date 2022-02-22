import axios from "axios";
import { baseUrl } from "config";
import { ACTIONS } from "redux/actionTypes";


const defaultHeader = { 'Content-Type': 'application/json' };

export const AddCategory = (data) =>{
    const url = `${baseUrl}/category`;

    const data1 = {
        "category":data.category,
        "subcategory":data.subcategory
    }

    return async function(dispatch, getState) {
        const requestBody = {
            method:'post',
            url: url,
            headers: defaultHeader,
            data:data1,
            timeout: 30000,
            json: true
          };

        const response = await axios(requestBody);

        console.log("response inside login ", response);
        let payload = response.data;
        dispatch({type:ACTIONS.ADD_CATEGORY, payload: payload})
    }
}