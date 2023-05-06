const PostService = require('../service/post-service');

class PostController {
    async getPosts(req, res, next) {
        try {
            const {skip,categorylink} = req.query
            const posts = await PostService.getPosts(skip,categorylink)
            return res.json(posts)
        } catch (error) {
            next(error)
        }
    }
    async getСurrentPost(req, res, next) {
        try {
            const posts = await PostService.getСurrentPost(req.params.link)
            return res.json(posts)
        } catch (error) {
            next(error)
        }
    }
    async getRandomPost(req, res, next){
        try {
            const post = await PostService.getRandomPost()
            return res.json(post)
        } catch (error) {
            next(error)
        }
    }
    async createNewPost(req, res, next){
        try {
            const {title,description,recipe,components,category}=req.body.post
            const postData = await PostService.createNewPost(title,description,recipe,components,category)
            return res.json(postData)
        } catch (error) {
            next(error)
        }
    }
    async addImage(req, res, next){
        try {
            const file = req.files.image
            const post = req.body.post

            const postData = await PostService.addImage(post,file)
            return res.json(postData)
        } catch (error) {
            next(error)
        }
    }
    async removePost(req, res, next){
        try {
            const postDelete = await PostService.removePost(req.body._id)
            return res.json(postDelete)
        } catch (error) {
            next(error)
        }
    }
    async findPost(req, res, next){
        try {
            const {searchQuery} = req.query
            const searchPosts = await PostService.findPost(searchQuery)
            return res.json(searchPosts)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new PostController();