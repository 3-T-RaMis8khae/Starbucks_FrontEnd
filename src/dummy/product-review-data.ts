import { ProductReviewResponse, ProductReviewType } from "@/type/shop/review"

export const productReviewData: Array<ProductReviewType> = [
	{
		id: "1",
		userName: "김개똥",
		score: 4.5,
		productId: "1",
		content: "좋아요",
		createdAt: "2021-08-01",
		images: [
			"https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202409/20240904074637_1225083845_0_1.jpg&w=500&h=500&autoOrient=true&t=630bb725deeb21ee6b6d4e1ac94e3386cc047d9b",
			"https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202409/20240902144154_1224984910_0_1.jpg&w=500&h=500&autoOrient=true&t=ca6b39527eb127c1981e4855f157fd5ec8752286"
		]
	},
	{
		id: "2",
		userName: "박똥개",
		score: 3.5,
		productId: "1",
		content: "별로에요",
		createdAt: "2021-08-02",
		images: [
			"https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202409/20240904074637_1225083845_0_1.jpg&w=500&h=500&autoOrient=true&t=630bb725deeb21ee6b6d4e1ac94e3386cc047d9b"
		]
	},
	{
		id: "3",
		userName: "홍길동",
		score: 5,
		productId: "1",
		content: "좋아요",
		createdAt: "2021-08-03"
	},
	{
		id: "4",
		userName: "김철수",
		score: 4,
		productId: "1",
		content: "좋아요",
		createdAt: "2021-08-04"
	},
	{
		id: "5",
		userName: "김영희",
		score: 4.5,
		productId: "1",
		content: "좋아요",
		createdAt: "2021-08-05"
	},
	{
		id: "6",
		userName: "이영희",
		score: 3.5,
		productId: "1",
		content: "별로에요",
		createdAt: "2021-08-06"
	},
	{
		id: "7",
		userName: "박철수",
		score: 5,
		productId: "1",
		content: "좋아요",
		createdAt: "2021-08-07"
	},
	{
		id: "8",
		userName: "이철수",
		score: 4,
		productId: "1",
		content: "좋아요",
		createdAt: "2021-08-07"
	}
]

export const reviews: ProductReviewResponse[] = [
	{
		nickName: "h95*******",
		star: 5,
		createAt: "2024.05.13",
		content:
			"깔끔하니 촣아요\n묵직하기까지 하네요\n이번 여름에 우리 네가족 딱이네요",
		commentCount: 1,
		imageUrls: [
			"https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202405/20240513200302_1219432917_0_1.jpg&w=500&h=500&autoOrient=true&t=fb20238af93412aed0dbae72c6a4d7999c393f72",
			"https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202405/20240513200302_1219432917_0_2.jpg&w=500&h=500&autoOrient=true&t=3668adfe22652e31d13bb55e06f8bf0dd0d5d9b3",
			"https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202405/20240513200302_1219432917_0_3.jpg&w=500&h=500&autoOrient=true&t=3a81042be01d5ca8bd2d85cf0f8c6ca4814c3317"
		]
	},
	{
		nickName: "rkd*******",
		star: 5,
		createAt: "2024.05.09",
		content:
			"생각보다 더 이쁨! 여기에 아이스아메 먹으면 되게 맛있을것 같아요! 컵도 묵직하니 좋아요~~",
		commentCount: 1,
		imageUrls: [
			"https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202405/20240509153927_1219221122_0_1.jpg&w=500&h=500&autoOrient=true&t=9100bb40f0a6fe98d5205755453944c5f009ce96",
			"https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202405/20240509153927_1219221122_0_2.jpg&w=500&h=500&autoOrient=true&t=f7fbc6f7614d66cf3086e2079fd514104b5b0caa"
		]
	},
	{
		nickName: "99u*******",
		star: 5,
		createAt: "2024.09.07",
		content:
			"너무 너무 마음에 들어요. 유리가 튼튼해서 잘 안깨질것 같네요. 포장도 꼼꼼하게 잘 되어있고 선물용으로도 좋을것 같아요. 최고에요!",
		commentCount: 1,
		imageUrls: [
			"https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202409/20240907144433_1225258879_0_1.jpg&w=500&h=500&autoOrient=true&t=11073848373e756a5bab9c7e489ec1c59481e49d"
		]
	},
	{
		nickName: "pig*******",
		star: 5,
		createAt: "2024.05.09",
		content: "여름에 아이스커피 해먹기에 딱 좋은 사이즈 맘에 들어요",
		commentCount: 1,
		imageUrls: [
			"https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202405/20240509155132_1219221996_0_1.jpg&w=500&h=500&autoOrient=true&t=d1a5ac53739428507b7a73d6c1fd576c329ea299",
			"https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202405/20240509155132_1219221996_0_2.jpg&w=500&h=500&autoOrient=true&t=923f07c986209d5ee8f7845089300de50358f547"
		]
	},
	{
		nickName: "sbm*******",
		star: 5,
		createAt: "2024.09.09",
		content: "선물용으로 구입했습니다.  만족합니다.",
		commentCount: 1,
		imageUrls: [
			"https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202409/20240909223125_1225369957_0_1.jpg&w=500&h=500&autoOrient=true&t=d415edef6178ba83bdd9c6216a9217bb34f17dc8"
		]
	}
]
