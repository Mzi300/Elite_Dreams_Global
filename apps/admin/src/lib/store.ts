import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// --- ENTERPRISE INTERFACES ---

export interface Enquiry {
  id: string;
  name: string;
  email: string;
  industry: string;
  category: string;
  message: string;
  timestamp: string;
  status: 'NEW' | 'IN_PROGRESS' | 'RESOLVED' | 'ESCALATED';
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'CLOUD' | 'SECURITY' | 'SOFTWARE' | 'NEWS';
  date: string;
  author: string;
  image?: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'USER' | 'ADMIN';
  timestamp: string;
}

export interface Product {
    id: string;
    name: string;
    category: 'DEVICES' | 'SECURITY_SYSTEMS' | 'ACCESSORIES' | 'SOVEREIGN_NODE';
    price: number;
    stock: number;
    description: string;
    status: 'In Stock' | 'Low Stock' | 'Out of Stock';
    specs: Record<string, string>;
}

export interface Order {
    id: string;
    customerId: string;
    customerName: string;
    items: CartItem[];
    total: number;
    status: 'PENDING' | 'DEPLOYED' | 'FULFILLED' | 'CANCELLED';
    timestamp: string;
}

export interface Customer {
    id: string;
    name: string;
    contact: string;
    email: string;
    type: 'ENTERPRISE' | 'STARTUP' | 'GOVERNMENT' | 'INDIVIDUAL';
    joined: string;
    totalSpend: number;
}

export interface GlobalSettings {
    maintenanceMode: boolean;
    brandingName: string;
    apiStatus: 'OPERATIONAL' | 'DEGRADED' | 'DOWN';
    primaryColor: string;
    securityLevel: 'STANDARD' | 'PARANOID' | 'MISSION_CRITICAL';
}

// --- STORE STATE ---

interface AdminState {
  isAdmin: boolean;
  enquiries: Enquiry[];
  cart: CartItem[];
  blogPosts: BlogPost[];
  chatMessages: ChatMessage[];
  locale: 'EN' | 'AR' | 'FR';
  
  // Enterprise Data
  products: Product[];
  orders: Order[];
  customers: Customer[];
  settings: GlobalSettings;
  
  // Actions
  login: (password: string) => boolean;
  logout: () => void;
  setLocale: (locale: 'EN' | 'AR' | 'FR') => void;
  
  // Data Actions
  addEnquiry: (enquiry: Omit<Enquiry, 'id' | 'timestamp' | 'status'>) => void;
  updateEnquiryStatus: (id: string, status: Enquiry['status']) => void;
  deleteEnquiry: (id: string) => void;
  
  addToCart: (product: any) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  
  addBlogPost: (post: Omit<BlogPost, 'id' | 'date'>) => void;
  updateBlogPost: (id: string, post: Partial<BlogPost>) => void;
  deleteBlogPost: (id: string) => void;
  
  sendMessage: (text: string, sender: 'USER' | 'ADMIN') => void;
  clearChat: () => void;

  // New Enterprise CRUD Actions
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  
  placeOrder: (order: Omit<Order, 'id' | 'timestamp' | 'status'>) => void;
  updateOrderStatus: (id: string, status: Order['status']) => void;
  
  addCustomer: (customer: Omit<Customer, 'id' | 'joined' | 'totalSpend'>) => void;
  updateCustomer: (id: string, customer: Partial<Customer>) => void;
  
  updateSettings: (settings: Partial<GlobalSettings>) => void;
}

// --- INITIAL DATA ---

const INITIAL_PRODUCTS: Product[] = [
    { 
        id: '1', name: 'EliteBook Pro X1', category: 'DEVICES', price: 1499.00, stock: 45, status: 'In Stock',
        description: 'Elite Enterprise Laptop.', specs: { cpu: 'Elite Silicon', ram: '64GB' }
    },
    { 
        id: '2', name: 'Elite Shield Security Cam', category: 'SECURITY_SYSTEMS', price: 299.00, stock: 120, status: 'In Stock',
        description: 'Spectral AI Threat Detection.', specs: { res: '4K', fov: '180' }
    }
];

const INITIAL_CUSTOMERS: Customer[] = [
    { id: 'CUST-001', name: 'Acme Corp', contact: 'Alice Johnson', email: 'alice@acme.com', type: 'ENTERPRISE', totalSpend: 45200, joined: '2025-06-15' },
    { id: 'CUST-002', name: 'Global Health', contact: 'Bob Smith', email: 'bsmith@globalhealth.org', type: 'ENTERPRISE', totalSpend: 12500, joined: '2026-01-10' }
];

export const useAdminStore = create<AdminState>()(
  persist(
    (set, get) => ({
      isAdmin: false,
      enquiries: [],
      cart: [],
      blogPosts: [],
      chatMessages: [],
      locale: 'EN',
      
      products: INITIAL_PRODUCTS,
      orders: [],
      customers: INITIAL_CUSTOMERS,
      settings: {
          maintenanceMode: false,
          brandingName: 'Elite Dreams',
          apiStatus: 'OPERATIONAL',
          primaryColor: '#0ea5e9',
          securityLevel: 'STANDARD'
      },

      login: (password) => {
        if (password === 'EliteAdmin2026') {
          set({ isAdmin: true });
          return true;
        }
        return false;
      },

      logout: () => set({ isAdmin: false }),
      setLocale: (locale) => set({ locale }),

      addEnquiry: (data) => {
        const newEnquiry: Enquiry = {
          ...data,
          id: Math.random().toString(36).substring(2, 9),
          timestamp: new Date().toISOString(),
          status: 'NEW',
        };
        set((state) => ({ enquiries: [newEnquiry, ...state.enquiries] }));
      },

      updateEnquiryStatus: (id, status) => {
        set((state) => ({
          enquiries: state.enquiries.map((e) => e.id === id ? { ...e, status } : e),
        }));
      },

      deleteEnquiry: (id) => {
        set((state) => ({
          enquiries: state.enquiries.filter((e) => e.id !== id),
        }));
      },

      addToCart: (product) => {
        set((state) => {
          const existing = state.cart.find((item) => item.id === product.id);
          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
              ),
            };
          }
          return {
            cart: [...state.cart, { ...product, quantity: 1 }],
          };
        });
      },

      removeFromCart: (id) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        }));
      },

      clearCart: () => set({ cart: [] }),

      addBlogPost: (data) => {
        const newPost: BlogPost = {
          ...data,
          id: Math.random().toString(36).substring(2, 9),
          date: new Date().toISOString().split('T')[0],
        };
        set((state) => ({ blogPosts: [newPost, ...state.blogPosts] }));
      },
      updateBlogPost: (id, data) => {
        set((state) => ({
          blogPosts: state.blogPosts.map((p) => p.id === id ? { ...p, ...data } : p),
        }));
      },
      deleteBlogPost: (id) => {
        set((state) => ({
          blogPosts: state.blogPosts.filter((p) => p.id !== id),
        }));
      },

      sendMessage: (text, sender) => {
        const msg: ChatMessage = {
          id: Math.random().toString(36).substring(2, 9),
          text,
          sender,
          timestamp: new Date().toISOString(),
        };
        set((state) => ({ chatMessages: [...state.chatMessages, msg] }));
      },
      clearChat: () => set({ chatMessages: [] }),

      // --- ENTERPRISE CRUD ---

      addProduct: (data) => {
          const newProduct: Product = {
              ...data,
              id: Math.random().toString(36).substring(2, 9),
          };
          set((state) => ({ products: [...state.products, newProduct] }));
      },
      updateProduct: (id, data) => {
          set((state) => ({
              products: state.products.map(p => p.id === id ? { ...p, ...data } : p)
          }));
      },
      deleteProduct: (id) => {
          set((state) => ({
              products: state.products.filter(p => p.id !== id)
          }));
      },

      placeOrder: (data) => {
          const newOrder: Order = {
              ...data,
              id: `ORD-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
              timestamp: new Date().toISOString(),
              status: 'PENDING'
          };
          set((state) => ({ orders: [newOrder, ...state.orders] }));
      },
      updateOrderStatus: (id, status) => {
          set((state) => ({
              orders: state.orders.map(o => o.id === id ? { ...o, status } : o)
          }));
      },

      addCustomer: (data) => {
          const newCust: Customer = {
              ...data,
              id: `CUST-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
              joined: new Date().toISOString().split('T')[0],
              totalSpend: 0
          };
          set((state) => ({ customers: [...state.customers, newCust] }));
      },
      updateCustomer: (id, data) => {
          set((state) => ({
              customers: state.customers.map(c => c.id === id ? { ...c, ...data } : c)
          }));
      },

      updateSettings: (data) => {
          set((state) => ({
              settings: { ...state.settings, ...data }
          }));
      }
    }),
    {
      name: 'elite-dreams-admin-storage',
    }
  )
);
