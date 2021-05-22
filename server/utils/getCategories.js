const getCategories = filters => {

    if (filters.length > 0) {
        return filters
            .filter(filter => filter.id === 'category')[0].values[0].path_from_root
            .map(value => value.name);
    } else {
        return [];
    }

}

module.exports = {
    getCategories
}