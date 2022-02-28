const express = require('express');
const router = express.Router();
const _ = require('underscore');
const Img = require('../src/models/img');

//list all decrescent
router.get('/', async (req, res) => {
    try {
        const imgs = await Img.find({},{title: 1, _id: 0}).sort({title: -1});
        res.json({ error: false, imgs});
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});

//um registro aleatorio
router.get('/random', async (req, res) => {
    try {
        let imgs = await Img.find({});
        imgs = _.shuffle(imgs);
        const sorteada = imgs[0];
        res.json({ error: false, sorteada });
    } catch (err) {
        res.json({ error: true, message: err.message});
    }
});

//criar registro
router.post('/', async (req, res) => {
    try {
        const img = req.body;
        const response = await new Img(img).save();
        res.json({ error: false, img: response });
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
    
});

//atualizar somente o registro com o id
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const novo_img = req.body;
        const img = await Img.findByIdAndUpdate(id, novo_img);
        res.json({ error: false, img });
    } catch (err) {
        res.json({ error:true, message: err.message });
    }
});

//Deletar somente o registro com id
router.delete('/:id', async (req, res) => {

        try {
            const id = req.params.id;
            const img = await Img.findByIdAndDelete( id );

            res.status(200).json({message: 'Arquivo removido com sucesso!'});

        } catch (err) {
            res.status(422).json({message: 'O arquivo não foi encontrado!'});
        }
});


module.exports = router;