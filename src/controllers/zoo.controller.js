import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import { Zoo } from "../models/zoo.model.js"
import { ZooLocation } from "../models/zoo_location.model.js"

const zooSave = asyncHandler(async (req, res) => {
    const { name, animal_tags, state, zooLocation } = req.body;
    try {
        const zooData = await Zoo.create({
            name: name,
            animal_tags: animal_tags,
            state: state,
            UserId: 1,
        });
        const zooLocationData = await ZooLocation.create({
            ZooId: zooData.id,
            website_url: zooLocation.website_url,
            img_url: zooLocation.img_url,
            number: zooLocation.houseno,
            area: zooLocation.area,
            city: zooLocation.city,
            pincode: zooLocation.pincode,
            state: zooLocation.state,
            country: zooLocation.state,

        });
        return res
            .status(200)
            .json(
                new ApiResponse(
                    200,
                    {
                        zooData: zooData, zooLocationData
                    },
                    "Data has been saved Successfully"
                )
            )
    } catch (error) {
        throw new ApiError(401, error?.message)
    }
})

export {
    zooSave,
}