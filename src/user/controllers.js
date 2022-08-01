// here are the CRUD equivalent that is GPPD
const User = require("./model");

// 'C' in CRUD, req and res are short for requestObj, responseObj
exports.createUser = async (req, res) => {
    try {
        // wrap it in model.create function
        const newUser = await User.create(req.body);

        // deal with request, where it came from, what sent it, it has many key/val pai
        console.log(newUser);

        // send an object info in response
        res.send({ msg: "This came from createUser" });
    } catch (error) {
        console.log(error);
        res.send({ err: error });
    }
};
