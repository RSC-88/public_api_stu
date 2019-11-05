import express from 'express';
import * as basic from './basic.js';

const router = express.Router();
const DetectLanguage = require('detectlanguage');
const apiKey = process.env.KEY;
const detectLanguage = new DetectLanguage({
    key: apiKey,
    ssl: false,
});
router.get('/', basic.home);
router.post('/searching', function(req, res){
    const textToDetect = req.body.trans;
    detectLanguage.detect(textToDetect, function(error, result) {
        const context = {
            data: {
                title: JSON.stringify(result),
            },
        };
        
        res.render('home', context);
    });
});

export default router;
