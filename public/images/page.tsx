const Gallery: React.FC = () => {
    const images: string[] = Array.from({ length: 12 }, (_, i) => `/images/dish${i + 1}.jpg`);
  
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold">Gallery</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="rounded-lg hover:scale-105 transition"
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Gallery;
  