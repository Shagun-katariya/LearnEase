const express = require('express');
const routes = express.Router();
const service = require('../models/service')
const Contact = require('../models/contact')


routes.get('/', async (req, res) => {
  const services = await service.find();
  const startingThreeServices = services.slice(3, 6);
  res.render('index', {
    service: startingThreeServices
  });
});

routes.get('/about', async (req, res) => {
  res.render('about');
});

routes.get('/courses', async (req, res) => {
  const services = await service.find();
  res.render('courses', {
    service: services
  });
});

routes.get('/contact', async (req, res) => {
  res.render('contact');
});

routes.post('/contact', async (req, res) => {
  try {
    await Contact.create(req.body)
  } catch (error) {
    console.log(error)
  }
  res.redirect("/")
});

module.exports = routes; 