import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ContextProvider } from './context/CartContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppRoutes from "./routes/AppRoutes";
import './styles/globals.scss';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <AppRoutes />
      </ContextProvider>
    </QueryClientProvider>
  </StrictMode>,
)
