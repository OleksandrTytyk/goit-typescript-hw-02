export interface ModalProps {
  isOpen?: boolean;
  onRequestClose?: () => void;
  shouldCloseOnOverlayClick?: boolean;
  shouldCloseOnEsc?: boolean;
  preventScroll?: boolean;
  style?: object;
  children?: React.ReactNode;
}

export interface ImageProps {
  isOpen: boolean; 
  closeModal: () => void; 
  src: string;
  alt: string;
}
