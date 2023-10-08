const express = require('express');
const app = express();
const port = 3001;
const base = `${__dirname}/public`;
time = Date.now();
const mongoose = require('mongoose')

// including the sensor schema.
const Sensor = require('./models/lightsensor')
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

mongoose.connect('mongodb+srv://gaurish:gaurish@sls.wrqupbr.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('MongoDB Connection Error:', error);
});

setInterval(sensor_publish, 5000)

function sensor_publish() {
  // Dummy sensor data.
  const light_data = {
    id: 1,
    name: 'Device 1',
    address: 'unit A, 8 grey street, first floor',
    time: Date.now(),
    lightintensity : 20,
  };

  // Implementation of the functions for the reading of the sensor and publishing it to the database cluster.
  const low = 15;
  const high = 55;
  reading = Math.floor(Math.random() * (high - low) + low);
  light_data.lightintensity = reading;

  const jsonString = JSON.stringify(light_data);
  console.log(jsonString);

  // Initializing new sensor values according to the cluster and logging the same on the cluster.
  const newSensor = new Sensor({
    id: light_data.id,
    name: light_data.name,
    address: light_data.address,
    time: light_data.time,
    lightintensity: light_data.lightintensity,
  });

  newSensor
    .save()
    .then((doc) => {
      console.log(doc);
    })
    .catch((err) => {
      console.error(err);
    });
}




app.get('/table', (req, res) => {
    res.sendFile(`${base}/table.html`);
  });
  
app.get('/', (req, res) => {
    res.sendFile(`${base}/index.html`);
  });
  
  app.get('/light', (req, res) => {
    res.sendFile(`${base}/light.html`);
  });
  app.get('/graph', (req, res) => {
    res.sendFile(`${base}/graph.html`);
  });
  
  
  