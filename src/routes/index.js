
import {Router} from 'express' 
import connection from 'express-myconnection'
const router= Router()




router.get('/', (req, res ) => res.render('index', { title: 'Allins Casino '})  )

router.get('/login', (req, res ) => res.render('login', { title: ' Login   '}) )

router.get('/signup', (req, res ) => res.render('signup', { title: '  Sign Up  '}) )

router.get('/contact', (req, res ) => res.render('contact', { title: 'Contact us '})  )

router.get('/games', (req, res ) => res.render('games', { title: 'Games '})  )









export default router 