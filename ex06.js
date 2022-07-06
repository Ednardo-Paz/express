const express = require('express')
const express2  = require('express')
console.log(express === express2);

const server1 = express()
const server2 = express()
console.log(server1 === server2);

const router1 = express.Router()
const router2 = express.Router()
console.log(router1 === router2);