import postMessage from "../models/postMessage.js"

export const getPost = async (req, res) => {
    try {
        const postMessages = await postMessage.find();
          
        console.log(postMessage);
        res.status(200).json(postMessages);
    } catch (error) {
        console.log(error.message);
        res.status(404).json({message: error.message});
    } 
}
 
export const createPost = async (req, res) => {
    const body = req.body;

    const newPost = new postMessage(post);
    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}