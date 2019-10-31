//index, show, store, update, destroy
const User = require('../models/User');

module.exports = {
    async store(req,res){
        const nome = req.body.nome;
        const cidade = req.body.cidade;
        const foto = req.file.filename;
        const email = req.body.email;
        const diversao = req.body.diversao
    
        let user = await User.findOne({email});

        if (!user){
            user = await User.create({
                nome:nome,
                cidade:cidade,
                foto:foto,
                email:email,
                diversao: diversao.split(',').map(diversao => diversao.trim())
            })
        }

        
        return res.json(user);
    }
}