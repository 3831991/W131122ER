const { User } = require('../handlers/users/models/user.model');
const { Card } = require('../handlers/cards/cards.model');
const { users, cards } = require('./initial-data.json');

const initialDataStart = async () => {
    const userAmount = await User.find().countDocuments();

    if (!userAmount) {
        const userIds = [];

        for (const u of users) {
            const user = new User(u);
            const obj = await user.save();

            if (obj.isBusiness) {
                userIds.push(obj._id);
            }
        }

        for (const c of cards) {
            const card = new Card(c);
            const i = Math.floor(Math.random() * userIds.length);
            card.user_id = userIds[i];
            await card.save();
        }
    }
}

initialDataStart();