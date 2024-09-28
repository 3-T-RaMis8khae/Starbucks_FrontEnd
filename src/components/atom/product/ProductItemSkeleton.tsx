import React from "react"
import { Skeleton } from "@/components/ui/skeleton"

function ProductItemSkeleton() {
	return (
		<div className="flex-1 flex flex-col justify-center items-center gap-4">
			<Skeleton className="w-full h-full aspect-square" />
			<Skeleton className="w-16 h-6" />
		</div>
	)
}

export default ProductItemSkeleton
