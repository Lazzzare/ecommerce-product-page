import { motion } from "framer-motion";

interface Props {
  productImages: string[];
  imageIndex: number;
  handleImageChange: (e: number) => void;
}

const SubImages = ({ productImages, imageIndex, handleImageChange }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex flex-row gap-x-7 image-container">
        {productImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product${index + 1}`}
            className={`w-[88px] h-[88px] rounded-lg hover:opacity-80 cursor-pointer ${
              imageIndex === index
                ? "border-2 border-[#FF7E1B] opacity-70"
                : null
            }`}
            onClick={() => handleImageChange(index)}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SubImages;
