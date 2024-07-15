import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import { Zoo } from "../models/zoo.model.js"
import { Location } from "../models/zoo_location.model.js"
import { Op } from "sequelize"

const save_zoo = asyncHandler(async (req, res) => {
    const { name, animal_tags, zooLocation } = req.body;
    try {
        const zooData = await Zoo.create({
            name: name,
            animal_tags: animal_tags,
            UserId: 1,
        });
        const LocationData = await Location.create({
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
                        zooData: zooData, LocationData
                    },
                    "Data has been saved Successfully"
                )
            )
    } catch (error) {
        throw new ApiError(401, error?.message)
    }
})

const update_zoo = asyncHandler(async (req, res) => {
    const { id } = req.params; // assuming the zoo id is passed as a URL parameter
    const { name, animal_tags, zooLocation } = req.body;
    try {
        // Find the zoo by id
        const zoo = await Zoo.findByPk(id);
        if (!zoo) {
            throw new ApiError(404, "Zoo not found");
        }

        // Update zoo data
        zoo.name = name;
        zoo.animal_tags = animal_tags;
        // Update UserId if needed, here it's set as static 1
        zoo.UserId = 1;
        await zoo.save();

        // Find the zoo location by ZooId
        const LocationData = await Location.findOne({ where: { ZooId: zoo.id } });
        if (!LocationData) {
            throw new ApiError(404, "Zoo location not found");
        }

        // Update zoo location data
        LocationData.website_url = zooLocation.website_url;
        LocationData.img_url = zooLocation.img_url;
        LocationData.number = zooLocation.houseno;
        LocationData.area = zooLocation.area;
        LocationData.city = zooLocation.city;
        LocationData.pincode = zooLocation.pincode;
        LocationData.state = zooLocation.state;
        LocationData.country = zooLocation.country;
        await LocationData.save();

        return res
            .status(200)
            .json(
                new ApiResponse(
                    200,
                    {
                        zooData: zoo,
                        zooLocationData: LocationData
                    },
                    "Data has been updated successfully"
                )
            );
    } catch (error) {
        throw new ApiError(401, error?.message);
    }
});

const view_zoo = asyncHandler(async (req, res) => {
    const { id } = req.params; // Get the zoo ID from the request parameters

    try {
        const zoodata = await Zoo.findOne({
            where: {
                id: id,
            },
            include: Location,
        });

        if (zoodata === null) {
            return res
                .status(422)
                .json({
                    status: "user not found"
                })
        }

        return res
            .status(200)
            .json(
                [
                    zoodata
                ]
            );
    } catch (error) {
        throw new ApiError(401, error?.message);
    }
});

const list_zoos = asyncHandler(async (req, res) => {
    const { filters, page = 1, limit = 10 } = req.body; // Destructure filters, page, and limit from request body
    const offset = (page - 1) * limit;

    try {
        // Construct query options based on filters
        const queryOptions = {
            offset,
            limit,
            include: [{
                model: Location, // Include ZooLocation for each Zoo
                required: true // Inner join to ensure only zoos with locations are returned
            }]
        };

        // Example of filtering by name if provided in filters
        if (filters?.name) {
            queryOptions.where = {
                name: {
                    [Op.like]: `%${filters.name}%`
                }
            };
        }

        // Example of filtering by state if provided in filters
        if (filters?.state) {
            if (!queryOptions.where) {
                queryOptions.where = {};
            }
            queryOptions.where.state = filters.state;
        }

        // Query zoos with pagination and filters
        const { count, rows: zoos } = await Zoo.findAndCountAll(queryOptions);

        // Construct the response in the required format
        const response = {
            summary: {
                totalRecords: count,
                pageSize: limit,
                pageNumber: page
            },
            results: zoos
        };
        return res.status(200).json(
          response
        );
    } catch (error) {
        throw new ApiError(401, error?.message);
    }
});


const deactivate_state = asyncHandler(async (req, res) => {
    const { id } = req.params
    const { state } = req.body;
    try {
        // Find the zoo by id
        const zoo = await Zoo.findByPk(id);
        if (!zoo) {
            throw new ApiError(404, "Zoo not found");
        }
        zoo.state = state;
        await zoo.save();
        return res
            .status(200)
            .json(
                new ApiResponse(
                    200,
                    "state has been changed successfully"
                )
            );
    } catch (error) {
        throw new ApiError(401, error?.message);
    }

})

export {
    save_zoo,
    update_zoo,
    view_zoo,
    list_zoos,
    deactivate_state
}