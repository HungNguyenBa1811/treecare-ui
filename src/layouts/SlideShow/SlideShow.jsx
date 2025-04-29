import React from "react";
import Slider from "react-slick";

export default function SlideShow() {
    let settings = {
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <Slider {...settings} className="hover:cursor-grabbing">
            {Array.from({ length: 7 }, (_, i) => i + 1).map((num) => (
                <div className="w-[200px] h-[500px] overflow-hidden outline-0 rounded-xl">
                    <img
                        src={'plant_' + num + '.jpg'} 
                        alt={'plant ' + num}
                        className="px-2 object-cover w-full h-full"
                    />
                </div>
            ))}
        </Slider>
    );
}