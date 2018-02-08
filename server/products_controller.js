module.exports = {
    create:(req, res, next) => {
        const db = req.app.get('db');
        const {name, description, price, imageurl} = req.body;

        db.create_product([name, description, price, imageurl]).then(() => {
            res.status(200).send();
        }).catch( () => {
            
            res.status(500).send();
        })
    },
    getOne: (req, res, next) => {
        const db = req.app.get('db');
        db.read_product(req.params.id).then(product => {
            res.status(200).send(product);
        }).catch((error) => {
            console.log(error)
            res.status(500).send();
        })
    },
    getALL: (req, res, next) => {
        const db = req.app.get('db');
        db.read_products().then(products => {
            res.status(200).send(products);
        }).catch( () => {
            
            res.status(500).send();
        })
    },
    update:(req, res, next) => {
        const db = req.app.get('db');
        db.update_products([req.params.id, req.query.desc]).then(() => {
            res.status(200).send();
        }).catch(() => {
            
            res.status(500).send();
        })
    },
    delete:(req, res, next) => {
        const db = req.app.get('db');
        db.delete_product(req.params.id).then(() => {
            res.status(200).send();
        }).catch( (error) => {
            console.log(error)
            res.status(500).send();
        })
    },
}