const router = require('express').Router();
const {Messages } = require('../../models');
const withAuth = require('../../utils/auth')

router.post('/', withAuth, async (req, res) => {
    try {
        const newMessages = await Messages.create({
            ...req.body,
            user_id: req.session.user_id
        });

        res.status(200).json(newMessages)

    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async(req, res) => {
    try {
        const MessagesData = await Messages.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
              },
        })

        if(!MessagesData) {
            res.status(404).json({message: 'No post found with this ID'})
            return;
        }
        res.status(200).json(MessagesData);
    } catch (err) {
        res.status(500).json(err);
    }
})












module.exports = router;