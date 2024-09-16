"use client"

import React from "react"
import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "./commonCarousel.css"

// dummy-data
import { items } from "@/dummy/product-caroucel-data"

interface MainProductCarouselProps {}

function MainProductCarousel(props: MainProductCarouselProps) {
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
			autoplay={{ delay: 3000 }}
			navigation={false}
			className="w-full h-80"
		>
			{items.map((item, index) => (
				<SwiperSlide key={index}>
					<Image src={item.src} alt={item.alt} fill />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default MainProductCarousel
