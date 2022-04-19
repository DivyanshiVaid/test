import React from "react";
import { useState } from "react";
const RotateImg = () => {
  const [image, setImage] = useState(null);

  const uploadImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  const rotateImage = () => {
    var c = document.createElement("canvas");
    var img = document.getElementById("image");
    c.height = img.height;
    c.width = img.width;
    var ctx = c.getContext("2d")
    ctx.translate(img.height, img.width /img.height)
    ctx.rotate((90 * Math.PI) / 180);
    ctx.drawImage(img, 0, 0, c.width, c.height);
    var base64String = c.toDataURL();
    setImage(base64String);
  };

  const downloadImage=()=>{
    var a = document.createElement("a"); //Create <a>
    a.href =Image //Image Base64 Goes here
    a.download = "Image.png"; //File name Here
    a.click();
  }
  return (
    <div>
      <div className="bg-info p-2 m-1 ">
        <label>Upload Your Image Here! </label>
        <input onChange={(e)=>uploadImage(e)} type="file" accept="image/*" />
      </div>
      <div className="pt-3">
        <img
          id="image"
          src={image}
          height={100}
          alt=""
        />
      </div>
      <div className="pt-3">
        <button
          className="btn btn-info m-3"
          type="submit"
          onClick={rotateImage}
        >
          Rotate
        </button>
        <a href={image} download={image}>
          <button className="btn btn-info" type="submit" onClick={downloadImage}>
            Download
          </button>
        </a>
      </div>
    </div>
  );
};
export default RotateImg;
