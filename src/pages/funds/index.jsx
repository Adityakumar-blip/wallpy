import CategorySlide from "@/components/CategorySlide";
import React from "react";

const Funds = () => {
  const array = [
    {
      id: 0,
      name: "Nature",
      img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TmF0dXJlfGVufDB8fDB8fHww",
    },
    {
      id: 1,
      name: "Space",
      img: "https://images.unsplash.com/photo-1608178398319-48f814d0750c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVuaXZlcnNlfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "Architecture",
      img: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Abstract",
      img: "https://images.unsplash.com/photo-1563089145-599997674d42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWJzdHJhY3R8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      name: "Mountains",
      img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnRhaW5zfGVufDB8fDB8fHww",
    },
    {
      id: 5,
      name: "Ocean",
      img: "https://images.unsplash.com/photo-1513553404607-988bf2703777?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2NlYW58ZW58MHx8MHx8fDA%3D",
    },
  ];

  const colorArray = [
    {
      id: 0,
      name: "Yellow",
      img: "https://images.unsplash.com/flagged/photo-1593005510329-8a4035a7238f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93JTIwY29sb3J8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 1,
      name: "Orange",
      img: "https://images.unsplash.com/photo-1517816428104-797678c7cf0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9yYW5nZSUyMGNvbG9yfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "Red",
      img: "https://images.unsplash.com/photo-1568535904307-f48b760a39f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVkJTIwY29sb3J8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      name: "Purple",
      img: "https://img.freepik.com/free-photo/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product_1258-54682.jpg?size=626&ext=jpg",
    },
    {
      id: 4,
      name: "Magenta",
      img: "https://images.unsplash.com/photo-1708549565726-65f57d43290d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hZ2VudGElMjBjb2xvcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      name: "Green",
      img: "https://images.unsplash.com/photo-1561016444-14f747499547?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjBjb2xvcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 6,
      name: "Teal",
      img: "https://images.unsplash.com/photo-1502646434673-f914c2b11728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHRlYWwlMjBjb2xvcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 7,
      name: "Blue",
      img: "https://images.unsplash.com/photo-1589859762194-eaae75c61f64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZSUyMGNvbG9yfGVufDB8fDB8fHww",
    },
    {
      id: 8,
      name: "White",
      img: "https://images.unsplash.com/photo-1533628635777-112b2239b1c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2hpdGUlMjBjb2xvcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 9,
      name: "Black & White",
      img: "https://images.unsplash.com/photo-1610397646052-fbbd1ffcd29a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBjb2xvcnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  return (
    <div className="bg-black h-screen flex flex-col pl-4 pr-4 gap-6">
      <div>
        <p className="text-xl font-bold ">Liked</p>
        <CategorySlide categories={array} />
      </div>
      <div>
        <p className="text-xl font-bold ">By Color</p>
        <CategorySlide categories={colorArray} />
      </div>
      <div>
        <p className="text-xl font-bold ">By Category</p>
        <CategorySlide categories={array} />
      </div>
    </div>
  );
};

export default Funds;
