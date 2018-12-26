/* Copyright 2016 David Gómez Quilón <david.gomez@aselcis.com>
   License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl).
*/
odoo.define('gabosoft_pos_security.models', function (require) {
    "use strict";
    var models = require('point_of_sale.models');
    var pos_super = models.PosModel.prototype;
    var flag = true;
    var caducidad_coupon1 = undefined;
    var caducidad_coupon2 = undefined;
    var field_utils = require('web.field_utils');


    function validar_cupones () {
      var fecha= new Date();
      var actual_fecha = field_utils.format.datetime(
          moment(fecha), {}, {timezone: false});
      console.log(actual_fecha);
    }
    models.PosModel = models.PosModel.extend({

    });

    var order_super = models.Order.prototype;
    models.Order = models.Order.extend({

    });

    models.load_fields('res.company', ['street', 'city', 'state_id', 'zip']);

});
