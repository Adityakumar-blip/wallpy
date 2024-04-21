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

export function detectDeviceType() {
  const userAgent = navigator.userAgent;

  if (/Android/i.test(userAgent)) {
    return "Android";
  } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
    return "iOS";
  } else if (/Windows Phone/i.test(userAgent)) {
    return "Windows Phone";
  } else if (/Macintosh/i.test(userAgent)) {
    return "Mac";
  } else if (/Windows NT/i.test(userAgent)) {
    return "Windows";
  } else if (/Linux/i.test(userAgent)) {
    return "Linux";
  } else {
    return "Unknown";
  }
}
