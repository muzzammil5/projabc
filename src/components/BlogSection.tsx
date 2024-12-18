import React from "react";

const BlogSection: React.FC = () => {
  const blogs = [
    { title: "New Dish Introduced", image: "/images/Blog Card 1.png" },
    { title: "Our Healthy Ingredients", image: "/images/Blog Card 3.png" },
    { title: "Our Healthy Ingredients", image: "/images/Blog Card 2.png" },
  ];

  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Latest News & Blog</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="max-w-60 bg-gray-900 rounded-lg p-4">
              <img
                src={blog.image}
                alt={blog.title}
                className=" mb-4 widh=[100px] height=[100px] object-cover"
              />
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
