const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Users List')
})

router.get('/new', (req, res) => {
    res.render('users/new')
})

router.post('/', (req, res) => {
    res.send('Create User')
})

router
    .route('/:id')
    .get((req, res) => {
        console.log(req.user)
        res.send('Get User: ' + req.params.id)
    })
    .put((req, res) => {
        res.send('Update User: ' + req.params.id)
    })
    .delete((req, res) => {
        res.send('Delete User: ' + req.params.id)
    })

    const users = [{name: 'Jay'}, {name: 'Khushi'}]

router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})



module.exports = router