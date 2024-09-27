"use client"

import {
	QueryClient,
	QueryClientProvider,
	useQuery
} from "@tanstack/react-query"
import React from "react"

const queryClient = new QueryClient()

export interface QueryProviderProps {
	children: React.ReactNode
}

export const QueryProvider = ({ children }: QueryProviderProps) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}
