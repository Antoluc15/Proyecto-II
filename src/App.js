

 
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import Historia from './Historia';







function App() {
  const [dropdown, setDropdown]=useState(false);
  
  const abrirCerrarDropdown=()=>{
    setDropdown(!dropdown);
  }


  return (
    <div  className="App" >
      <br />
     
      <h1 className='titulo'>Monederos el Abuelo</h1>
      <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} direction='right' size='lg'>
        <DropdownToggle caret className='botonDropdown'  >
          Menú
        </DropdownToggle>

        <DropdownMenu>
          <DropdownItem header>Bienvenido</DropdownItem>

          <DropdownItem divider/>
          
            
          <DropdownItem>Historia</DropdownItem>
          <DropdownItem>Productos</DropdownItem>
          <DropdownItem>Ofertas %</DropdownItem>
          <DropdownItem>Carrito de compras</DropdownItem>
          <DropdownItem>Contactanos</DropdownItem>
          
          
        </DropdownMenu>



      </Dropdown>
      
    </div>
  );
}



export default App;

