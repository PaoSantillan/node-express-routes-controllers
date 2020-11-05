const fs = require('fs');
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
module.exports = UserController;