// bring everything together in routes file, deconstructor to bring out SPECIFIC methods from library
const { Router } = require("express");

// create a new router
const userRouter = Router();

// pull in the create user controller
const { createUser } = require("./controllers");

// now we set our HTTP verbs, we are using 'C' equivalent which is 'P'
// you dont need to use createUser() because userRouter.post is running it, the /user is the ENDPOINT
userRouter.post("/user", createUser);

module.exports = userRouter;
