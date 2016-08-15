var Item = require('./item.model');


exports.index = function(req, res) {
	Item.find()
	.exec(function (err, items){
		return res.status(200).json(items);
	});
}
exports.add = function(req, res) {
	debugger
	var newItem = new Item({
				name: req.body.name
	})
	newItem.save(function(err, newItem) {
      if (err) {console.error(err);}
      else { console.log(newItem);}
    });
}