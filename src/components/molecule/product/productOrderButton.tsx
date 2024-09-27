"use client"

import React from "react"
import IconButton from "@/components/atom/icon/iconButton"

import { Button } from "@/components/ui/button"

import CartURL from "@/assets/svg/cart.svg?url"
import ProductOrderOption from "@/components/molecule/product/productOrderOption"

interface ProductOrderButtonProps {
	productId: string
}

function ProductOrderButton({ productId }: ProductOrderButtonProps) {
	return (
		<div className="w-full fixed left-0 bottom-0  bg-white">
			<ProductOrderOption />

			<div className="w-full flex gap-4 app-px pt-2 pb-6  items-center justify-between bg-white relative z-10">
				<IconButton
					buttonProps={{}}
					imageProps={{
						src: CartURL,
						alt: "cart.svg",
						width: 24,
						height: 24,
						className: "min-w-[24px] min-h-[24px]"
					}}
				/>
				<div className="w-full flex items-center justify-between">
					<Button
						variant="sbGreen"
						size="sbFooter"
						className="text-white rounded-2xl w-full text-base"
					>
						구매하기
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ProductOrderButton
