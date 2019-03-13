function error500(err, req, res, next) {
    console.log('error500',err);
    res.status(500).json({
        error: '500 Server Error',
        stack: err
    });
}

module.exports = error500;