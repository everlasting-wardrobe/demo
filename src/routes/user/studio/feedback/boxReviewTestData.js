const clothImgUrl = 'https://thumb1.shutterstock.com/display_pic_with_logo/3108527/445572067/stock-photo-flat-lay-set-of-classic-men-s-clothes-such-as-blue-suit-brown-shoes-belt-watches-and-bracelet-on-445572067.jpg';
const clothImgUrl1 = 'https://slack-imgs.com/?c=1&o1=ro&url=http%3A%2F%2Fres.cloudinary.com%2Fkaojichi%2Fimage%2Fupload%2Fv1528926424%2F1800001808%2FIMG_5419.jpg';
const clothImgUrl2 = 'https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2017/12/04/grid-img/1513712621177934845.jpg';
const clothImgUrl3 = 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&h=350';

const boxReviewDataGenerator = () => {
  const boxReviewData = []
  for(let i = 0; i < 12; i++){
    let items = [];
    let fitRating, styleRating, size, price, msrp, sku, gender, color;
    for(let j = 0; j < 8; j++){
      fitRating = Math.round(Math.random() * 5);
      styleRating = Math.round(Math.random() * 5);
      size = Math.floor(Math.random() * 10);
      gender = Math.random() < 0.5 ? 'Male' : 'Female';
      msrp = Math.floor((1 - Math.random() * 0.5) * 90);
      price = Math.floor((1 - Math.random() * 0.3) * msrp);
      sku = 0;
      color = 'COLOR';
      for(let i = 0; i < 9; i++){
        sku = sku * 10 + Math.floor(Math.random() * 10);
      }
      const item = {
        key : `Month${i+1}Item${j+1}`,
        clothImgUrls: [clothImgUrl1, clothImgUrl1, clothImgUrl1, clothImgUrl1],
        title: `This is the Month ${i + 1} Item ${j + 1}'s Title`,
        size: size,
        msrp: msrp,
        price: price,
        sku: sku,
        gender: gender,
        color: color,
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
