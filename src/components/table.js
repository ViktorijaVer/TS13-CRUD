"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const count_object_properties_1 = __importDefault(require("../helpers/count-object-properties"));
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
exports.default = Table;
