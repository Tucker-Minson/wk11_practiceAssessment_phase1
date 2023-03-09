'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airplane.init({
    airlineCode: DataTypes.INTEGER,
    flightNumber: DataTypes.INTEGER,
    inService: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    },
    maxNumPassengers: DataTypes.INTEGER,
    currentNumPassengers: {
      type: DataTypes.INTEGER,
      validate: {
        lessThanMax(num){
          if(num > maxNumPassengers) {
            throw new Error()
          }
        },
        inService(){
          if(this.inService === false && currentNumPassengers !== null) {
            throw new Error("currentNumPassengers must be null if inService is false")
          }
        }
      }
    },
    firstFlightDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};
