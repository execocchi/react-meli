const axios = require('axios');
const author = require('../constants/author');
const { itemTransform } = require('../utils/itemTransform');
const { getCategories } = require('../utils/getCategories');

module.exports={
    show: async (req, res) => {
        const { q } = req.query;

        if (!q) return res.status(404).json({ message: 'Ingrese un parámetro de búsqueda' });

        try {
            const itemsResponse = await axios(`https://api.mercadolibre.com/sites/MLA/search?q=${q}&limit=4`);
            
            const { results, filters } = itemsResponse.data;
            
            const currenciesResponse = await axios(`https://api.mercadolibre.com/currencies`);
            
            const currencies = await currenciesResponse.data;
            
            const items = results.map(item => itemTransform(item, currencies));
            
            const categories = getCategories(filters);
            
            const data = {
              author,
              categories,
              items,
            };
          
            res.status(200).send(data);
        } catch (error) {
            res.status(400).json({ message: 'Ups! Algo no salió como esperabas!' });
        }
    },

    detail: async (req, res) => {
        const { id } = req.params;

        if (!id) return res.status(404).json({ message: 'Ingresá un id' });

        try {
            const itemDetailResponse = await axios(`https://api.mercadolibre.com/items/${id}`);
            
            const itemDetail = itemDetailResponse.data;
            
            if (itemDetail.status !== 'active') return res.status(404).json({ message: 'El producto no se encuentra disponible' });
            
            const itemDescriptionResponse = await axios(`https://api.mercadolibre.com/items/${id}/description`);
            
            const itemDescription = itemDescriptionResponse.data;
            
            const currenciesResponse = await axios(`https://api.mercadolibre.com/currencies`);
            
            const currencies = await currenciesResponse.data;
            
            const item = itemTransform(itemDetail, currencies);
            
            item.category_id = itemDetail.category_id,
            item.sold_quantity = itemDetail.sold_quantity,
            item.description = itemDescription.plain_text;
            
            const data = {
              author,
              item,
            };
          
            res.send(data);
        } catch (error) {
            res.status(400).json({ msg: 'La búsqueda no coincide con ningún resultado!' });
        }
    }
};

