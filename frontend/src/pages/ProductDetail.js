import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ProductDetailPage = (props) => {
    const params = useParams();
    return (
        <section>
            Products detail page {params.productId}
            <br />
            <Link to=".." relative="path">Go Back to product with .. same as we use in command</Link>
            <br />
            <Link to=".." relative="route">Go Back to product with .. same as we use in command</Link>
            <br />
            <Link to="/products/">Go Back to products</Link>
        </section>
    );
}

export default ProductDetailPage;