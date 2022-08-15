const router = require("express").Router();
const usersController = require("../controllers/usersControllers");

router
  // list of all users
  .get("/", usersController.users_get)

  //adding users to the DB
  .post("/", usersController.users_post)

  // returning a single user
  .get("/:id", usersController.user_id)

  // deleting user
  .delete("/:id", usersController.user_delete)

  // updating user
  .patch("/:id", usersController.user_update);

module.exports = router;
