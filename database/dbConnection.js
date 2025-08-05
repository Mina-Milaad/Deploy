import { connect } from "mongoose";




export const dbConn = connect('mongodb://localhost:27017/deploy-Project')
.then(() => {
    console.log("database Connected Successfully");
})