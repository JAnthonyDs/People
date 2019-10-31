//index, show, store, update, destroy
const User = require('../models/User');

module.exports = {
    async store(req,res){
        const nome = req.body.nome;
        const cidade = req.body.cidade;
        const foto = req.file.filename;
        const senha = req.body.senha;
        const confirmar_senha = req.body.confirmar_senha;
        const email = req.body.email;
        const diversao = req.body.diversao
    
        let user = await User.findOne({email});

        if (!user){
            if(senha === confirmar_senha){
                user = await User.create({
                    nome:nome,
                    cidade:cidade,
                    foto:foto,
                    email:email,
                    senha:senha,
                    diversao: diversao.split(',').map(diversao => diversao.trim())
                })

                return res.json(user);
            }else{
                return res.json({message : "senhas não batem"})
            }
            
        }else{
            return res.json({message: "email ja cadastrado"})
        }

        
        
    }
}