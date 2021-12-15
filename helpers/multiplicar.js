const fs = require('fs');
const colors = require('colors');


const crearArchivo = async(base= 5,listar,Limite) =>{

   
        try {

           
            let salida= "";
            let consola= "";
            for(let i = 1; i<=Limite;i++){
            salida  +=`${base} x  ${i}= ${base*i}\n`;
            consola  +=`${base} ${colors.red('x')}  ${i}= ${base*i}\n`;
           
            
            }
        
           if (listar){
            console.log("=================".green);
            console.log(` Tabla del:  ${colors.blue(base)}`);
            console.log("=================".green);
            console.log(consola);
           
           }
            
            fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
            return'Archivo creado exitosamente!!'
                
            } catch (err) {
                throw err;
            }
  



}

module.exports={
    crearArchivo:crearArchivo
}



//const crearArchivo = (base= 5) =>{
//    return new Promise((resolve,reject)=>{
 //       console.log("=================");
  //      console.log(` Tabla del: ${base}`);
  //      console.log("=================");
  //      let salida = "";
    
 //   for(let i = 1; i<=10;i++){
 //   salida  +=`${base} x ${i}= ${base*i}\n`;
    
 //   }
    
 //   console.log(salida);
    
    //fs.writeFileSync(`tabla-${base}.txt`,salida,(err)=>{
    // if(err) throw err;
    // console.log('Archivo creado exitosamente!!')
    //}
    //)
    
 //   fs.writeFileSync(`tabla-${base}.txt`,salida);
 //   resolve('Archivo creado exitosamente!!')



  //  }) 
 

//}