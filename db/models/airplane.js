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
    airlineCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        //max & min = 2
        len: [2,2],
        //all uppercase
        isUppercase: true,
      }
    },
    flightNumber:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,4],
        isNumeric: true
      }

    },
    inService: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    },
    maxNumPassengers: {
      type:DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 2,
        max: 853
      }
    },
    currentNumPassengers: {
      type: DataTypes.INTEGER,
      validate: {
        lessThanMax(num){
          if(num > this.maxNumPassengers || num < 0 ) {
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
    firstFlightDate: {
      type:DataTypes.DATE,
      validate: {
        isAfter: '2019-12-31',
        isBefore: '2022-01-01'
      }
    }
  }, {
    sequelize,
    modelName: 'Airplane',
  });

  return Airplane;
};
