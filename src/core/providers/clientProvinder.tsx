'use client';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { SidebarProvider } from '@/src/components/ui/sidebar';
import ReactQueryClientProvinder from '@/src/hooks/query/queryClient';
import { ThemeProvider } from '@/src/hooks/theme/useTheme';
import { AlertProvinder } from '@/src/hooks/use-alert';
import { persistor,store } from '@/src/stores/store';

import { composeProviders } from './composeProviders';

const Providers = composeProviders([
  ({ children }) => <SidebarProvider defaultOpen={false}>{children}</SidebarProvider>,
  ({ children }) => <Provider store={store}>{children}</Provider>,
  ({ children }) => <PersistGate persistor={persistor}>{children}</PersistGate>,
  ThemeProvider,
  AlertProvinder,
  ReactQueryClientProvinder,
]);

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 900,
        }}
      />
    </Providers>
  );
}
