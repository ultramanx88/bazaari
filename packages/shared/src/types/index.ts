export type ServiceType = 'food' | 'hotel' | 'spa' | 'visa' | 'restaurant' | 'healthcare' | 'realestate' | 'marketplace';

export interface User {
  id: number;
  email: string;
  name: string;
  phone?: string;
  role: 'customer' | 'vendor' | 'admin' | 'rider';
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Service {
  id: number;
  name: string;
  type: ServiceType;
  description?: string;
  icon: string;
  color: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Vendor {
  id: number;
  userId: number;
  user?: User;
  businessName: string;
  businessType: ServiceType;
  description?: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  logo?: string;
  images: string[];
  rating: number;
  reviewCount: number;
  isVerified: boolean;
  isActive: boolean;
  openingHours: any;
  location?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ServiceItem {
  id: number;
  vendorId: number;
  vendor?: Vendor;
  name: string;
  description?: string;
  price: number;
  duration?: number; // for bookable services
  images: string[];
  category?: string;
  isAvailable: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Booking {
  id: number;
  userId: number;
  user?: User;
  vendorId: number;
  vendor?: Vendor;
  serviceItemId: number;
  serviceItem?: ServiceItem;
  bookingDate: string;
  startTime?: string;
  endTime?: string;
  guests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface DeliveryOrder {
  id: number;
  userId: number;
  user?: User;
  vendorId: number;
  vendor?: Vendor;
  riderId?: number;
  rider?: User;
  items: OrderItem[];
  deliveryAddress: string;
  deliveryFee: number;
  total: number;
  status: string;
  estimatedTime?: number;
  createdAt: string;
  updatedAt: string;
}

export interface Rider {
  id: number;
  userId: number;
  user?: User;
  vehicleType: string;
  licenseNo?: string;
  isAvailable: boolean;
  isVerified: boolean;
  rating: number;
  totalOrders: number;
  currentLat?: number;
  currentLng?: number;
  createdAt: string;
  updatedAt: string;
}

// Legacy types for marketplace
export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  stock: number;
  categoryId: number;
  category?: Category;
  images: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  id: number;
  userId: number;
  user?: User;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  id: number;
  orderId: number;
  productId: number;
  product?: Product;
  quantity: number;
  price: number;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}