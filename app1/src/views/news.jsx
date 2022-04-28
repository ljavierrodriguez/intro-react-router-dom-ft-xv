import { FaEye } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
const News = ({ match }) => {

    const { id, category } = useParams();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>News {id || ""}</h1>
                    <h2>Category: { category }</h2>
                </div>
                <div className="col-md-12">
                    <ul className="list-group">
                        <li className="list-group-item">News 1 <Link to={"/news/"+231+"/"+"health"}><FaEye /></Link></li>
                        <li className="list-group-item">News 2 <Link to={`/news/${1}/${"Hola"}`}><FaEye /></Link></li>
                        <li className="list-group-item">News 3 <Link to={`/news/${1}/${"negocio"}`}><FaEye /></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default News;