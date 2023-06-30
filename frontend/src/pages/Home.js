import { useNavigate } from "react-router";
const HomePage = (props) => {
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate('/products');
    };
    return (
        <section>
            <h1>Home page</h1>
            <button onClick={navigateHandler}> GO TO Products</button>
        </section>
    );
}

export default HomePage;