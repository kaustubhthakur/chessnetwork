const express = require('express')
const router = express();
const {createPost,updateUser,votepost,getFeedPosts,getPost,getPosts,getUserPosts} = require('../controllers/posts')
const protectRoute = require('../utils/protectRoute')
router.get('/:id',protectRoute,getPost)
router.get('/',protectRoute,getPosts)
router.get('/',protectRoute,getFeedPosts)
router.post('/',protectRoute,createPost)
router.put('/:id/vote',protectRoute,votepost)
//router.put('/:id',protectRoute,updateUser)
router.get('/:id',protectRoute,getUserPosts)
module.exports = router;