import { v2 as cloudinary } from 'cloudinary'


cloudinary.config({
    cloud_name: 'fnmilove',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


export const deleteFolder = async (folder) => {
    try {
        // find resources by asset folder
        let req = await cloudinary.api.resources_by_asset_folder(folder, {
            max_results: 150,
            fields: "resource_type"
        });
        let resources = req.resources;
        let images = resources.filter(resource => resource.resource_type === "image")
        let videos = resources.filter(resource => resource.resource_type === "video")
        // check if any resource type is found and delete resources by public ids
        if (images.length > 0) {
            let publicIds = images.map(image => image.public_id)
            let delReport = await cloudinary.api.delete_resources(publicIds, {
                resource_type: "image"
            })
            console.log(delReport)
        }
        if(videos.length > 0){
            let publicIds = videos.map(video => video.public_id)
            let delReport = await cloudinary.api.delete_resources(publicIds, {
                resource_type: "video"
            })
            console.log(delReport)
        }
        // delete folder
        let folderReport = await cloudinary.api.delete_folder(folder);
        console.log(folderReport)
    } catch (error) {
        console.log("Ran into some errors while deleting folder resources")
        console.error(error.message)
    }
}

export const deleteImages = async (publicIds) => {
    try {
            let delReport = await cloudinary.api.delete_resources(publicIds, {
                resource_type: "image"
            })
            console.log(delReport)
    } catch (error) {
        console.log("Ran into some errors while deleting folder resources")
        console.error(error.message)
    }
}

export const findAssetDetails = async (publicId) => {
    try {
        let asset = await cloudinary.api.resource(publicId)
        return asset
    } catch (error) {
        console.error(error.message)
        throw error
    }
}