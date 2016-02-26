"use strict";
const Joi = require('joi');

let newOperation = {
  nombre: Joi.string()
            .required()
            .description('name of the operation'),
  'tipo_operacion': Joi.string()
               .required()
               .description('type of operation. It could be "egreso" or "ingreso"'),
  'unidad_tiempo': Joi.string()
               .required()
               .description('time unit for the operation'),
  'tipo_factor': Joi.string()
              .required()
              .description('type of composed interest factor. It could be "simple", "periodico" or "gradiente"'),
  'cantidad_monetaria': Joi.number()
              .required()
              .description('monetary quantity of the operation'),
  'tasa_interes': Joi.number()
              .required()
              .description('rate of interest of the operation'),
  'periodo_inicial': Joi.number()
              .required()
              .description('starting period of the operation'),
  'duracion': Joi.number()
              .description('duration of the operation'),
  'incremento': Joi.number()
              .description('last periodic payment of a gradient operation')
};


let updateOperation = {
  nombre: Joi.string()
            .description('name of the operation'),
  'tipo_operacion': Joi.string()
               .description('type of operation. It could be "egreso" or "ingreso"'),
  'unidad_tiempo': Joi.string()
               .description('time unit for the operation'),
  'tipo_factor': Joi.string()
              .description('type of composed interest factor. It could be "simple", "periodico" or "gradiente"'),
  'cantidad_monetaria': Joi.number()
              .description('monetary quantity of the operation'),
  'tasa_interes': Joi.number()
              .description('rate of interest of the operation'),
  'periodo_inicial': Joi.number()
              .description('starting period of the operation'),
  'duracion': Joi.number()
              .description('duration of the operation'),
  'incremento': Joi.number()
              .description('last periodic payment of a gradient operation')
};


module.exports.newOperation = newOperation;
module.exports.updateOperation = updateOperation;
module.exports.getOperation = {
  project_id: Joi.string()
         .required()
         .description('unique id of the project'),
  id: Joi.string()
         .required()
         .description('unique id of the operation')
}
