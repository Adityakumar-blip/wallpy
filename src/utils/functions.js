export const handleImageClick = ({ data, router }) => {
  try {
    if (router) {
      router.push({
        pathname: "image-detail",
      });
    }
  } catch (error) {}
};

export function roundOff(number) {
  if (typeof number === "number" && !isNaN(number) && number % 1 !== 0) {
    return Math.round(number);
  } else {
    return number;
  }
}
