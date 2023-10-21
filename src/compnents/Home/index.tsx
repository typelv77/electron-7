import { useNavigate } from "react-router-dom"

interface IProps {
    setLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home = ({setLogged}: IProps) => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        setLogged(false)
        navigate("/");
    };

    return (
        <>
    <h1>Home</h1>
    <button onClick={logout}>Logout</button>
    </>
    );
};

export default Home;