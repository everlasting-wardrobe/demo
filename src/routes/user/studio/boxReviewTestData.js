const clothImgUrl = 'https://thumb1.shutterstock.com/display_pic_with_logo/3108527/445572067/stock-photo-flat-lay-set-of-classic-men-s-clothes-such-as-blue-suit-brown-shoes-belt-watches-and-bracelet-on-445572067.jpg'

const boxReviewDataGenerator = () => {
  const boxReviewData = []
  for(let i = 0; i < 12; i++){
    let items = [];
    for(let j = 0; j < 8; j++){
      let fitRating = Math.round(Math.random() * 5);
      let styleRating = Math.round(Math.random() * 5);
      const item = {
        key : `Month${i+1}Item${j+1}`,
        clothImgUrl: clothImgUrl,
        discription: `this is test discription! Month ${i + 1}, Item ${j + 1}`,
        detail: `This is the detail for Month ${i + 1}, Item ${j + 1}`,
        fitRating: fitRating,
        styleRating: styleRating,
      }
      items[j] = item;
    }
    boxReviewData[i] = items;
  }
  return boxReviewData;
}

export default boxReviewDataGenerator;
