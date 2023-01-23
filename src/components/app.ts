import Table from "./table";
import cars from "../data/cars";
import brands from "../data/brands";
import models from "../data/models";
import CarsCollection from '../helpers/cars-collection';
import stringifyProps from "../helpers/stingify-object";

class App {
  private htmlElement: HTMLElement;

  private carsCollection: CarsCollection;

  constructor(selector: string) {
    const foundElement = document.querySelector<HTMLElement>(selector);
    this.carsCollection = new CarsCollection({ cars, brands, models });

    if (foundElement === null) throw new Error(`Nerastas elementas su '${selector}'`);

    this.htmlElement = foundElement;
    this.carsCollection = new CarsCollection({
      cars,
      brands,
      models,
    });
  }

  public initialize = () => {
    const container = document.createElement('div');
    container.className = 'container my-5';

    const table = new Table({
      title: 'Visi automobiliai',
      columns: {
      id: 'Id',
      brand: 'Markė',
      model: 'Modelis',
      price: 'Kaina',
      year: 'Metai',
    },
    rowsData: this.carsCollection.all.map(stringifyProps),
    });
    container.append(table.htmlElement);
    this.htmlElement.append(container);
  };
}

export default App;