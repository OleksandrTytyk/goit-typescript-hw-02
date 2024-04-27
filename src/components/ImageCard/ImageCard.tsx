import css from "./ImageCard.module.css"; 
import { ImageCardProps } from "./ImageCardTypes";


const ImageCard = ({ photo, openModal }: ImageCardProps) => {
  return (
    <div className={css.imgCard}>
      <img
        onClick={() => openModal(photo)}
        src={photo.urls.small}
        alt={photo.alt_description}
      />
    </div>
  );
};

export default ImageCard;

