import client from '../api/axiosConfig';
import qs from 'qs';
import axios from 'axios';

const user = localStorage.getItem('userId');
console.log(user);

const getRequest = async (path, params) => {
    try {
        params = qs.stringify(params);
        const data = await client.get(path + params);
        return data;
    } catch (e) {
        console.log(e);
        return [];
    }
};

const postFormReqest = async (path, body) => {
    try {
        const data = await client.post(path, body, {
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data",
            },
        });
        return data;
    } catch (e) {
        console.log(e);
    }
};

const postJsonReqest = async (path, body) => {
    try {
        const data = await client.post(path, body, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        return data;
    } catch (e) {
        console.log(e);
    }
};

const GetJsonUserReqest = async (path) => {
    try {
        const data = await client.get(path, {
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data",
                memberPk: user,
            },
        });
        return data;
    } catch (e) {
        console.log(e);
    }
};

const GetJsonCategoryReqest = async (path) => {
    try {
        const data = await client.get(path, {
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data",
                memberPk: user,
            },
        });
        return data;
    } catch (e) {
        console.log(e);
    }
};

const postJsonUserReqest = async (path, body) => {
    try {
        const data = await client.post(path, body, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                memberPk: user,
            },
        });
        return data;
    } catch (e) {
        console.log(e);
    }
};

const putJsonReqest = async (path, body) => {
    try {
        const data = await client.put(path, body, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                memberPk: user,
            },
        });
        return data;
    } catch (e) {
        console.log(e);
    }
};

const patchJsonReqest = async (path, body) => {
    try {
        const data = await client.patch(path, body, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        return data;
    } catch (e) {
        console.log(e);
    }
};

const deleteJsonReqest = async (path) => {
    try {
        const data = await client.delete(path, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        return data;
    } catch (e) {
        console.log(e);
    }
};

const Api = {
    // ????????? ?????? --------------------------------------------------------------------------------
    // ?????????
    postLogin: async (info) => {
        return await postJsonReqest("/login", info);
    },
    // ????????? ?????? ?????? ??????
    postEmail: async (email) => {
        return await postJsonReqest("/email", email);
    },
    // ????????? ?????? ?????? ??????
    postAuthEmail: async (email, emailAuthNumber) => {
        return await postJsonReqest("/email/auth", { email, emailAuthNumber });
    },
    // ????????????
    postSignup: async (info) => {
        return await postJsonReqest("/signup/email", info);
    },
    // ????????????
    getWithdrawal: async () => {
        return await getRequest("/memberout");
    },
    // ????????? ??????
    postFindID: async (info) => {
        return await postJsonReqest(`/idauth`, info);
    },
    // ???????????? ??????
    postChangePW: async (info) => {
        return await postJsonReqest(`/updatepw`, info);
    },
    // ????????? ?????? ?????????: ???????????? ??????
    postKakaoCode: async (info) => {
        return await postJsonReqest(`/login/kakao`, info);
    },
    // ????????? ?????? ????????????: ?????? ??????
    postKakaoLogin: async (info) => {
        return await postJsonReqest(`/signup/kakao`, info);
    },
    // ????????? ?????? ?????????: ???????????? ??????
    postGithubCode: async (info) => {
        return await postJsonReqest(`/login/github`, info);
    },
    // ????????? ?????? ????????????: ?????? ??????
    postGithubLogin: async (info) => {
        return await postJsonReqest(`/signup/github`, info);
    },

    // Mypage--------------------------------------------------------------------------------
    // ??? ?????? ??????
    getReadMyInfo: async () => {
        return await getRequest(`/my-info`);
    },
    // ??? ?????? ??????
    putUpdateMyInfo: async (info) => {
        return await putJsonReqest(`/my-info-update`, info);
    },

    // ????????????--------------------------------------------------------------------------------
    // ???????????? ??????
    postAddCategory: async (info) => {
        return await postJsonReqest(`/categories`, info);
    },
    // ???????????? ??????
    patchUpdateMyInfo: async (id, info) => {
        return await patchJsonReqest(`/categories/${id}`, info);
    },
    // ???????????? ??????
    deleteCategory: async (id) => {
        return await deleteJsonReqest(`/categories/${id}`);
    },
    // ???????????? ?????? ??????
    getReadCategory: async (id) => {
        return await getRequest(`/users/${id}/categories`);
    },

    // ??????--------------------------------------------------------------------------------
    // ?????? ?????? ??????
    getTotalStatics: async (year) => {
        return await getRequest(`/mystatis/${year}`);
    },
    // ?????? ?????? ??????(id: ???????????? ID)
    getMiniStatics: async (id, year) => {
        return await getRequest(`/myboard/statis/${id}`);
    },

    // MyPage: ????????? ?????? ??? ???????????? ??????-----------------------------------------------------
    // ?????? ??? ??? ?????? ?????? 
    getMyPost_New: async (user) => {
        return await getRequest(`/my-info/boards?last=0`);
    },
    // ????????? ??? ??? ?????? ??????
    getHeartPost: async (account) => {
        return await getRequest(`/my-info/likes?last=0`);
    },
    // ???????????? ?????? ??????
    getLayoutList: async (info) => {
        return await getRequest(`/layouts`);
    },

    //????????? ??????-----------------------------------------------------
    //Layout
    getLayoutWrite: async (layout) => {
        return await postJsonUserReqest(`/layout`, JSON.stringify(layout));
    },
    getLayout: async (id) => {
        return await GetJsonUserReqest(`/layouts/${id}`);
    },
    getDeleteLayout: async (id) => {
        return await deleteJsonReqest(`/layouts/${id}`);
    },

    //Board
    getBoardWrite: async (board) => {
        return await postJsonUserReqest(`/board`, JSON.stringify(board));
    },
    getBoard: async (id) => {
        return await GetJsonUserReqest(`/board/${id}`);
    },
    getModifyBoard: async (id, board) => {
        return await putJsonReqest(`/board/${id}`, JSON.stringify(board));
    },
    getDeleteBoard: async (id) => {
        return await deleteJsonReqest(`/board/${id}`);
    },
    //comment
    getComment: async (id) => {
        return await getRequest(`/boards/${id}/comments?page=1&size=10`);
    },
    postComment: async (comment) => {
        return await postJsonUserReqest(`/comments/submitComment`, comment);
    },
    deleteComment: async (id) => {
        return await deleteJsonReqest(`/comments/deleteComment/${id}`);
    },
    modifyComment: async (id, comment) => {
        return await patchJsonReqest(`/comments/modifyComment/${id}`, comment);
    },

    //tag
    getTag: async (name) => {
        return await getRequest(`/tags?name=${name}`);
    },

    //Category
    getCategory: async (users) => {
        return await GetJsonCategoryReqest(`/users/${users}/categories`);
    },
    //mainPage
    getAllPost: async (last) => {
        return await getRequest(`/?last=${last}`);
    },
    getDetailBoard: async (id) => {
        return await getRequest(`/board/${id}`);
    },
    getRecentPost: async (last) => {
        return await getRequest(`/recent/?last=${last}`);
    },
    postLikePost: async (id) => {
        return await postJsonUserReqest(`/board/${id}`);
    },

    //Search
    getSearchResult: async (keyword, last) => {
        return await getRequest(`/search?keyword=${keyword}&last=${last}`);
    },

    //image
    getImagePost: async (image) => {
        return await postFormReqest(`upload`, image);
    },
    getImageRemovePost: async (image) => {
        return await deleteJsonReqest(`upload/${image}`);
    },

    postFiles: async (files) => {
        return await postFormReqest("/upload", files);
    },
    deleteFiles: async (files) => {
        return await deleteJsonReqest(`upload/${files}`);
    },
};

export default Api;
