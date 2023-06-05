const app = require('./app');
require('dotenv').config();
const cors = require('cors');

// Enable CORS for middle
app.use(cors());

const PORT = 3000; //  port number

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})