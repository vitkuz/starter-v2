module.exports = function(req, res, next) {
    const json = res.json.bind(res);

    res.data = {
        meta: {
            lang: req.locale,
            date: Date.now(),
            code: null,
            time: null
        },
        messages:{
            error:[],
            info:[],
            success:[],
            warning:[]
        },
        logTime: function() {
            this.meta.time = Date.now() - this.meta.date;
            return this;
        },
        addMessage: function(type, message) {
            this.messages[type].push(message);
            return this;
        }
    };

    res.json = function (data) {

        res.data.logTime();
        res.data.meta.code = this.statusCode;

        const dataToSend = {
            ...res.data,
            ...data
        };
        json(dataToSend);
    };

    next();
};
