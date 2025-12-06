import axios from "axios";
const BASE_URL = "http://localhost:8000/";

// helper: read a cookie by name
const getCookie = (name) => {
    if (typeof document === "undefined") return null;
    const match = document.cookie.match(new RegExp('(^|; )' + name + '=([^;]*)'));
    return match ? decodeURIComponent(match[2]) : null;
};

export const getRequest = async (url, token = null) => {
    try {
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        const response = await axios.get(BASE_URL + url, { headers });
        return { data: response.data, status: response.status };

    } catch (error) {
        console.error("Error in get request:", error)
    }
}

export const postRequest = async (url, body = {}, token = null) => {
    try {
        const csrfToken = getCookie('csrftoken');
        console.log("csrf token_:", csrfToken)
        const headers = {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...(csrfToken ? { 'X-CSRFToken': csrfToken } : {}),
        };

        const response = await axios.post(BASE_URL + url, body, {
            headers,
            withCredentials: true
        });
        return { data: response.data, status: response.status };

    } catch (error) {
        if (error.response) {
            return {
                data: error.response.data,
                status: error.response.status,
            }
        };

        console.error("Unexpected Netword Error:", error);
        return { data: null, stats: 0};
    }

}