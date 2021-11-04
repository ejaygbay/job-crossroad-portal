const categoryView = (req, res) => {
    res.render('categories/category', { page: 'category' });
}

module.exports = categoryView;