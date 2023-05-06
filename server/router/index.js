const UserController = require('../controllers/userController')
const PostController = require('../controllers/postController')
const CommentController = require('../controllers/commentController')
const StyleController = require('../controllers/styleController')
const CategoryController = require('../controllers/categoryController')
const FavoritesController = require('../controllers/favoritesController')
const RoleController = require('../controllers/RoleController')


const authMiddleware = require('../middlewares/auth-middleware');
const rootMiddleware = require('../middlewares/root-middleware');
const removeCommentMiddleware = require('../middlewares/remove-comment-middleware');
const cookerMiddleware = require('../middlewares/cooker-middleware');

const Router = require('express').Router 

const router = new Router()

router.get('/style', StyleController.getStyle)
router.put('/style-edit',rootMiddleware, StyleController.editStyle)

router.put('/change-role',rootMiddleware, RoleController.changeRole)
router.delete('/ban-user', rootMiddleware, UserController.banUser);
router.get('/users',rootMiddleware, UserController.getUsers);

router.post('/registration', UserController.registration);
router.post('/login', UserController.login)
router.post('/logout', UserController.logout)

router.get('/activate/:link', UserController.activate);
router.get('/refresh', UserController.refresh);


router.get('/posts', PostController.getPosts);
router.get('/findPost', PostController.findPost)
router.get('/current-post/:link', PostController.getСurrentPost);
router.post('/create-new-post',cookerMiddleware,  PostController.createNewPost);
router.post('/add-image',cookerMiddleware,  PostController.addImage);
router.delete('/remove-post', rootMiddleware, PostController.removePost);
router.get('/random-post', PostController.getRandomPost);

router.post('/create-new-comment', authMiddleware, CommentController.createNewComment);
router.get('/get-comments', CommentController.getComments);
router.delete('/removeComment', removeCommentMiddleware, CommentController.removeComment);

router.get('/categories', CategoryController.getCategories);
router.post('/create-new-category', rootMiddleware, CategoryController.createNewCategory);
router.delete('/remove-category', rootMiddleware, CategoryController.removeCategory);
router.put('/edit-category', rootMiddleware, CategoryController.editCategory);


router.get('/get-favorites', authMiddleware, FavoritesController.getFavorites);
router.post('/push-favorites', authMiddleware, FavoritesController.pushFavorites);
router.delete('/remove-favorites', authMiddleware, FavoritesController.removeFavorites);

router.post('/change-role', rootMiddleware, RoleController.changeRole);


module.exports = router