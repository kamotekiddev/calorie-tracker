'use client';
import { ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

type QueryProviderProps = {
    children: ReactNode;
};

function QueryProvider({ children: chidlren }: QueryProviderProps) {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {chidlren}
        </QueryClientProvider>
    );
}

export default QueryProvider;
