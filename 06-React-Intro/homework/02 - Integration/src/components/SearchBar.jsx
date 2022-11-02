export default function SearchBar(props) {
   return (
      <div>
         <input id="search" type='search' />
         <button onClick={()=>{props.onSearch(document.getElementById("search").value);}}>Agregar</button> 

      </div>
   );
}