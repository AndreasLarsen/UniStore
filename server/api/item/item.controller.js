var Item = require('./item.model');


exports.index = function(req, res) {
	Item.find()
	.exec(function (err, items){
		return res.status(200).json(items);
	});

}