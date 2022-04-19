import { useState } from "react";

export default function ImageRotate() {
  const [selectedImage, setSelectedImage] = useState("");

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const rotateImage = () => {
    var c = document.createElement("canvas");
    var img = document.getElementById("target");
    c.height = img.height;
    c.width = img.width;

    c.style.position = "absolute"
    var ctx = c.getContext("2d")
    ctx.translate(img.height, img.width / img.height)
    //..check orientation data, this code assumes the case where its oriented 90 degrees off
    ctx.rotate((90 * Math.PI) / 180);
    ctx.drawImage(img, 0, 0, c.width, c.height);
    var base64String = c.toDataURL();
    // ctx.fill();
    setSelectedImage(base64String);
    // document.body.appendChild(c);
  };
  const downloadImage=()=>{
    var a = document.createElement("a"); //Create <a>
    a.href =selectedImage //Image Base64 Goes here
    a.download = "Image.png"; //File name Here
    a.click();
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <input
        type="file"
        name="myImage"
        accept="image/png, image/gif, image/jpeg"
        onChange={(e) => onImageChange(e)}
      />

      <img id="target" src={selectedImage} height={100} />
      {/* <img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA
    AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
        9TXL0Y4OHwAAAABJRU5ErkJggg==" alt="Red dot" /> */}
      <button>Left rotate</button>
      <button onClick={() => rotateImage()}>Right Rotate</button>

      <button onClick={()=>downloadImage()}>download image</button>
    </div>
  );
}
