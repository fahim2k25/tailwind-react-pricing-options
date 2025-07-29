const Link = ({ route, index }) => {
    return (
        <li className="mr-4 hover:text-yellow-500">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;