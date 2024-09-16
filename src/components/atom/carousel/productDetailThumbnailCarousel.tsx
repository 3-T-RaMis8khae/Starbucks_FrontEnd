"use client"

import React from "react"
import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "./commonCarousel.css"

interface ProductDetailThumbnailCarouselProps {
	thumbnails: Array<{ src: string; alt: string }>
}

// todo : might need to modify width and height of image
function ProductDetailThumbnailCarousel({
	thumbnails
}: ProductDetailThumbnailCarouselProps) {
	return (
		<Swiper
			modules={[Autoplay, Pagination, Navigation]}
			spaceBetween={0}
			slidesPerView={1}
			centeredSlides={true}
			pagination={{
				clickable: true,
				renderBullet: function (index, className) {
					return `<span class="${className} swiper-pagination-bullet-active swiper-pagination-bullet"></span>`
				}
			}}
			navigation={false}
			className="w-full aspect-square"
		>
			{thumbnails.map((item, index) => (
				<SwiperSlide key={index}>
					<Image src={item.src} alt={item.alt} fill />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default ProductDetailThumbnailCarousel
