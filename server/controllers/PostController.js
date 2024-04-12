import Post from "../models/Post.js";


export const addPost = async(req,res,next) =>{
        const { title, content } = req.body;
        try {
            const updateData = {
                title: title,
                content: content,
            };
    
            if (req.file) {
                updateData.image = req.file.filename; 
            }
    
            const savedPost = await Post.create(updateData);
    
            return res.status(201).json({ savedPost });
    
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "An error occurred" });
        }
    }
 
    export const updatePost = async (req, res) => {
        const { title, content } = req.body;
        const { id } = req.params;
    
        try {
            const updateData = {
                title: title,
                content: content,
            };
    
            if (req.file) {
                updateData.image = req.file.filename;
            }
    
            const [updated] = await Post.update(updateData, {
                where: { id: id }
            });
    
            if (updated) {
                // const updatedPost = await Post.findByPk(id);
                return res.status(200).json({ message: 'Post updated successfully', post: updated });
            } else {
                return res.status(404).json({ message: 'Post not found' });
            }
    
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    }
    export const allPost = async (req, res) => {
        // console.log('here is Post')
        try {
        const post = await Post.findAll();
            return res.status(200).json(post);
        } catch (error) {
            return res.status(500).json({ message: "Server error" });
        }
    }
 
    export const latestPost = async(req,res) =>{
        try {
            const latestPosts = await Post.findAll({
                order: [['createdAt', 'DESC']],
                limit: 4
              });
              if(latestPosts){
                return res.status(200).json(latestPosts)
              }
              return res.status(400).json({message:"something went wrong"})
        } catch (error) {
            return res.status(500).json({message:error})
        }
    }
    export const deletePost = async (req, res) => {
        const { id } = req.params;
        try {
            const deleted = await Post.destroy({
                where: { id: id }
            });
    
            if (deleted) {
                return res.status(200).json({ message: "Post deleted" });
            } else {
                return res.status(404).json({ message: "Post doesn't exist" });
            }
    
        } catch (error) {
            return res.status(500).json(error);
        }
    }