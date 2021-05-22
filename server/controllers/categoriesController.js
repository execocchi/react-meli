const axios = require('axios');

module.exports={
    category: async (req, res) => {
        const { id } = req.params;

        if (!id) return res.status(404).json({ message: 'Ingrese un parámetro de búsqueda' });

        try {
            const itemCategoriesResponse = await axios(`https://api.mercadolibre.com/categories/${id}`);
            
            const categories = itemCategoriesResponse.data.path_from_root.map(itemcategory => itemcategory.name);
            
            const data = {
              categories,
            };
          
            res.status(200).send(data);
        } catch (error) {
            res.status(400).json({ message: 'Ups! Algo no salió como esperabas!' });
        }
    }
};
