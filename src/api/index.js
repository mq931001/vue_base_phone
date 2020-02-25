import request from '@/utils/request'

export function login(params) {
    return request({
        url: '/api/homescreen/homescreenlist',
        method: 'post',
        data: params
    })
}