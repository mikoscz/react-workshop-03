import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Router } from './Router.jsx'
import { CartContext, CartContextProvider } from './components/CartContext'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartContextProvider>
        <Router />
      </CartContextProvider>
    </QueryClientProvider>
  </React.StrictMode>

)
