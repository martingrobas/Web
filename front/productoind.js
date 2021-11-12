class App extends React.Component {

    render(){
        return(
            <div>
                <Header/>
                <ProductoInd/>
                <Footer/>
            </div>

        )
    }
}

class Header extends React.Component{
    render(){
        return(
            <div class="row blur">

                    <div class="twelve columns">
                        <div class="row">
                        <div class="nine columns">
                            <ul id="menu-header" class="nav-bar horizontal">
                                <li><a href="/index.html" class="has-flyout">Inicio</a></li>
                                <li><a href="/index.html" class="has-flyout">Listado Productos</a></li>
                            </ul>
                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



class ProductoInd extends React.Component{

    constructor(props){
        super(props);
        this.state = {producto:[]}
    }

    componentDidMount(){
        let queryDict = {}
        location.search.substr(1).split("&").forEach(function(item) {queryDict[item.split("=")[0]] = item.split("=")[1]})

        let resp = axios.get("http://20.197.184.41:8080/productos" + queryDict.id);
        resp.then(x => {
            console.log(x.data)
            this.setState({producto: x.data})
        })
        .catch(err => {console.log(err)})
    }



    hayStock(){
        if(this.state.producto.stock > 0){
           return <small class="fs-4 py-3">Stock: {this.state.producto.stock}</small>
        }else{
           return <p class="fs-4 py-3">Sin Stock</p>
        }
    }

    hayEnvio(){
        if(this.state.producto.seEnvia === true){
            return <p class="fs-4 py-2">Disponible para envio</p> 
         }else{
            return <p class="fs-4 py-2">No disponible para envio</p>
         }
    }


    se_Retira(){
        if(this.state.producto.seRetira === true){
            return <p class="fs-4 py-2">Disponible para retirar</p> 
         }else{
            return <p class="fs-4 py-2">No disponible para retirar</p>
         }
    }

    renderEstrellas(rating){
        let spanEstrella = []
        for(let i=0;i<rating;i++){
            spanEstrella.push(<h3 class="fa fa-star"></h3>)
        }
        return spanEstrella
    }

    render(){

        return(
            <div>
                <div class="container py-4">
                        <div class="row align-items-md">
                            <div class="col-md-6">
                                <div height="400px" class="h-100 p-5 bg-light border rounded-3">
                                    <h2 class="fw-bold py-2">{this.state.producto.nombre}</h2>
                                    <h4 class="py-2">${this.state.producto.precio}</h4>
                                    {this.hayStock()}
                                    {this.hayEnvio()}
                                    {this.renderEstrellas(this.state.producto.rating)}
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div id="myCarousel" class="carousel slide">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img height="400px" class="tamañoIMG" src={this.state.producto.imagenes === undefined?"":this.state.producto.imagenes} alt=""></img>
                                        </div>
                                        <div class="carousel-item">
                                            <img height="400px" class="tamañoIMG" src={this.state.producto.imagenes === undefined?"":this.state.producto.imagenes2} alt=""></img>        
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="p-5 my-4 bg-light rounded-3">
                            <div class="panel">
                                <h1 class="display-8">{this.state.producto.nombre}</h1>
                                <p class="fs-4">{this.state.producto.descripcion}</p>
                                <a href="index.html" class="btn btn-dark btn-lg" type="button">Comprar</a>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}



class Footer extends React.Component{
    render(){
        return(
            <footer class="footer-dark">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Servicios</h3>
                        <ul>
                            <li><a href="#">Venta de Consolas</a></li>
                            <li><a href="#">Electrodomesticos</a></li>
                            <li><a href="#">Bazar</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <ul>
                            <li><a href="#">No</a></li>
                            <li><a href="#">Dudes</a></li>
                            <li><a href="#">En Comprar</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Digital Arg</h3>
                        <p>Tienda web destinada a la tecnologia y productos domesticos.</p>
                    </div>
                    <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                </div>
                <p class="copyright">Digital Arg © 2021</p>
            </div>
        </footer>
        )
    }
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
);