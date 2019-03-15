module.exports = () => {
  return (req, res, next) => {
    const jsonFuncRef = res.json.bind(res);

    const responseDefaultModel = {
      meta: {
        lang: req.locale,
        date: Date.now(),
      },
      messages: {
        error:[],
        info:[],
        success:[],
        warning:[]
      }
    };

    res.addMessage = (type) => {
      responseDefaultModel.messages[type].push(message);
    };

    res.json = (data) => {
      jsonFuncRef({
        ...data,
        ...responseDefaultModel
      });
    };

    next();
  }
};
