const express = require('express'); 
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const itemRoutes = require('./routes/itemsRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

app.use('/api/items', itemRoutes);
app.use('/api/categories', categoryRoutes);

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});