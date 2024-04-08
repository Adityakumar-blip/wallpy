export const handleImageClick = ({ data, router }) => {
  try {
    console.log("Data", data);
    if (router) {
      router.push({
        pathname: "image-detail",
        query: { data: JSON.stringify(data) },
      });
    }
  } catch (error) {}
};
