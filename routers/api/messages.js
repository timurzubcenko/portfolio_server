const express = require('express');
const router = express.Router()
const Message = require('../../models/Message')

router.post('/add', async (req, res) => {
    try {
        const { email, description, name } = req.body

        const message = await new Message({
            email,
            name,
            description,
        })

        await message.save()
        res.json('Your message has been sent!')
    }
    catch (err) {
        console.log(err)
    }
})

router.get('/', (req, res) => {
    Message.find()
        .then((messages) => {
            res.json(messages)
        })
        .catch((err) => {
            res.status(404).json({ error: "No messages found" })
        })
})

router.delete('/delete/:id', async (req, res) => {
    try {

        const message = await Message.findOneAndDelete({ _id: req.params.id })

        res.json(message)

    } catch (error) {
        console.log(error)
    }
})

module.exports = router