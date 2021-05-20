const db = require("../models");
const { getAllOrders } = require("./cartController");
const Order = db.orders;

exports.addOrder = function (req, res) {
    const id = req.params.cart_id;
   
    Order.update(
        { 
            cart_id: req.params.id},
        {
            fields: ['cart_id'],
            where: { id: req.body.id }
        }
    )
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "add order was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot add order with id=${id}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error adding order with id=${id}`
            });
        });
}



exports.getAllOrders = function (req, res) {
  //const cart_id =req.params.id
    Order.findAll(
    { 
        where:
        {
        id =req.params.cart_id
        }
    }
)
.then(data => {
    res.send({
        'Data': data,
        'Status': 200
    });
})
.catch(err => {
    res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving Order."
    });
});
}

exports.deleteAllOrders = function (req, res) {
    Order.findAll(
        { 
            attributes:['id','cart_id','product_id','address_id','quantity','amount','time_date','status','paid','customer_id'],
            where: { cart_id =req.params.cart_id}
        }
    )
   // const id = req.params.cart_id;
   
    .then(function(orders){
        orders.forEach(
            Order.update(
        { cart_id: null},
        {
            fields: ['cart_id'],
            where: { id: req.body.id }
        }
    )) 
            
        })
        
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "delete order was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete order with id=${id}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error deleting order with id=${id}`
            });
        });
    
    }
exports.deleteOrder = function (req, res) {
    const id = req.params.cart_id;
   
    Order.update(
        { cart_id: null},
        {
            fields: ['cart_id'],
            where: { id: req.body.id }
        }
    )
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "delete order was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete order with id=${id}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error deleting order with id=${id}`
            });
        });

}



exports.checkout = function (req, res) {
    Order.findAll(
        { 
            attributes:['id','cart_id','product_id','address_id','quantity','amount','time_date','status','paid','customer_id'],
            where: { cart_id =req.params.cart_id}
        }
    )
 
    .then(function(orders){
        orders.forEach(
            Order.update(
        { cart_id: null, paid:true, customer_id:cart_id},
        {
            fields: ['cart_id','paid','customer_id'],
            where: { id: req.body.id }
        }
    )) 
            
        })
        
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "delete order was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete order with id=${id}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error deleting order with id=${id}`
            });
        });
    }