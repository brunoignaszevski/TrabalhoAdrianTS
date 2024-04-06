import { Router } from 'express'
import {BadRequestError} from './helpers/apiErrors'

const routes = Router()

routes.get('/', async (req, res) =>{

    //throw new ApiError('Erro lançado no api error', 400)
    try{
        throw new Error('Erro do try')

        return res.json('ok')

    } catch (error){

        console.log(error)
        return res.status(500).json("")
        
    }
})
export default routes

//if (!teste){
//    throw new BadRequestError('Page não existe')
//}