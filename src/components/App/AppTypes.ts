export interface Photo {
  id: string; 
  urls: { regular: string, small: string }; 
  alt_description: string;

  openModal: (photo: Photo) => void;
  
}

export interface ApiResponse {
  results: Photo[];
  total_pages: number;
}