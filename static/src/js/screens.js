/*
   Copyright 2018 Gabriel Pabon <gabosoft.ape@gmail.com>
   License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl).


odoo.define('gabosoft_pos_security.screens', function (require) {
    "use strict";

    var screens = require('point_of_sale.screens');



    screens.PaymentScreenWidget.include({
        validate_order: function (force_validate) {
          console.log('Entramos a la validacion de la orden... del nuevo modelo ');
            var below_limit = this.pos.get_order().get_total_with_tax() <= this.pos.config.l10n_es_simplified_invoice_limit;
            var lines = this.pos.get_order().get_paymentlines();



        }
    });

});
*/
