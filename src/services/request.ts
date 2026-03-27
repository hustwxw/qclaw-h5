// 请求封装
import { Toast } from 'antd-mobile';

const BASE_URL = '/api';

interface RequestOptions {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: any;
  headers?: Record<string, string>;
}

// 简单的请求封装
export async function request<T = any>(options: RequestOptions): Promise<T> {
  const { url, method = 'GET', data, headers = {} } = options;

  const token = localStorage.getItem('token');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: method !== 'GET' ? JSON.stringify(data) : undefined,
    });

    const result = await response.json();

    if (response.ok) {
      return result;
    } else {
      Toast.show({
        content: result.message || '请求失败',
        icon: 'fail',
      });
      throw new Error(result.message);
    }
  } catch (error: any) {
    Toast.show({
      content: error.message || '网络错误',
      icon: 'fail',
    });
    throw error;
  }
}

// GET 请求
export const get = <T = any>(url: string, params?: any) => {
  const query = params ? `?${new URLSearchParams(params)}` : '';
  return request<T>({ url: `${url}${query}` });
};

// POST 请求
export const post = <T = any>(url: string, data?: any) => {
  return request<T>({ url, method: 'POST', data });
};
