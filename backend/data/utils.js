const fs = require('node:fs/promises');

async function readData() {
  const data = await fs.readFile('foods.json', 'utf8');
  return JSON.parse(data);
}

async function readDataEvents() {
  const data = await fs.readFile('events.json', 'utf8');
  console.log(`events data ${JSON.stringify(data)}`)
  return JSON.parse(data);
}

async function writeDataEvents(data) {
  await fs.writeFile('events.json', JSON.stringify(data));
}


exports.readData = readData;
exports.readDataEvents = readDataEvents;
exports.writeDataEvents = writeDataEvents;