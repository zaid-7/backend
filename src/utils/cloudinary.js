import {v2 as cloudinary} from 'cloudinary';
import fs from "fs;"
          
cloudinary.config({ 
  cloud_name: 'dvah004md', 
  api_key: '271389432256253', 
  api_secret: '8K-FAWP7e5NtvPfLftr7q6BCZLE' 
})

const uploadOnCloudinary= async (localFilePath)=>{
    try {
        if(!localFilePath) return null
        
        const response=await cloudinary.uploader.upload(
            localFilePath,{
                resource_type:auto
            }
        )
        console.log("file has been uploaded successfully",response.url);
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
    }
}

export {uploadOnCloudinary}