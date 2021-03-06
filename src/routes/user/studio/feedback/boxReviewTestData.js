const clothImgUrl = 'https://thumb1.shutterstock.com/display_pic_with_logo/3108527/445572067/stock-photo-flat-lay-set-of-classic-men-s-clothes-such-as-blue-suit-brown-shoes-belt-watches-and-bracelet-on-445572067.jpg';
const clothImgUrl1 = 'https://slack-imgs.com/?c=1&o1=ro&url=http%3A%2F%2Fres.cloudinary.com%2Fkaojichi%2Fimage%2Fupload%2Fv1528926424%2F1800001808%2FIMG_5419.jpg';
const clothImgUrl2 = 'https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2017/12/04/grid-img/1513712621177934845.jpg';
const clothImgUrl3 = 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&h=350';

const boxReviewDataGenerator = () => {
  const boxReviewData = []
  for(let i = 0; i < 12; i++){
    let box = {};
    let items = [];
    let fitRating, styleRating, size, price, msrp, sku, gender, color;
    for(let j = 0; j < 8; j++){
      fitRating = Math.round(Math.random() * 8) + 1;
      styleRating = Math.round(Math.random() * 8) + 1;
      size = Math.floor(Math.random() * 10).toString(10);
      gender = Math.random() < 0.5 ? 'Male' : 'Female';
      msrp = Math.floor((1 - Math.random() * 0.5) * 90);
      price = Math.floor((1 - Math.random() * 0.3) * msrp);
      color = 'COLOR';
      for(let i = 0; i < 9; i++){
        sku = sku * 10 + Math.floor(Math.random() * 10);
      }
      const item = {
        Barcode: `Month${i+1}Item${j+1}`,
        FrontPhoto: clothImgUrl1,
        BackPhoto: clothImgUrl1,
        LeftPhoto: clothImgUrl1,
        RightPhoto: clothImgUrl1,
        Size: {Size: '6Y'},
        Item: {
                        "Selling_price": msrp,
                        "Brand": {
                            "BrandName": "Anais & I welcome to my home"
                        },
                        'Gender': 'Girl',
                        "Genus": {
                            "Genus": "Sweater"
                        },
                    },
        Color_Combo: {
                        "CCID": 33,
                        "Color_1": {
                            "RGB": null
                        },
                        "Color_2": null,
                        "Color_3": null,
                        "Color_4": null,
                        "Color_5": null
                    },
        BoxProducts: {
          "BoxID": 11,
          "ProductID": "EW-1-22-33-13-4",
          "FitRating": fitRating,
          "StyleRating": styleRating,
          "Comments": null,
          "CreatedAt": "2018-06-26T19:06:09.045Z",
          "UpdatedAt": "2018-06-26T19:06:09.045Z"
        },
      }
      items[j] = item;
    }
    box.Products = items;
    boxReviewData[i] = box;
  }
  return boxReviewData;
}

export default boxReviewDataGenerator;
