"use client"

import React from "react"
import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"

const items: {
	src: string
	alt: string
}[] = [
	{
		src: "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202408/2024083014175053184567290556_417.jpg&w=750&h=0",
		alt: "image1"
	},
	{
		src: "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202408/2024083014164741128490113949_390.jpg&w=750&h=0",
		alt: "image2"
	},
	{
		src: "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202409/2024090414583759938193856919_946.jpg&w=750&h=0",
		alt: "image3"
	},
	{
		src: "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202408/2024082716492709780525320152_955.jpg&w=750&h=0",
		alt: "image4"
	},
	{
		src: "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202408/2024082716450008893493951449_912.jpg&w=750&h=0",
		alt: "image5"
	},
	{
		src: "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202408/2024082210304903261305969130_246.jpg&w=750&h=0",
		alt: "image6"
	},
	{
		src: "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202408/2024081314575234095027480602_360.jpg&w=750&h=0",
		alt: "image7"
	}
]

interface MainProductCarouselProps {}

function MainProductCarousel(props: MainProductCarouselProps) {
	return (
		<Swiper
			modules={[Autoplay, Pagination, Navigation]}
			spaceBetween={0}
			slidesPerView={1}
			centeredSlides={true}
			pagination={{ clickable: true }}
			navigation={true}
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
