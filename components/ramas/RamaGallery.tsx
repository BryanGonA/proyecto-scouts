import React, { useState, useCallback } from "react";
import Gallery from "react-image-gallery";
import Carousel, { Modal, ModalGateway } from "react-image-gallery";
import styles from '~/styles/ramas/RamaContent.module.scss'

export default function RamaGallery({photos} :  any) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className={styles.gallery}>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}