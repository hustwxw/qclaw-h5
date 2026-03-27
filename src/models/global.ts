import { useState } from 'react';

export default {
  namespace: 'global',

  state: {
    user: null,
    token: null,
    loading: false,
  },

  effects: {
    *login({ payload }, { call, put }) {
      yield put({ type: 'setState', payload: { loading: true } });
      // 这里可以调用登录接口
      // const res = yield call(loginApi, payload);
      yield put({ type: 'setState', payload: { loading: false } });
    },
  },

  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
