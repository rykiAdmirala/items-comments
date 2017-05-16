"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var items_1 = require("../items");
var ItemService = (function () {
    function ItemService() {
    }
    ItemService.prototype.getItems = function () {
        if (localStorage.getItem('empeekItems')) {
            return JSON.parse(localStorage.getItem('empeekItems'));
        }
        else {
            localStorage.setItem('empeekItems', JSON.stringify(items_1.ITEMS));
            return items_1.ITEMS;
        }
    };
    return ItemService;
}());
ItemService = __decorate([
    core_1.Injectable()
], ItemService);
exports.ItemService = ItemService;
