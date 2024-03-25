import CategorySlide from "@/components/CategorySlide";
import React from "react";

const Funds = () => {
  const array = [
    {
      id: 0,
      name: "Cat 1",
      img: "https://images.unsplash.com/photo-1688025950970-2ffb840b8f64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
    },
    {
      id: 0,
      name: "Cat 2",
      img: "https://images.unsplash.com/photo-1611343693811-2c235c683f26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVuc3BhbHNofGVufDB8fDB8fHww",
    },
    {
      id: 0,
      name: "Cat 2",
      img: "https://images.unsplash.com/photo-1611343693811-2c235c683f26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVuc3BhbHNofGVufDB8fDB8fHww",
    },
    {
      id: 0,
      name: "Cat 2",
      img: "https://images.unsplash.com/photo-1611343693811-2c235c683f26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVuc3BhbHNofGVufDB8fDB8fHww",
    },
    {
      id: 0,
      name: "Cat 2",
      img: "https://images.unsplash.com/photo-1611343693811-2c235c683f26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVuc3BhbHNofGVufDB8fDB8fHww",
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
