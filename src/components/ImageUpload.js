import React, { useState } from "react";
import { storage } from "../firebase/firebase";

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const onImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleImageUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
  };

  console.log(image);

  return (
    <>
      <input type="file" onChange={onImageChange} />
      <button onClick={handleImageUpload}>Upload Image</button>
    </>
  );
};

export default ImageUpload;
