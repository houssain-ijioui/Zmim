const router = require('express').Router();
const mongoose = require('mongoose');


// INDEX
router.get('/', (req, res) => {
    res.render('index');
})


// HISTORY
router.get('/history', (req, res) => {
    res.render('history', { tours: [] })
})



// PROFILES
router.get('/profiles', (req, res) => {
    res.render('profiles', { profiles: [] });
})


// SAVE
router.post('/save', (req, res) => {
    res.redirect('/', { success_msg: 'saved' })
})


module.exports = router;