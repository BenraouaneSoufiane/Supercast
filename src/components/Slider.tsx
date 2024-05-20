// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import {Keyboard, Pagination, Mousewheel} from 'swiper/modules'
import 'swiper/css/pagination';

const Slider = () => {
    return (
      <Swiper style={{height: '450px'  }}
      modules={[Keyboard, Pagination, Mousewheel]}
      navigation
      mousewheel
      keyboard
      pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="relative w-1/3 inline-block"><img  src="https://ethinker.eth.limo/ac2afd3cfea3e2236e3fadf75f05041b.png"></img></SwiperSlide>
        <SwiperSlide className="relative w-1/3 inline-block"><img  src="https://ethinker.eth.limo/3a36435d4ce566cca31315a4a406d9d5.png"></img></SwiperSlide>
        <SwiperSlide className="relative w-1/3 inline-block"><img  src="https://ethinker.eth.limo/30b8a582c02846cfe847673ee843c3bf.png"></img></SwiperSlide>
        <SwiperSlide className="relative w-1/3 inline-block"><img  src="https://ethinker.eth.limo/ac2afd3cfea3e2236e3fadf75f05041b.png"></img></SwiperSlide>
      </Swiper>
    );
  };
export default Slider