'use client'
import { createClient } from "@/prismicio"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
// import "swiper/swiper-bundle.min.css"

const MySlider = async () => {
    const client = createClient()
    const page = await client.getSingle('main')

    const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        direction: "vertical",
        spaceBetween: 0,
        grabCursor: true,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 'auto'
            },
            991: {
                slidesPerView: 3
            },
        },
        shortSwipes: false,
        longSwipes: false,
        allowTouchMove: true,
        autoplay: {
            delay: 3000, // 3 seconds
        },
        freeMode: true,
        speed: 5000,
        disableOnInteraction: true
    }

    return (
        <Swiper {...swiperOptions} className="swiper-wrapper sl-h">
            <SwiperSlide className="swiper-slide" data-swiper-autoplay={1000}>
                <div className="tf-product">
                    <div className="image">
                        <img src={page.data.og_image.url} alt="Image" />
                    </div>
                    <h6 className="name"><Link href="/item-detail">SKELATON #01</Link></h6>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide" data-swiper-autoplay={1000}>
                <div className="tf-product">
                    <div className="image">
                        <img src={page.data.og_image.url} alt="Image" />
                    </div>
                    <h6 className="name"><Link href="/item-detail">SKELATON #02</Link></h6>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide" data-swiper-autoplay={1000}>
                <div className="tf-product">
                    <div className="image">
                        <img src={page.data.og_image.url} alt="Image" />
                    </div>
                    <h6 className="name"><Link href="/item-detail">SKELATON #03</Link></h6>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide" data-swiper-autoplay={1000}>
                <div className="tf-product">
                    <div className="image">
                        <img src={page.data.og_image.url} alt="Image" />
                    </div>
                    <h6 className="name"><Link href="/item-detail">SKELATON #04</Link></h6>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide" data-swiper-autoplay={1000}>
                <div className="tf-product">
                    <div className="image">
                        <img src={page.data.og_image.url} alt="Image" />
                    </div>
                    <h6 className="name"><Link href="/item-detail">SKELATON #05</Link></h6>
                </div>
            </SwiperSlide>
            {/* Add more slides as needed */}
        </Swiper>
    )
}

export default MySlider;

