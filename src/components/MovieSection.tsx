import MovieCard from "./shared/MovieCard";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PeopleCard from "./shared/PeopleCard";

type SectionType = {
  sectionTitle: string;
  sectionDescription: string;
  itemsToShow?: number;
  isMovie?: boolean;
}

const MovieSection = ({ sectionTitle, sectionDescription, itemsToShow, isMovie }: SectionType) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: itemsToShow ? itemsToShow : 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="flex flex-col my-10">
      <div className="flex flex-row justify-start items-center gap-2 font-bold text-2xl">
        <div className="text-yellow-400 text-3xl">|</div>
        <div className="text-white">
          { sectionTitle }
        </div>
      </div>
      <div className="text-gray-300 mb-3">
        { sectionDescription }
      </div>
      { isMovie ? (
        <Slider {...settings}>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </Slider>
      ) : (
        <Slider {...settings}>
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
        </Slider>
      ) }
    </div>
  )
}

export default MovieSection;