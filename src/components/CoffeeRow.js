import Title from './Title';
import Description from './Description';
import Ingredients from './Ingredients';

const CoffeeRow = () => {
    return (
        <div className="coffee-list">
            <Title />
            <Description />
            <Ingredients />
        </div>
    );
}

export default CoffeeRow;
