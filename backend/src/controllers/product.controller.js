import { Op } from "sequelize";
import { Product } from "../models/Product.js";
import { Sale } from "../models/Sale.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      where: {
        stock: {
          [Op.gt]: 0,
        },
      },
      order: [["createdAt", "DESC"]],
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProducts = async (req, res) => {
  const product = req.body;
  try {
    let newProduct = await Product.create(product);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProducts = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({
      where: { id },
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.update(req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProducts = async (req, res) => {
  const { id } = req.params;
  try {
    await Sale.destroy({
      where: {
        productId: id,
      },
    });
    const productRemoved = await Product.destroy({
      where: {
        id,
      },
    });
    if (!productRemoved) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({
      message: "Product delete successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
