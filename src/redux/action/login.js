import axios from "axios";
import { baseUrl } from "config";
import { ACTIONS } from "redux/actionTypes";

const defaultHeader = { 'Content-Type': 'application/json' };

export const login = (data, goto) =>{
    const url = `${baseUrl}/users/authenticate`;

    const data1 = {
        "username":data.email,
        "password":data.password,
        "userType": "admin"
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
        dispatch({type:ACTIONS.LOGIN, payload: payload})
        goto(response.status,data1.userType)
    }
}