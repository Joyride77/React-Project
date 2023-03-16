import { useLocation } from "react-router-dom";

const SearchPage = () => {
    const location = useLocation();
    console.log(location.state.data);
    return (
        <div>{location.state.data}</div>
    )
}

export default SearchPage