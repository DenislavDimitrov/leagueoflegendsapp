const models = require('../models');

module.exports = {
  
  post: (req, res, next) => {
    const _id = req.body.id;
   
    let imageUrl = '';
    let type = Math.floor(Math.random()*10)
    let itemName = '';
    let power = Math.floor(Math.random()*10)
    let price = power * 10;
    if (type === 0 || type === 1){
      type = 'Tank'
      imageUrl = 'https://res.cloudinary.com/dc6ctj58m/image/upload/v1617439466/Warmog_teb0n8.webp'
      itemName = 'Warmog'
    } else if (type === 2 || type === 3){
      type = 'Mage'
      imageUrl = 'https://res.cloudinary.com/dc6ctj58m/image/upload/v1617439466/lichBane_xzrwiw.webp'
      itemName = 'Lich bane'
    } else if (type === 4 || type === 5){
      type = 'Assassin'
      imageUrl = 'https://res.cloudinary.com/dc6ctj58m/image/upload/v1617439466/Youmuu_ytelcd.webp'
      itemName = 'Yoummu'
    } else if (type === 6 || type === 7){
      type = 'Marksman'
      imageUrl = 'https://res.cloudinary.com/dc6ctj58m/image/upload/v1617439466/3031_Marksman_T3_InfinityEdge_stp9kj.png'
      itemName = 'Infinity edge'
    } else if (type === 8 || type === 9){
      type = 'Fighter'
      imageUrl = 'https://res.cloudinary.com/dc6ctj58m/image/upload/v1617439466/trinity_jhci3m.webp'
      itemName = 'Trinity force'
    } 
    
    
    models.Item.create({ itemName, type, power, price, imageUrl, author: _id })
      .then((createdItem) => {
        return Promise.all([
          models.Champion.updateOne({ _id }, { $push: { items: createdItem } }),
          models.Item.findOne({ _id: createdItem._id })
        ]);
      })
      .then(([modifiedObj, itemsObj]) => {
        res.send(itemsObj);
      })
      .catch(next);
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    models.Champion.deleteOne({ _id: id })
      .then((removedChampion) => res.send(removedChampion))
      .catch(next)
  }
};