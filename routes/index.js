module.exports = (app)=>{
    var comida = require('../models/comida')
    var database = require('../config/database')()

    app.get('/',async(req,res)=>{
         var dadosProdutos = await comida.find({status:'0'}).sort({data:-1})
         var dadosVencidos = await comida.find({status:'1'}).sort({data:-1})
         var dadosExcluidos = await comida.find({status:'2'})
         var dadosDescartados = await comida.find({status:'3'})
         var dadosMes = []
         var dadosSemana = []
         var data = new Date()
         var hj = data

         for(var i=0; i<dadosProdutos.length; i++){
             var id = dadosProdutos[i]._id
             var dv = new Date(dadosProdutos[i].data)

            if(hj > dv){
                var alterar = await comida.findByIdAndUpdate({_id:id},{status:'1'})
            }else{}

            var array = [1,2,3,4,5,6,7] 

            for(var l=0;l<7;l++){
        
                if(dv.getDate() - data.getDate() + 1 == array[l]){
                   dadosSemana[i] = await comida.findById({_id:id})
                }else{
                    var dadosSemana = dadosSemana.filter(function (i) {
                        return i;
                      });
                }
            }
           var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
            for(var m = 0; m < 30; m++){
                if((dv.getDate() - data.getDate() + 1 == arr[m])){
                    dadosMes[i] = await comida.findById({_id:id})
                }else{
                    var dadosMes = dadosMes.filter(function (i) {
                        return i;
                      });
                }
            }
         }
        res.render('index.ejs', {dadosExcluidos,dadosProdutos,dadosVencidos,dadosDescartados,dadosMes,dadosSemana})
    })

}