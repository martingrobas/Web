const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;
const HashRouter = ReactRouterDOM.HashRouter;


class App extends React.Component {
    render(){
        return(
            <HashRouter>
                <div class="row blur">
                    <div class="twelve columns">
                        <div class="row">
                        <div class="nine columns">
                            <ul id="menu-header" class="nav-bar horizontal">
                                <li><Link to= "/" class="has-flyout">Inicio</Link></li>
                                <li><Link to= "/Productos" class="has-flyout">Listado Productos</Link></li>
                            </ul>
                    
                        </div>
                    </div>
                </div>
            </div>

            <Switch>
                <Route path="/" exact component={Inicio} />
                <Route path="/Productos" component={Productos} /> 

            </Switch>

            </HashRouter>
        )

    }
}






class Main extends React.Component {

    render(){
        return(
            <div class="row">
                <div class="twelve columns">
                    <div class="flex-video widescreen vimeo">
                        <img src="images/fotomenu.jpeg" width="900" height="506" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></img>   
                    </div>
                    <div class="panel callout">
                        <h1 class="heading_supersize">Bienvenidos a DigitalArg</h1>
                    </div>
                    <div class="row">
                        <div class="four columns">
                            <h3>Nuestro primer sponsor</h3>
                            <img class="Sponsor 1"src='images/xbox.jpg'></img>
                            <a class="button round" href="#">More &raquo;</a> </div>

                        <div class="four columns">
                            <h3>Nuestro segundo sponsor</h3>
                            <img class="Sponsor2"src='images/play.jpg'></img>
                            <a class="button round" href="#">More &raquo;</a> </div>

                        <div class="four columns">
                            <h3>Nuestro tercer sponsor</h3>
                            <img class="Sponsor 3"src='images/tramontina.png'></img>
                        <a class="button round" href="#">More &raquo;</a> </div>

                    </div>

                </div>
            </div>

        )
    }        
}


class ProductoIndividual extends React.Component{

    render(){

        return(
                <div class="col ">
                    <div class="card">
                        <a class="text-dark" href={"/productoindividual.html?id=" + this.props.id}>
                            <img class="imagenesProd" src={this.props.imagenes} alt="imagen producto"></img>        
                            <div class="card-body">  
                            <h4>$ {this.props.precio}</h4> 
                            <p class="text-justify">{this.props.nombre}</p>
                            </div>
                        </a>
                    </div>
                </div>
        )
    }
}


class ListadoProductos extends React.Component{

    constructor(props){
        super(props);
        this.state = {productos:[],stock:false,envio:false,categoria:null,orden:null}
    }

    componentDidMount(){
        let resp = axios.get("http://20.197.184.41:8080/productos");
        resp.then(x => {
            this.setState({productos: x.data})
        })
        .catch(err => {console.log(err)})
    }

    renderProd(){
        var {productos} = this.state;
        return productos.map(producto => <ProductoIndividual id={producto.id} nombre={producto.nombre} precio={producto.precio} imagenes={producto.imagenes}/>)
        
    }

    render(){

        return(
            <div class="row blur">
            <div class="twelve columns">
              <div class="row">
                <div class="nine columns">
              </div> 
              <h1>Listado de nuestros productos</h1>
              <hr />
              <div class="">
                <div id="container"></div>
                    <div class='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 py-3'>
                        {this.renderProd()}
                    </div>
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
                </div>
                <p class="copyright">Digital Arg © 2021</p>
            </div>
        </footer>
        )
    }
}


class Inicio extends React.Component{
    render(){
        return (
            <div>
                <Main/>
                <Footer/>
            </div>
        )
    }
}


class Productos extends React.Component{
    render(){
        return(
            <div>
                <ListadoProductos/>
                <Footer/>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);