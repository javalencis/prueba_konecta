import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Sale = sequelize.define(
  "sale",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
