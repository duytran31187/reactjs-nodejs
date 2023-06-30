
import { Link } from "react-router-dom";

const PRODUCTS = [
    {
        id: "id1",
        title: "Product 1",
    },
    {
        id: "id2",
        title: "Product 2",
    },
    {
        id: "id3",
        title: "Product 3",
    },
]
const ProductsPage = (props) => {
    
    return (
        <section>
            Products page
            <ul>
            {
                PRODUCTS.map((product) => (
                    <li key={product.id}>
                        <Link to={`/products/'${product.id}'`}>{product.title}</Link>
                    </li>
                ))
            }
            </ul>
        </section>
    );
}

export default ProductsPage;