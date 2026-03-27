import { get, post } from './request';

// 用户相关
export const userApi = {
  // 登录
  login: (data: { username: string; password: string }) =>
    post('/user/login', data),

  // 获取用户信息
  getInfo: () => get('/user/info'),

  // 退出登录
  logout: () => post('/user/logout'),
};

// 示例接口
export const exampleApi = {
  // 获取列表
  getList: (params: { page: number; pageSize: number }) =>
    get('/list', params),

  // 获取详情
  getDetail: (id: string) => get(`/detail/${id}`),
};
