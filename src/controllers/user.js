const fs = require('fs');
/**
 * Una static class es aquella clase que se usa sin necesidad de realizar una instanciación de la misma.
 * Se utiliza como una unidad de organización para métodos no asociados a objetos particulares y separa datos 
 * y comportamientos que son independientes de cualquier identidad del objeto.
 * 
 * Las clases estáticas son adecuadas cuando no tienen que almacenar información,
 * sino sólo realizar cálculos o algún proceso que no cambie.
*/
class UserController{
    static fetch (){
        try{
            let file;
            const loadFile = () => file = JSON.parse(fs.readFileSync(process.env.DB, 'utf-8'));
            loadFile();
            return file;
        }catch(err){
            console.log(err);
        }
    }
}
/**
 *  Los controladores manejan toda la lógica detrás de los parámetros de solicitud de validación,
 * consulta, envío de respuestas con los códigos correctos.
*/

/**
 * Servicios : los servicios contienen las consultas de la base de datos y la devolución de objetos o errores de lanzamiento.
 */

module.exports = UserController;