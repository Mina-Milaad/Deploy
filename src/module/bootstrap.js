import clientRouter from "./client/client.routes.js"


export const bootstrap = (app) => {
    app.use('/client' , clientRouter)
}