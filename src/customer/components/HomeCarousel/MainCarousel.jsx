import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';

const MainCarousel = () => {
    const items = MainCarouselData.map((item) => <img className="cursor-pointer"
                                                      role="presentation" src={item.image} alt=""/>)  //map returns array, tailwind css classname

    return (
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            infinite
            autoPlayInterval={1000}
        />
    )
}

export default MainCarousel;