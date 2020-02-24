import {
    bake_cookie,
    read_cookie,
    delete_cookie
} from 'sfcookies';

export const cookieController = {
    addCookie(name, data) {
        bake_cookie(name, data, {
            path: "/"
        });
    },
    deleteCookie(name) {
        delete_cookie(name)
    },
    getCookie(name) {
        return read_cookie(name)
    }
}

export default cookieController;