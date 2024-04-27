import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageGalleryProps } from "./ImageGalleryTypes";



const ImageGallery = ({ photos, openModal }: ImageGalleryProps) => {
  return (
    <div>
      <ul className={css.gallery}>
        {photos !== null &&
          photos.map((photo) => (
            <li key={photo.id}>
              <ImageCard photo={photo} openModal={openModal} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ImageGallery;

