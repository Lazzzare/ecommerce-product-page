import Next from "../assets/icon-next.svg";
import Previous from "../assets/icon-previous.svg";

interface FullScreenImageProps {
  fullScreenImage: boolean;
  handlePrevNext: (e: number) => void;
  setFullScreenImage: (e: boolean) => void;
  productImages: string[];
  imageIndex: number;
  handleImageChange: (e: number) => void;
  image: string;
}

const FullScreenImage: React.FC<FullScreenImageProps> = ({
  fullScreenImage,
  handlePrevNext,
  setFullScreenImage,
  productImages,
  imageIndex,
  handleImageChange,
  image,
}) => {
  const fullScreenImagesCloseIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 2.85714L17.1429 0L10 7.14286L2.85714 0L0 2.85714L7.14286 10L0 17.1429L2.85714 20L10 12.8571L17.1429 20L20 17.1429L12.8571 10L20 2.85714Z"
        fill="#FF7E1B"
      />
    </svg>
  );

  return (
    <>
      {fullScreenImage ? (
        <>
          <div className="fixed bg-[#000] left-0 opacity-75 top-0 w-full h-screen z-[998]"></div>
          <div className="absolute top-[20%] left-[35%] flex flex-col gap-y-10 justify-center mx-auto items-center z-[999]">
            <div className="absolute items-center top-[38%]">
              {/* PreviousImageClick */}
              <div
                onClick={() => handlePrevNext(-1)}
                className="absolute right-[250px] bg-white w-[50px] h-[50px] flex justify-center items-center rounded-full cursor-pointer"
              >
                <img src={Previous} alt="Previous" />
              </div>
              {/* NextImageClick */}
              <div
                onClick={() => handlePrevNext(1)}
                className="absolute left-[250px] bg-white w-[50px] h-[50px] flex justify-center items-center rounded-full cursor-pointer"
              >
                <img src={Next} alt="NextIcon" />
              </div>
            </div>
            <img
              src={image}
              alt="image"
              className="w-[550px] h-[550px] rounded-xl"
            />
            <div
              onClick={() => setFullScreenImage(!fullScreenImage)}
              className="absolute -top-10 right-0 cursor-pointer"
            >
              {fullScreenImagesCloseIcon}
            </div>
            <div className="flex flex-row gap-x-7">
              {productImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product${index + 1}`}
                  className={`w-[88px] h-[88px] rounded-lg cursor-pointer ${
                    imageIndex === index
                      ? "border-2 border-[#FF7E1B] opacity-50"
                      : null
                  }`}
                  onClick={() => handleImageChange(index)}
                />
              ))}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default FullScreenImage;
