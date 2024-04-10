import Ads from "../models/Ads.js";


export const addAds = async(req,res,next) =>{
        const { title, content } = req.body;
        try {
            const updateData = {
                title: title,
                content: content,
            };
    
            if (req.file) {
                updateData.image = req.file.filename; 
            }
    
            const savedAds = await Ads.create(updateData);
    
            return res.status(201).json({ savedAds });
    
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "An error occurred" });
        }
    }
 
    export const updateAds = async (req, res) => {
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
    
            const [updated] = await Ads.update(updateData, {
                where: { id: id }
            });
    
            if (updated) {
                // const updatedAds = await Ads.findByPk(id);
                return res.status(200).json({ message: 'Ads updated successfully', Ads: updated });
            } else {
                return res.status(404).json({ message: 'Ads not found' });
            }
    
        } catch (error) {
            console.log(error);
            return res.status(500).json(error);
        }
    }
    export const allAds = async (req, res) => {
        // console.log('here is Ads')
        try {
        const ads = await Ads.findAll();
            return res.status(200).json(ads);
        } catch (error) {
            return res.status(500).json({ message: "Server error" });
        }
    }

    export const deleteAds = async (req, res) => {
        const { id } = req.params;
        try {
            const deleted = await Ads.destroy({
                where: { id: id }
            });
    
            if (deleted) {
                return res.status(200).json({ message: "Ads deleted" });
            } else {
                return res.status(404).json({ message: "Ads doesn't exist" });
            }
    
        } catch (error) {
            return res.status(500).json(error);
        }
    }