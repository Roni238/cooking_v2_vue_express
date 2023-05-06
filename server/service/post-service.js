const СategoryModel = require('../models/category-model');
const PostModel = require('../models/post-model');
const CyrillicToTranslit = require('cyrillic-to-translit-js')
const Uuid = require('uuid')
const ApiError = require('../exceptions/api-error')
const fs = require('fs');

class PostService {
    async getPosts(skip, categoryLink) {
        if(categoryLink==='all'){
            const posts = await PostModel.find().limit(6).skip(skip)
            return posts
        }else{
            const category = await СategoryModel.findOne({categoryLink})
            const posts = await PostModel.find({category:category.categoryName}).limit(12).skip(skip)
            return posts
        }
    }
    async getСurrentPost(link){
        const thisPost = await PostModel.findOne({link})
        return thisPost
    }
    async createNewPost(title,description,recipe,components,category){ 
        if(await PostModel.findOne({title})){
            throw ApiError.BadRequest('Такой рецепт уже существует')
        }
        const cyrillicToTranslit = new CyrillicToTranslit()
        const link = cyrillicToTranslit.transform(title, "_").toLowerCase()

        const post = await PostModel.create({title,description,recipe,components,link,category})

        return post
        
    }
    async addImage(_id,file){
        const fileName = Uuid.v4()+".jpg"
        file.mv(__dirname +"/../"+"image"+"\\"+fileName)
        const post = await PostModel.findById({_id})
        post.fileName=fileName
        post.save()
        return fileName
    }
    async removePost(_id){
        const post = await PostModel.findById({_id})
        if(post.fileName!='default.jpg'){
          fs.unlinkSync(__dirname +"/../"+"image"+"\\"+post.fileName)  
        }
        const postData= await PostModel.deleteOne({_id})
        return postData 
    }
    async getRandomPost(){
        const postsCount = await PostModel.count()
        const random = Math.floor(Math.random() * postsCount)
        const randomPost = PostModel.findOne().skip(random)
        return randomPost
    }
    async findPost(searchQuery='Капучино'){
        const searchPosts = await PostModel.find({title:searchQuery})
        return searchPosts
    }
}

module.exports= new PostService()