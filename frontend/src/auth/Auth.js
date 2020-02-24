import cookieController from './CookieController';


const auth = {
    authHeader: {
        access() {
            if (cookieController.getCookie()) {
                return {
                    Authorization: `Bearer ${cookieController.getCookie('powwow_cookie').access}`
                }
            } else {
                return {}
            }
        },
        refresh() {
            if (cookieController.getCookie()) {
                return {
                    Authorization: `Bearer ${cookieController.getCookie('powwow_cookie').refresh}`
                }
            } else {
                return {}
            }
        }
    },
    authData: {
        access() {
            if (cookieController.getCookie()) {
                return cookieController.getCookie('powwow_cookie').access
            } else {
                return ''
            }
        },
        refresh() {
            if (cookieController.getCookie()) {
                return cookieController.getCookie('powwow_cookie').refresh
            } else {
                return ''
            }
        }
    }
}

export default auth