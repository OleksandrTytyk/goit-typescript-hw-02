import { Photo } from "../App/AppTypes";


export interface ImageGalleryProps {
  photos: Photo[] | null; 
  openModal: (image: any) => void;
}