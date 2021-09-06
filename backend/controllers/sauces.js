const ModelsSauce = require('../models/modelsSauce');

const fs = require('fs');


exports.getAllSauces = (req, res, next) => {
    ModelsSauce.find()
    .then(sauces => res.status(200).json(sauces))
    .catch(error => res.status(400).json({ error }));
};

exports.getOneSauce = (req, res, next) => {
    ModelsSauce.findOne({ _id: req.params.id })
    .then(sauce => res.status(200).json(sauce))
    .catch(error => res.status(404).json({ error }));
};

exports.createSauce = (req, res, next) => {
    const sauceObject = JSON.parse(req.body.sauce);
    delete sauceObject._id;
    //create new sauce
    const sauce = new ModelsSauce({
      ...sauceObject,
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    sauce.save()
      .then(() => res.status(201).json({ message: 'Sauce enregistrée !'}))
      .catch(error => res.status(400).json({ error }));
};

exports.modifySauce = (req, res, next) => {
    ModelsSauce.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Sauce modifiée !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteSauce = (req, res, next) => {
    ModelsSauce.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Sauce supprimée !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.likeSauce = (req, res, next) => {
    
};


