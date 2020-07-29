//index, show, store, update, destroy
const User = require('../models/User');

module.exports = {

    //async encontrar(req,res){
     //   const pesquisa = req.query.pesquisa;
      //  const resultado = await User.find({$or: [{nome: {$regex: new RegExp(pesquisa,"i")}},{cidade: {$regex: new RegExp(pesquisa,"i")}},{jogos: {$regex: new RegExp(pesquisa,"i")}}]}).then(resposta => {
      //      return res.json(resposta)
      //  })
    //},

    async index(req,res){
        const usuarios = await User.find({}).then(resposta => {
            return res.json(resposta);
        })
    },

    async autenticar(req,res){
        const email = req.body.email;
        const senha = req.body.senha;
        const login = await User.find({senha: senha, email: email});
        return res.json(login)
    },

    async delete(req,res){
        const {user_id} = req.params;
        const resutado = await User.deleteOne({ _id: user_id }).then(resposta => {
            return res.json({message: 'Usuário deletado'})
        })
    },
    
    async store(req,res){
        const nome = req.body.nome;
        const cidade = req.body.cidade;
        const foto = req.file.filename;
        const senha = req.body.senha;
        const confirmar_senha = req.body.confirmar_senha;
        const email = req.body.email;
        const jogos = req.body.jogos
    
        let user = await User.findOne({email});

        if (!user){
            if(senha === confirmar_senha){
                user = await User.create({
                    nome:nome,
                    cidade:cidade,
                    foto:foto,
                    email:email,
                    senha:senha,
                    jogos: jogos.split(',').map(jogos => jogos.trim())
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