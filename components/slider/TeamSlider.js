'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".button-team-next",
        prevEl: ".button-team-prev",
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
}

import Link from "next/link"
import { createClient } from "@/prismicio"
export default async function TeamSlider() {
    const client = createClient()
    const team = await client.getSingle("collection_images")
    console.log(team.data.team_section[0].facebook)

    return (
        <>
            <div className="swiper-container team-slider ">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    {team.data.team_section?.map((data, index)=>(
                    <SwiperSlide key={index} >
                        <div className="slider-item">
                            <div className="tf-team">
                                <div className="image">
                                    <img src={data.image.url} alt="Image" />
                                </div>
                                <h4 className="name"><Link href="/team">{data.team_member_name}</Link></h4>
                                <p className="position">Founder</p>
                                <ul className="social">
                                    <li><Link href={data.linkedin.url}><i className="fab fa-linkedin" /></Link></li>
                                    <li><Link href={data.facebook.url}><i className="fab fa-facebook" /></Link></li>
                                    <li><Link href={data.instagram.url}><i className="fab fa-instagram" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-telegram" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                    ))}
                    {/* <SwiperSlide>
                        <div className="slider-item">
                            <div className="tf-team">
                                <div className="image">
                                    <img src={team.data.team_images[0].image.url} alt="Image" />
                                </div>
                                <h4 className="name"><Link href="/team">Ralph Edwards</Link></h4>
                                <p className="position">Founder</p>
                                <ul className="social">
                                    <li><Link href="#"><i className="fab fa-linkedin" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-telegram" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-item">
                            <div className="tf-team active">
                                <div className="image">
                                    <img src={team.data.team_images[0].image.url} alt="Image" />
                                </div>
                                <h4 className="name"><Link href="/team">Jason Smith</Link></h4>
                                <p className="position">Co - Founder</p>
                                <ul className="social">
                                    <li><Link href="#"><i className="fab fa-linkedin" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-telegram" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-item">
                            <div className="tf-team">
                                <div className="image">
                                    <img src={team.data.team_images[0].image.url} alt="Image" />
                                </div>
                                <h4 className="name"><Link href="/team">Tony Wings</Link></h4>
                                <p className="position">Web Designer</p>
                                <ul className="social">
                                    <li><Link href="#"><i className="fab fa-linkedin" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-telegram" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-item">
                            <div className="tf-team">
                                <div className="image">
                                    <img src={team.data.team_images[0].image.url} alt="Image" />
                                </div>
                                <h4 className="name"><Link href="/team">Esther Howard</Link></h4>
                                <p className="position">Project Manager</p>
                                <ul className="social">
                                    <li><Link href="#"><i className="fab fa-linkedin" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-telegram" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-item">
                            <div className="tf-team">
                                <div className="image">
                                    <img src={team.data.team_images[0].image.url} alt="Image" />
                                </div>
                                <h4 className="name"><Link href="/team">Jenny Wilson</Link></h4>
                                <p className="position">Artist</p>
                                <ul className="social">
                                    <li><Link href="#"><i className="fab fa-linkedin" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-telegram" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider-item">
                            <div className="tf-team">
                                <div className="image">
                                    <img src={team.data.team_images[0].image.url} alt="Image" />
                                </div>
                                <h4 className="name"><Link href="/team">Robert Fox</Link></h4>
                                <p className="position">UI/UX Designer</p>
                                <ul className="social">
                                    <li><Link href="#"><i className="fab fa-linkedin" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-telegram" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide> */}
                </Swiper>
            </div>
            <div className="swiper-button-prev button-team-prev" />
            <div className="swiper-button-next button-team-next" />
        </>
    )
}
