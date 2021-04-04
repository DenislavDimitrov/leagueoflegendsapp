const models = require('../models');

module.exports = {
  get: (req, res, next) => {
      
    const _id = req.query.id;
   
    models.User
      .find({_id})
      .populate('champions')
      .then((result) => res.send(result[0].champions))
      .catch(next);
  },

  getOne: (req, res, next) => {
    const _id = req.query.id;
        models.Champion
      .find({_id})
      .populate('items')
      .then((champion) => res.send(champion[0]))
      .catch(next);
  },

  post: (req, res, next) => {
    const { name, type } = req.body;
    let imageUrl = '';
    const level = 0;
    const gold = 0;
    
    const { _id } = req.user;
    if (type === 'Tank'){
      imageUrl = 'https://res.cloudinary.com/dc6ctj58m/image/upload/v1616925724/Garen_zu0kfh.jpg'
    } else if (type === 'mage'){
      imageUrl = 'https://res.cloudinary.com/dc6ctj58m/image/upload/v1617434165/Lux_uxbarh.jpg'
    } else if (type === 'Marksman'){
      imageUrl = 'https://res.cloudinary.com/dc6ctj58m/image/upload/v1617434149/Jinx_vfekv8.jpg'
    } else if (type === 'Assassin'){
      imageUrl = 'https://res.cloudinary.com/dc6ctj58m/image/upload/v1617434165/Zed_fcjwgi.jpg'
    }
    else if (type === 'Fighter'){
      imageUrl = 'https://res.cloudinary.com/dc6ctj58m/image/upload/v1617439002/j4_vysybm.jpg'
    }
    models.Champion.create({ name, type, level, gold, imageUrl, author: _id })
      .then((createdChampion) => {
        return Promise.all([
          models.User.updateOne({ _id }, { $push: { champions: createdChampion } }),
          models.Champion.findOne({ _id: createdChampion._id })
        ]);
      })
      .then(([modifiedObj, championObj]) => {
        res.send(championObj);
      })
      .catch(next);
  },

  put: (req, res, next) => {
    const id = req.params.id;
    let { gold, level } = req.body;
    
    models.Champion.updateOne({ _id: id }, { gold, level})
      .then((updatedChampion) => res.send(updatedChampion))
      .catch(next)
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    models.Champion.deleteOne({ _id: id })
      .then((removedChampion) => res.send(removedChampion))
      .catch(next)
  }
};