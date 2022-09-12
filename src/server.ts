import express from "express"
import { sequelize } from "./database"

const app = express()

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log("DB Connection successfuly.")
    })
    console.log(`Server started with successfuly at port ${PORT}.`)
})