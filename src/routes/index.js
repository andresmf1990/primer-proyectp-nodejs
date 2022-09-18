/*MIS APUNTES
import {}= una parte de express
const = crea el objeto
get = devuelve a la ruta el 'title', es posible generar más concatenaciones
export = devuelve el objeto
*/


import {Router} from 'express';
const router = Router();

router.get('/',(req,res) => res.render('index', { title: 'First web with Node' }));

router.get('/contact',(req,res) => res.render('contact', { title: 'Contactame' }));

router.get('/about',(req,res) => res.render('about', { title: 'About me' }));

export default router;