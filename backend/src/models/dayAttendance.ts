import { Student } from ".";
import { DataTypes, Model } from "sequelize";
import sequelize from "../db";

export class DayAttendance extends Model {}

DayAttendance.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    hour: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Student,
        key: "id",
      },
    },
    isAbsent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "day-attendance",
    timestamps: false,
  }
);

DayAttendance.belongsTo(Student, { foreignKey: "studentId", as: "student" });

Student.hasMany(DayAttendance, { foreignKey: "studentId" });
