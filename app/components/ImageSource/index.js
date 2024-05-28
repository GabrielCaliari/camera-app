import React from "react";

import { ImagePhoto } from "../../styled";

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSource = selectedImage  ? { uri: selectedImage } : placeholderImageSource;

  return <ImagePhoto source={imageSource}  />;
}
