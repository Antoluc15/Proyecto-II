

 
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';



function App() {
  const [dropdown, setDropdown]=useState(false);
  
  const abrirCerrarDropdown=()=>{
    setDropdown(!dropdown);
  }


  return (
    <div  className="App" >
      <br />
      <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} direction='right' size='lg'>
        <DropdownToggle caret className='botonDropdown'  >
          Menú
        </DropdownToggle>

        <DropdownMenu>
          <DropdownItem header>Bienvenido</DropdownItem>

          <DropdownItem divider/>
          <DropdownItem>Nosotros</DropdownItem>
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

