


export interface Photo {
  urls: { regular: string };
  alt_description: string;
}

export interface ApiResponse {
  results: Photo[];
  total_pages: number;
}