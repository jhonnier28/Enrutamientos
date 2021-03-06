"use strict";
var router_1 = require('@angular/router');
var inicio_component_1 = require('./inicio.component');
var nosotros_component_1 = require('./nosotros.component');
var contacto_component_1 = require('./contacto.component');
var APP_ROUTES = [
    { path: 'inicio', component: inicio_component_1.InicioComponent },
    { path: 'nosotros', component: nosotros_component_1.NosotrosComponent },
    { path: 'contacto', component: contacto_component_1.ContactoComponent }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map