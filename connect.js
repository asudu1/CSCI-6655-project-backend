const {MongoClient} = require('mongodb');
async function main(){
    const uri = "mongodb+srv://aravindsudulaguntla:Aravind@2357@cluster0.trzoa5x.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try{
        await client.connect();
        console.log(" Connection Happened here ")
    } catch(e){
        console.error(e);
    } finally{
        await client.close();
        console.log(" We closed our connection")
    }
}
main();
