import css from "./ImageCard.module.css";

const ImageCard = ({ photo, openModal }) => {
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
