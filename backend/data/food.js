// use node:fs to read json file

const fs = require('node:fs/promises');
const {readData } = require("./utils");
const { NotFoundError } = require("../util/errors");


async function getAllFoods() {
    const storedData = await readData();
  if (!storedData.foods) {
    throw new NotFoundError('Could not find any foods.');
  }
  return storedData.foods;
}

exports.getAllFoods = getAllFoods;