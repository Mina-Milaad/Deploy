import { connect } from "mongoose";




export const dbConn = connect('mongodb://host.docker.internal:27017/deploy-Project')
.then(() => {
    console.log("database Connected Successfully");
})