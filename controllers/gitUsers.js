const express = require("express");
const router = express.Router();

const axios = require("axios");

const token = process.env.GITHUB_TOKEN;
const ROOT_URL = "https://api.github.com";


router.get("/", async (req, res, next) => {
   try {
     const username = req.query.username;
     if (!username) return res.render("index.ejs", { userInfo: null });
     const options = {
       headers: {
         Authorization: `token ${token}`,
       },
     };
     const githubUrl = await axios.get(
       `${ROOT_URL}/users/${username}`,
       options
     );
     //   res.json(githubUrl.data);
     const userData = githubUrl.data;
     console.log(userData);
    //  res.json(userData)
     res.render("gitUsers/index.ejs", { userData: userData });
   } catch (error) {
     console.log(error);
     return next();
   }
});

module.exports = router;
