const catchAsync = require("../utils/catchAsync");

exports.getAll = function (model, sortObject) {
    return catchAsync(async (req, res, next) => {
        let query = model.find({});
        if (sortObject) query.sort(sorObject);
        const documents = await query;

        return res.status(200).json({
            status: "Success",
            results: documents.length,
            data: { data: docs },
        });
    });
};
