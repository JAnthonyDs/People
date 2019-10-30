//index, show, store, update, destroy
const User = require('../models/User');

module.exports = {
    async store(req,res){
        const nome = req.body.nome;
        const cidade = req.body.cidade;
        const email = req.body.email;
    
        let user = await User.findOne({nome,cidade});

        if (!user){
            user = await User.create({ nome,cidade,email})
        }

        return res.json(user);
    }
}