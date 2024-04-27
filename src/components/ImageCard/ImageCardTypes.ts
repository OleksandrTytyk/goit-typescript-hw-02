export interface Photo {
  urls: { small: string }; 
  alt_description: string;
}

export interface ImageCardProps {
  photo: Photo;
  openModal: (photo: Photo) => void; 
}