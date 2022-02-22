import axios from "axios";
import { ACTIONS } from "redux/actionTypes";
import { baseUrl } from "config";

export const logout = (goto) =>{
    const url = `${baseUrl}/users/revokeToken`;

    return async function(dispatch, getState) {
        // console.log("logout", getState())
        let token = getState().login.token

        const data1 = {
            "token": token.token,
            "domain": "yourohsc",
            "userId": token.userId
        }

        const requestBody = {
            method:'post',
            url: url,
            headers: { 'Content-Type': 'application/json' },
            data:data1,
            timeout: 30000,
            json: true
          };

        const response = await axios(requestBody);
        console.log("response inside logout ", response);
        let payload = response.data;//
        dispatch({type:ACTIONS.LOGOUT, payload: payload})
        goto()
    }
}