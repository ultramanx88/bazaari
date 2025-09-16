export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/v1/auth/login',
    REGISTER: '/api/v1/auth/register',
    REFRESH: '/api/v1/auth/refresh',
  },
  USERS: {
    PROFILE: '/api/v1/users/profile',
  },
  PRODUCTS: {
    LIST: '/api/v1/products',
    DETAIL: (id: number) => `/api/v1/products/${id}`,
    CREATE: '/api/v1/products',
    UPDATE: (id: number) => `/api/v1/products/${id}`,
    DELETE: (id: number) => `/api/v1/products/${id}`,
  },
  ORDERS: {
    LIST: '/api/v1/orders',
    DETAIL: (id: number) => `/api/v1/orders/${id}`,
    CREATE: '/api/v1/orders',
  },
} as const;

export const USER_ROLES = {
  CUSTOMER: 'customer',
  VENDOR: 'vendor',
  ADMIN: 'admin',
} as const;

export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
} as const;