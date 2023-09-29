import undefinedImg from "../../../../../assets/no-image-available.png";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import * as S from "./index.styles";

export default function ImageCarousel({
  media,
  currentImageIndex,
  setCurrentImageIndex,
  setIsModalOpen,
  isBasicModal = false,
}) {
  const handleMediaChange = (direction = 0) => {
    setCurrentImageIndex((prevIndex) => {
      if (prevIndex + direction > media.length - 1) {
        return 0;
      } else if (prevIndex + direction < 0) {
        return media.length - 1;
      } else {
        return prevIndex + direction;
      }
    });
  };

  return (
    <S.ImageCarousel>
      <figure
        className="media-wrapper"
        onClick={() => {
          if (isBasicModal) {
            setIsModalOpen(true);
          }
        }}
      >
        <img
          src={
            media && media.length > 0 ? media[currentImageIndex] : undefinedImg
          }
          alt="venue showcase"
        />
      </figure>
      {media && media.length > 1 && (
        <div className="media-controls">
          <button
            onClick={() => handleMediaChange(-1)}
            className="carousel-button"
          >
            <figure>
              <BsArrowLeft />
            </figure>
          </button>
          <span>
            {currentImageIndex + 1}/{media.length}
          </span>
          <button
            onClick={() => handleMediaChange(1)}
            className="carousel-button"
          >
            <figure>
              <BsArrowRight />
            </figure>
          </button>
        </div>
      )}
    </S.ImageCarousel>
  );
}
