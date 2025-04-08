import express, {Request, Response, NextFunction} from 'express'

import authRouter from './routes/authRoutes'
import userRouter from './routes/userRoutes'
import productRouter from './routes/productRoutes'
import { errorHandler } from './middlewares/errorHandler'

const app = express()

app.use(express.json())

app.use('/api/v1/auth', authRouter);

app.use('api/v1/users', userRouter)
app.use('api/v1/products', productRouter)
//app.use('api/v1/carts', cartRouter)

app.use(errorHandler)

export default app