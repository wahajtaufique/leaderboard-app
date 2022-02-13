const mongoose = require('mongoose');

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };

        await mongoose.connect(
            "ADD_YOUR_DATABASE_CONNECTION_URL",
            connectionParams
        );

        console.log("DB Connected!");
    } catch (err) {
        console.log("DB Connection Error!", err);
    }
}