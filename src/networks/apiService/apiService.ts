const getConfig = (configService: any, params?: any) => {
    const config = {
        method: configService.method,
        headers: configService.headers,
        body: configService.body
    }

    return config;

}

const fetchSuccess = (res: any, configService?: any) => {
    return res.json();
};

const fetchError = (error: any, configService?: any) => {
    console.log('error', { error });
    return false;
};


const apiService = async (type: string, url: string, params: any, configService: any) => {
    const config = getConfig(configService, params);


    const baseUrl = url ? `http://localhost:1323${url}` : 'http://localhost:1323'
    // const baseUrl = url ? `${process.env.COURTFIELD_API_URL}${url}` : `${process.env.COURTFIELD_API_URL}`
    switch (type) {
        case 'get':
            return fetch(baseUrl, config)
                .then(res => fetchSuccess(res))
                .catch(err => fetchError(err))
        case 'post':
            return fetch(baseUrl, config)
                .then(res => fetchSuccess(res))
                .catch(err => fetchError(err))
        case 'put':
            return fetch(baseUrl, config)
                .then(res => fetchSuccess(res))
                .catch(err => fetchError(err))
        case 'patch':
            return fetch(baseUrl, config)
                .then(res => fetchSuccess(res))
                .catch(err => fetchError(err))
        case 'delete':
            return fetch(baseUrl, config)
                .then(res => fetchSuccess(res))
                .catch(err => fetchError(err))

        default:
            return false;
    }
}

export default (configService = {}) => {
    return {
        get: (url?: string, params?: any) => apiService('get', url ?? "", params, configService),
        post: (url?: string, params?: any) => apiService('post', url ?? "", params, configService),
        put: (url?: string, params?: any) => apiService('put', url ?? "", params, configService),
        patch: (url?: string, params?: any) => apiService('patch', url ?? "", params, configService),
        delete: (url?: string, params?: any) => apiService('delete', url ?? "", params, configService),
    };
};