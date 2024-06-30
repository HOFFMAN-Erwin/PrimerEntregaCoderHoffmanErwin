import React from 'react';
//const categorias = ['Laptops', 'Smatphones', 'Cameras', "Consoles", "Accesories"]
const categories = [
    {
      id: 1,
      name: "Laptops",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzoeib5-rG04Y88l5zaKD5kJSuBWiSlF2ISg&s",
    },
    {
      id: 2,
      name: "Smartphones",
      img: "https://cink.es/wp-content/uploads/2024/02/Diferencia-Smartphone-y-Android-jpg.webp",
    },
    {
      id: 3,
      name: "Consoles",
      img: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/My%20Nintendo%20Store/EN-US/Hardware/nintendo-switch-neon-blue-neon-red-joy-con-117972/117972-nintendo-switch-neon-blue-neon-red-package-front-1200x675",
    },
    {
      id: 4,
      name: "Cameras",
      img: "https://www.dpreview.com/files/p/articles/6269402639/canon_eosr8.jpeg",
    },
    {
      id: 5,
      name: "Accesories",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJN93YR1XhxclsOAI3ufZ_9sEUaPVu7gfPw&s",
    },
  ];
  function ItemListContainer({greetings}) {
      //console.log(categorias)
    return (
      <>
        <h2>{greetings}</h2>
  
          {categories.map( item => (
              <div key={item.id} className="card" style={{width: '18rem'}}>
                  <img src={item.img} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <a href="#" className="btn btn-primary">Ir Arriba</a>
                  </div>
              </div>
          ))}
  
      </>
    );
  }
  
  export default ItemListContainer