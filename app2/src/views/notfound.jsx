import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>404 Page Not Found</h1>
                    <button className="btn btn-warning" onClick={() => navigate(-1)}>
                        Regresar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NotFound;