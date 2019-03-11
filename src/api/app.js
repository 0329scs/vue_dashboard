import axios from 'axios'

const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 5000
})

export const userLogin = (data) => {   // expoert function userLogin(data) {
  return service({
    url: '/login',
    method: 'post',
    data,               // = data: data
  })
}

export const registration = (data) => {
  return service.post('/registration', data)
}

export const noticeList = (params) => {   // expoert function userLogin(data) {
    // return service({
    //   url: '/notice/list',
    //   method: 'get',            // = data: data
    // })
    return service.get('/notice/list', {params})
  }
export const noticeDetail = (data) => {   // expoert function userLogin(data) {
  return service({
    url: `/notice/detail/${data}`,
    method: 'get',            // = data: data
  })
}
export const noticeRegister = (data) => {   // expoert function userLogin(data) {
  return service({
    url: `/notice/register`,
    method: 'post',
    data            // = data: data
  })
}
export const noticeModify = (data) => {   // expoert function userLogin(data) {
  return service({
    url: `/notice/modify`,
    method: 'post',
    data            // = data: data
  })
}
export const noticeDelete = (data) => {
  return service({
    url: `/notice/delete`,
    method: `post`,
    data
  })
}