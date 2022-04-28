import { useHistory } from "react-router-dom";

const NotFound = () => {
    const history = useHistory();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>404 Page Not Found</h1>
                    <button className="btn btn-warning" onClick={() => history.goBack()}>
                        Regresar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NotFound;