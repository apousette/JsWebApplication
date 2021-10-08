'use strict';

exports.index = (req, res) => {
    res.sendfile('public/main.html');
};
