/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/app.ts":
/*!*******************************!*\
  !*** ./src/components/app.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const table_1 = __importDefault(__webpack_require__(/*! ./table */ "./src/components/table.ts"));
const cars_1 = __importDefault(__webpack_require__(/*! ../data/cars */ "./src/data/cars.ts"));
const brands_1 = __importDefault(__webpack_require__(/*! ../data/brands */ "./src/data/brands.ts"));
const models_1 = __importDefault(__webpack_require__(/*! ../data/models */ "./src/data/models.ts"));
const cars_collection_1 = __importDefault(__webpack_require__(/*! ../helpers/cars-collection */ "./src/helpers/cars-collection.ts"));
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
exports["default"] = App;


/***/ }),

/***/ "./src/components/table.ts":
/*!*********************************!*\
  !*** ./src/components/table.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const count_object_properties_1 = __importDefault(__webpack_require__(/*! ../helpers/count-object-properties */ "./src/helpers/count-object-properties.ts"));
class Table {
    constructor(props) {
        this.checkColumnsCompatability = () => {
            const { rowsData, columns } = this.props;
            if (this.props.rowsData.length === 0)
                return;
            const columnCount = (0, count_object_properties_1.default)(columns);
            const columnsCompatableWithRowsData = rowsData.every((row) => {
                const rowCellsCount = (0, count_object_properties_1.default)(row);
                return rowCellsCount === columnCount;
            });
            if (!columnsCompatableWithRowsData) {
                throw new Error('Nesutampa lentelės stulpelių skaičius su eilučių stulpelių skaičiumi');
            }
        };
        this.initializeHead = () => {
            const { title, columns } = this.props;
            const headersArray = Object.values(columns);
            const headersRowHtmlString = headersArray.map((header) => `<th>${header}</th>`).join('');
            this.thead.innerHTML = `
      <tr>
        <th colspan="${headersArray.length}" class="text-center h3">${title}</th>
      </tr>
      <tr>${headersRowHtmlString}</tr>
    `;
        };
        this.initializeBody = () => {
            const { rowsData, columns } = this.props;
            this.tbody.innerHTML = '';
            const rowsHtmlElements = rowsData
                .map((rowData) => {
                const rowHtmlElement = document.createElement('tr');
                const cellsHtmlString = Object.keys(columns)
                    .map((key) => `<td>${rowData[key]}</td>`)
                    .join(' ');
                rowHtmlElement.innerHTML = cellsHtmlString;
                return rowHtmlElement;
            });
            this.tbody.append(...rowsHtmlElements);
        };
        this.initialize = () => {
            this.initializeHead();
            this.initializeBody();
            this.htmlElement.className = 'table table-striped order border p-3';
            this.htmlElement.append(this.thead, this.tbody);
        };
        this.props = props;
        this.checkColumnsCompatability();
        this.htmlElement = document.createElement('table');
        this.thead = document.createElement('thead');
        this.tbody = document.createElement('tbody');
        this.initialize();
    }
}
exports["default"] = Table;


/***/ }),

/***/ "./src/data/brands.ts":
/*!****************************!*\
  !*** ./src/data/brands.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const brands = [{
        id: '1',
        title: 'Opel',
    }, {
        id: '2',
        title: 'BMW',
    }, {
        id: '3',
        title: 'Subaru',
    }];
exports["default"] = brands;


/***/ }),

/***/ "./src/data/cars.ts":
/*!**************************!*\
  !*** ./src/data/cars.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const cars = [
    {
        id: '05EE7E0B-B68C-F3AC-669C-CEA245B88118',
        price: 12484,
        year: 2008,
        modelId: '3',
    },
    {
        id: '2ED35B36-4EA2-83DF-2BCD-AB32E95DBC62',
        price: 13467,
        year: 2015,
        modelId: '9',
    },
    {
        id: '834BC239-F520-8732-A003-8191A464E7D6',
        price: 7876,
        year: 2019,
        modelId: '7',
    },
    {
        id: '0D9C4D73-EDB5-5532-4EE4-2E8D4977AA91',
        price: 14439,
        year: 2019,
        modelId: '6',
    },
    {
        id: 'A1C024DD-7D37-7E49-427B-1D066F52245D',
        price: 19542,
        year: 2001,
        modelId: '6',
    },
    {
        id: 'D8187E9F-EB08-DEC5-0516-DFD6BE9EDCD0',
        price: 22732,
        year: 2016,
        modelId: '3',
    },
    {
        id: '7063CA9A-708D-9374-81BB-B2DDE18D5A49',
        price: 11312,
        year: 2000,
        modelId: '1',
    },
    {
        id: 'F635F4D2-5D9C-35CD-B73C-585D24A7C1CD',
        price: 16239,
        year: 2012,
        modelId: '9',
    },
    {
        id: 'EEE6BB86-9D69-2EE8-6973-CDE98EC87C9E',
        price: 4568,
        year: 2008,
        modelId: '3',
    },
    {
        id: 'DA6631B0-D8B1-88DD-3338-8E8A1E683A7C',
        price: 3365,
        year: 2016,
        modelId: '9',
    },
    {
        id: 'B688ABC7-9A74-A921-54F4-CB6A34F0BEBB',
        price: 6898,
        year: 2003,
        modelId: '7',
    },
    {
        id: '4BEEEEA9-1909-5B83-5684-2CC167E42798',
        price: 23012,
        year: 2018,
        modelId: '5',
    },
    {
        id: '20F69D9A-F450-4F34-DFA5-671E7A42BC02',
        price: 16601,
        year: 2018,
        modelId: '3',
    },
    {
        id: '4590DA73-5398-BD19-9F34-AD45FB28CB59',
        price: 11163,
        year: 2009,
        modelId: '8',
    },
    {
        id: 'D148492E-8D3C-023D-DBA8-A893AAB9E100',
        price: 3697,
        year: 2001,
        modelId: '2',
    },
    {
        id: '0F4BC126-C3B7-B61B-BE9B-BC71417E38AE',
        price: 20727,
        year: 2015,
        modelId: '5',
    },
    {
        id: 'CB7EBCF5-DC8A-DAA7-BEA4-B7E2EBDB0C6A',
        price: 7620,
        year: 2016,
        modelId: '8',
    },
    {
        id: '23382A80-C94E-D35C-A089-D24902CFD503',
        price: 13521,
        year: 2015,
        modelId: '5',
    },
    {
        id: '75CA3CBE-F460-9DDC-18E9-DDFD91214AB9',
        price: 8501,
        year: 2015,
        modelId: '2',
    },
    {
        id: '0AE8AA8B-BA1E-98A7-8C16-776649C97217',
        price: 8479,
        year: 2018,
        modelId: '2',
    },
    {
        id: '7CF389D0-6F88-08C9-CE8D-EC56394619A3',
        price: 1848,
        year: 2011,
        modelId: '7',
    },
    {
        id: '2CB7C111-8353-C1BD-1578-05A98F3D1A5D',
        price: 1148,
        year: 2005,
        modelId: '6',
    },
    {
        id: 'E3CE97B7-753C-7216-8E0F-01C18EA7C613',
        price: 15071,
        year: 2004,
        modelId: '3',
    },
    {
        id: '543914BC-6C68-76AB-E5D5-11269AB9242C',
        price: 18650,
        year: 2007,
        modelId: '9',
    },
    {
        id: 'E0448219-798A-BEB4-46F7-669AF8B3A4EF',
        price: 12243,
        year: 2004,
        modelId: '2',
    },
];
exports["default"] = cars;


/***/ }),

/***/ "./src/data/models.ts":
/*!****************************!*\
  !*** ./src/data/models.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const models = [{
        id: '1',
        title: 'Zafira',
        brandId: '1',
    }, {
        id: '2',
        title: 'Astra',
        brandId: '1',
    }, {
        id: '3',
        title: 'Insignia',
        brandId: '1',
    }, {
        id: '4',
        title: 'X1',
        brandId: '2',
    }, {
        id: '5',
        title: 'X2',
        brandId: '2',
    }, {
        id: '6',
        title: 'X3',
        brandId: '2',
    }, {
        id: '7',
        title: 'Impreza',
        brandId: '3',
    }, {
        id: '8',
        title: 'Forester',
        brandId: '3',
    }, {
        id: '9',
        title: 'Ascent',
        brandId: '3',
    }];
exports["default"] = models;


/***/ }),

/***/ "./src/helpers/cars-collection.ts":
/*!****************************************!*\
  !*** ./src/helpers/cars-collection.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class CarsCollection {
    constructor(props) {
        this.joinCar = (car) => {
            var _a, _b;
            const { brands, models } = this.props;
            const carModel = models.find((model) => model.id === car.modelId);
            const carBrand = brands.find((brand) => brand.id === (carModel === null || carModel === void 0 ? void 0 : carModel.brandId));
            return Object.assign(Object.assign({}, car), { brand: (_a = (carBrand && carBrand.title)) !== null && _a !== void 0 ? _a : 'unknown', model: (_b = (carModel && carModel.title)) !== null && _b !== void 0 ? _b : 'unknown' });
        };
        this.props = props;
    }
    get all() {
        return this.props.cars.map(this.joinCar.bind(this));
    }
}
exports["default"] = CarsCollection;


/***/ }),

/***/ "./src/helpers/count-object-properties.ts":
/*!************************************************!*\
  !*** ./src/helpers/count-object-properties.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const countObjectProperties = (object) => Object.keys(object).length;
exports["default"] = countObjectProperties;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const app_1 = __importDefault(__webpack_require__(/*! ./components/app */ "./src/components/app.ts"));
const app = new app_1.default('#root');
app.initialize();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;