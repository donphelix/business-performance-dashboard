"use client";

import {QueryClient, QueryClientProvider} from "react-query";
import React from "react";
import {Provider} from "@/components/ui/provider";

const queryClient = new QueryClient();

export default function ClientProviders({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider>{children}</Provider>
        </QueryClientProvider>
    );
}
