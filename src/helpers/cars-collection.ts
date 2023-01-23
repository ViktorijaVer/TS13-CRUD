import Car from '../types/car';
import Model from '../types/model';
import Brand from '../types/brand';


type CarsCollectionProps = {
    cars: Car[],
    brands: Brand[],
    models: Model[],
};

class CarsCollection {
    public props: CarsCollectionProps;

    constructor(props: CarsCollectionProps) {
        this.props = props;
    }

    private joinCar = (car: Car) => {
        const { brands, models } = this.props;
        const carModel = models.find((model) => model.id === car.modelId);
        const carBrand = brands.find((brand) => brand.id === carModel?.brandId);
    
        return {
            ...car,
            brand: (carBrand && carBrand.title) ?? 'unknown',
            model: (carModel && carModel.title) ?? 'unknown',
        };
    }
    

    public get all(): Car[] {
        return this.props.cars.map(this.joinCar.bind(this));
    }
}

export default CarsCollection;
