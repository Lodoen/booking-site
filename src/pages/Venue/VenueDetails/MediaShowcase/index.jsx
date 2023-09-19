import { useState } from "react";
import * as S from "./index.styles";
import ImageCarousel from "./ImageCarousel";
import { BsXLg } from "react-icons/bs";

export default function MediaShowcase({ media = [] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <S.MediaShowcase>
      <div className="basic-carousel">
        <ImageCarousel
          media={media}
          currentImageIndex={currentImageIndex}
          setCurrentImageIndex={setCurrentImageIndex}
          setIsModalOpen={setIsModalOpen}
          isBasicModal={true}
        />
      </div>
      {isModalOpen && (
        <div className="modal-carousel">
          <ImageCarousel
            media={media}
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
          />
          <button
            className="modal-close carousel-button"
            onClick={() => setIsModalOpen(false)}
          >
            <figure>
              <BsXLg />
            </figure>
          </button>
        </div>
      )}
    </S.MediaShowcase>
  );
}
