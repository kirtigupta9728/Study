
import { instance } from './api';

export function sendGetRequest(url) {
    // console.log("params::", url)
    return instance
        .get(url)
        .then((response) => {
            // console.log("get-api.response.status::::", response)
            return {
                status: response?.status,
                data: response?.data,
                message: ''
            };
        })
        .catch((err) => {
             console.log(err);
            if (err?.response === undefined) {
                return {
                    status: '400',
                    data: '',
                    message: 'something went wrong!'
                };;
            } else {
                return {
                    status: err?.response?.status,
                    data: '',
                    message: err?.response?.data?.message || err?.response?.data?.msg || 'something went wrong!'
                };
            }
        })
        .finally(() => {
            // hide loader
            // dispatch(toggleLoader());
        });
}

export function sendPostRequest(url, body, contentType) {
    console.log('url',url,body)
    let config = {}
    if (contentType) {
        config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    }
    // console.log("url:::", url,'contentType', contentType)
    return instance
        .post(url, body, config)
        .then((response) => {
             console.log("post-api-response::::", response)
            return {
                status: response?.status,
                data: response?.data,
                message: response?.data?.message || response?.data?.msg || ''
            };
        })
        .catch((err) => {
             console.log('post-api-error', err);
            if (err.response === undefined) {
                return {
                    status: '400',
                    data: '',
                    message: 'something went wrong!'
                };;
            } else {
                return {
                    status: err?.response?.status,
                    data: '',
                    message: 'Something went wrong'//err.response.data.message
                };
            }


        })
        .finally(() => {
            // hide loader
            //   dispatch(toggleLoader());
        });
}

// export function sendGetRequestWithParms(url, params) {
//     //console.log('url', url, params)
//     return instance
//         .get(url, {
//             params: { ...params },
//             paramsSerializer: (params) => {
//                 // Sample implementation of query string building
//                 let result = '';
//                 Object.keys(params).forEach(key => {
//                     result += `${key}=${encodeURIComponent(params[key])}&`;
//                 });
//                 return result.substring(0, result.length - 1);
//             }
//         })
//         .then((response) => {
//             // console.log("response.data", response)
//             return response;
//         })
//         .catch((err) => {
//             // console.log('post-api-error', err);
//             if (err.response === undefined) {
//                 return {
//                     status: '400',
//                     data: '',
//                     message: 'something went wrong!'
//                 };
//             } else {
//                 return {
//                     status: err?.response?.status,
//                     data: '',
//                     message: 'Something went wrong'//err.response.data.message
//                 };
//             }
//         })
// }

export function sendDeletetRequest(url, params) {
    return instance
        .delete(url, {
            params: { ...params }
        })
        .then((response) => {
            // console.log("response.data", response.data)
            return response;
        })
        .catch((err) => {
            // console.log('post-api-error', err);
            if (err.response === undefined) {
                return {
                    status: '400',
                    data: '',
                    message: 'something went wrong!'
                };;
            } else {
                return {
                    status: err?.response?.status,
                    data: '',
                    message: 'Something went wrong'//err.response.data.message
                };
            }


        })
        .finally(() => {
            // hide loader
            //   dispatch(toggleLoader());
        });
}
// export function sendPutRequest(url, params) {
//     return instance
//         .put(url, params)
//         .then((response) => {
//             // console.log("response.data", response?.data)
//             return response;
//         })
//         .catch((err) => {
//             // console.log('post-api-error', err);
//             if (err.response === undefined) {
//                 return {
//                     status: '400',
//                     data: '',
//                     message: 'something went wrong!'
//                 };;
//             } else {
//                 return {
//                     status: err?.response?.status,
//                     data: '',
//                     message: 'Something went wrong'//err.response.data.message
//                 };
//             }


//         })
//         .finally(() => {
//             // hide loader
//             //   dispatch(toggleLoader());
//         });
// };

// export function sendPostRequestWithParams(url, body, params) {
//     return instance
//         .post(url, body, {
//             params: { ...params }
//         })
//         .then((response) => {
//             // console.log("response.data", response?.data)
//             return {
//                 status: response?.status,
//                 data: response?.data,
//                 message: ''
//             };
//         })
//         .catch((err) => {
//             // console.log('post-api-error', err);
//             if (err.response === undefined) {
//                 return {
//                     status: '400',
//                     data: '',
//                     message: 'something went wrong!'
//                 };;
//             } else {
//                 return {
//                     status: err?.response?.status,
//                     data: '',
//                     message: 'Something went wrong'//err.response.data.message
//                 };
//             };
//         });
// };
