import "./../scss/Pack.scss"
import React, { useState } from 'react';
import player from './../Images/players.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import 'swiper/swiper-bundle.css';
import "swiper/css/navigation";
import "swiper/css";
import "./../scss/Slider.scss"

interface PackMarket {
    name: string;
    image: string;
    price: number;
    description: string;
    end: string;
    probability: string;
}

const packs: PackMarket[] = [
    {
        name: "Small Pack",
        image: player,
        price: 0.05,
        description: "This pack contain 1 New Player.",
        end: "It can also contain some special club elements if you’re lucky.",
        probability: "Icon - 0.1 %\nSuperStar - 2.5 %\nGreat - 15 %\nGood - 32.5 %\nStarter - 49.9 %",
    },
    {
        name: "Medium Pack",
        image: player,
        price: 0.15,
        description: "This pack contain 2 New Player.",
        end: "It can also contain some special club elements if you’re lucky.",
        probability: "Icon - 0.1 %\nSuperStar - 2.5 %\nGreat - 15 %\nGood - 32.5 %\nStarter - 49.9 %",
    },
    {
        name: "Big Pack",
        image: player,
        price: 0.25,
        description: "This pack contain 3 New Player.",
        end: "It can also contain some special club elements if you’re lucky.",
        probability: "Icon - 0.1 %\nSuperStar - 2.5 %\nGreat - 15 %\nGood - 32.5 %\nStarter - 49.9 %",
    },
    {
        name: "Small Pack",
        image: player,
        price: 0.05,
        description: "This pack contain 1 New Player.",
        end: "It can also contain some special club elements if you’re lucky.",
        probability: "Icon - 0.1 %\nSuperStar - 2.5 %\nGreat - 15 %\nGood - 32.5 %\nStarter - 49.9 %",
    },
    {
        name: "Medium Pack",
        image: player,
        price: 0.15,
        description: "This pack contain 2 New Player.",
        end: "It can also contain some special club elements if you’re lucky.",
        probability: "Icon - 0.1 %\nSuperStar - 2.5 %\nGreat - 15 %\nGood - 32.5 %\nStarter - 49.9 %",
    },
    {
        name: "Big Pack",
        image: player,
        price: 0.25,
        description: "This pack contain 3 New Player.",
        end: "It can also contain some special club elements if you’re lucky.",
        probability: "Icon - 0.1 %\nSuperStar - 2.5 %\nGreat - 15 %\nGood - 32.5 %\nStarter - 49.9 %",
    },
    // ... les autres packs
];


const Pack: React.FC = () => {
    const [currentPack, setCurrentPack] = useState(packs[1]);
    return (
        <section className='Pack'>
            <div className='container-pack'>
                <div className='box-pack-title'>
                    <h2>Packs</h2>
                </div>
                <div className='box-pack-content'>
                    <div className="container-pack-visuel">
                        <div className="slider-container">
                            <div className='box-visuel-pack'>
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={3}
                                    loop={true}
                                    // speed={300}
                                    centeredSlides={true}
                                    onSlideChange={({ activeIndex }) => setCurrentPack(packs[activeIndex])}
                                    navigation={{ nextEl: ".next-slide", prevEl: ".prev-slide" }}
                                    modules={[Navigation]}
                                >
                                    {packs.map((pack) => {
                                        let backgroundStyle;
                                        let shadowStyle;
                                        if (pack.name === "Small Pack") {
                                            backgroundStyle = "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0) 41.67%, rgba(32, 6, 86, 0.43) 100%)";
                                            shadowStyle = "0px 10.2963px 25.7408px rgba(0, 0, 0, 0.25)";
                                        } else if (pack.name === "Medium Pack") {
                                            backgroundStyle = "radial-gradient(50% 50% at 50% 50%, rgba(12, 27, 45, 0) 32.29%, rgba(14, 104, 209, 0.21) 95.83%)";
                                            shadowStyle = "box-shadow: 0px 10.2963px 25.7408px rgba(0, 0, 0, 0.25)";
                                        } else if (pack.name === "Big Pack") {
                                            backgroundStyle = "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, rgba(202, 158, 1, 0.27) 100%)";
                                            shadowStyle = "0px 10.2963px 25.7408px rgba(0, 0, 0, 0.25)";
                                        }
                                        return (
                                            <SwiperSlide key={pack.name}>
                                                <div className="box-pack" style={{ background: backgroundStyle}}>
                                                    <img src={pack.image} alt={pack.name} />
                                                    <div className="box-text-pack">
                                                        <h2>{pack.name}</h2>
                                                        <p>{pack.price} eth</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        );
                                    })}

                                </Swiper>
                            </div>
                            <div className="navigation-buttons">
                                <div className="carousel__prev">
                                    <i className="gg-chevron-left prev-slide"></i>
                                </div>
                                <div className="carousel__next">
                                    <i className="gg-chevron-right next-slide"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='box-description-pack'>
                        <div className="box-name">
                            <h3>{currentPack.name}</h3>
                            <p>{currentPack.price} eth</p>
                        </div>
                        <div className="box-description">
                            <h4>{currentPack.description}</h4>
                            <h4>{currentPack.end}</h4>
                        </div>
                        <span>Probabilities</span>
                        {currentPack.probability.split('\n').map((line, i) => (
                            <span key={i}>{line}</span>
                        ))}
                        <div className="button-box">
                            <button>Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    )
};

export default Pack;
