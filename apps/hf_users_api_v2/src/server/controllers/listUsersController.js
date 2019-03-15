const axios = require('axios');
const User = require('../models/User');
const CONFIG = require('../setup/config');

const createPagination = require('../utils/createPagination');

async function listUserController(req, res) {
  try {
    // let { limit, page, skip, sort } = validateListQuery(req);
    let { limit, page, skip, sort } = req.query;

    console.log({limit, page, skip, sort});

    const allUsers = await User.find({})
      .select('-password')
      .sort(sort)
      .skip(parseInt(skip))
      .limit(parseInt(limit));

    const countDocuments = allUsers.length;
    const pagination = createPagination(countDocuments, page, limit);

    let users;

    if (allUsers.length > 0) {
      users = allUsers;
    } else {
      users = [];
    }

    res.status(200).json({
      query: {
        limit,
        page,
        skip,
        sort
      },
      users,
      pagination
    });
  } catch(e) {
    next(e);
  }
}

module.exports = listUserController;
