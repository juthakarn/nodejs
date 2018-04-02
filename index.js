const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router =express.Router()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('public'))
app.use('/api',router)
router.route('/bears')
.get((reg,res) => {
	res.send(bears)
})
.post(
	(req,res)=> {
	const bear = {}
	const {name , weight} = req.body;
	console.log(req.body)
	bear.id = bears.length+1
	bear.name = name
	bear.weight = parseInt(weight);
	bears.push(bear)
	res.send(bears)

	})
router.route('/bears/:id')
.get((req,res) => {
	res.send(bears[req.params.id])
})

.put((req,res) => {
	const id = req.params.id
	bears[id].name = req.body.name
	bears[id].weight = req.body.weight
	res.send(bears)
})

.delete((req,res) => {
	const id = req.params.id
	delete bears[id]
	res.send(bears)
})

let bears = [{id:1, name:'Pooh', weight: 70},
			{id:2, name:'Winne', weight: 60}]
// app.get('/bears',(req,res)=> {res.send(bears)})
// app.post('/bears',(req,res)=> {
// 	const bear = {}
// 	const {name , weight} = req.body;
// 	console.log(req.body)
// 	bear.id = bears.length+1
// 	bear.name = name
// 	bear.weight = parseInt(weight);
// 	bears.push(bear)
// 	res.send(bears)
// })
app.listen(3000,()=>{
	console.log('sever listen on port: 3000')
})