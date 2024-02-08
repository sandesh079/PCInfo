const Category = require("../models/categories");
require('dotenv').config();

const addNewCategories = async (req, res) => {
    try {
        const { category, subCategory } = req.body;

        // Check if the category or category and subcategory already exist
        const existingCategory = await Category.find({
            category: category,
            ...(subCategory && { subCategory: subCategory }) // Check for subcategory only if it's provided
        });

        if (existingCategory.length > 0) {
            return res.status(403).json({
                msg: "Category Already Exists"
            });
        }

        await Category.create(req.body);

        return res.status(201).json({
            msg: "Category added successfully"    
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            msg: "Internal Server Error"
        });
    }
};

const getAllCategories = async (req, res) => {
    try {
        const categoryList = await Category.find();
        return res.status(200).json(categoryList);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            msg: "Internal Server Error"
        });
    }
};

module.exports = { addNewCategories, getAllCategories };
