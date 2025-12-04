import cover from "../../assets/Beige Feminine Personal LinkedIn Banner.png";

function CoverImage() {
  return (
    <div className="w-full h-48 sm:h-64 md:h-72 lg:h-97 overflow-hidden">
            <img src={cover} alt="Cover" className="w-full h-full object-cover object-center" />
          </div>
    
  )
}

export default CoverImage
