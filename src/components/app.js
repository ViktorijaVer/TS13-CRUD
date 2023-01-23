"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const table_1 = __importDefault(require("./table"));
const cars_1 = __importDefault(require("../data/cars"));
const brands_1 = __importDefault(require("../data/brands"));
const models_1 = __importDefault(require("../data/models"));
const cars_collection_1 = __importDefault(require("../helpers/cars-collection"));
class App {
    constructor(selector) {
        this.carToRowData = (car) => {
            return {
                id: car.id,
                brand: car.brand,
                model: car.model,
                price: car.price.toString(),
                year: car.year.toString(),
            };
        };
        this.initialize = () => {
            const carTable = new table_1.default({
                title: 'Visi automobiliai',
                columns: {
                    id: 'Id',
                    brand: 'Markė',
                    model: 'Modelis',
                    price: 'Kaina',
                    year: 'Metai',
                },
                rowsData: this.carsCollection.all.map(this.carToRowData),
            });
            const container = document.createElement('div');
            container.className = 'container my-5';
            container.appendChild(carTable.htmlElement);
            this.htmlElement.append(container);
        };
        const foundElement = document.querySelector(selector);
        this.carsCollection = new cars_collection_1.default({ cars: cars_1.default, brands: brands_1.default, models: models_1.default });
        if (foundElement === null)
            throw new Error(`Nerastas elementas su selektoriumi '${selector}'`);
        this.htmlElement = foundElement;
    }
}
exports.default = App;
