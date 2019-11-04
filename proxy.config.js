import { enviroment } from './src/environments/environment'

const proxy = [
    {
        context: '/api/v1',
        target: enviroment.spreadHubApi,
        pathRewrite: { '^/api/v1': '' }
    }
];
module.exports = proxy;