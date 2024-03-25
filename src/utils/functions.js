export const handleImageClick = ({ data, router }) => {
  try {
    if (router) {
      router.push({
        pathname: "image-detail",
        query: { url: data },
      });
    }
  } catch (error) {}
};
