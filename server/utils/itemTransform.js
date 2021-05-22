const itemTransform = (item, currencies) => {
    const currency = currencies.filter(currency => currency.id === item.currency_id)[0];

    const transformedItem = {
        id: item.id,
        title: item.title,
        price: {
            currency: currency.symbol,
            amount: item.price,
            decimals: currency.decimal_places
        },
        picture: selectPicture(item),
        condition: item.condition === 'new' ? 'Nuevo' : 'Usado',
        free_shipping: item.shipping.free_shipping,
    }

    if (item.address) transformedItem.address = item.address.state_name;

    return transformedItem;
};

const selectPicture = item => item.pictures && item.pictures.length ?
    item.pictures[0].secure_url :
    item.thumbnail.replace(/-I\./, "-X.");

module.exports = {
   itemTransform,
}