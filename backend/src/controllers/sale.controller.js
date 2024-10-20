import { Sale } from "../models/Sale.js";
import { Product } from "../models/Product.js";
import { sequelize } from "../database/db.js";

export const getSales = async (req, res) => {
  try {
    const sales = await Sale.findAll({
      include: Product,
    });
    res.json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createSale = async (req, res) => {
  const { productId, quantity } = req.body;

  const t = await sequelize.transaction();

  try {
    const product = await Product.findOne({
      where: { id: productId },
      transaction: t,
    });

    if (!product) {
      throw new Error("Producto no encontrado");
    }

    if (product.stock < quantity) {
      throw new Error("Stock insuficiente");
    }

    const sale = await Sale.create(
      {
        productId,
        quantity,
      },
      { transaction: t }
    );

    product.stock -= quantity;
    await product.save({ transaction: t });

    await t.commit();

    res.status(201).json({ message: "Venta realizada con éxito", sale });
  } catch (error) {
    await t.rollback();
    res.status(500).json({ message: error.message });
  }
};
