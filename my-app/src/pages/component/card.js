export default function Card({data}){
    return(
        <div className='tarjeta'>
            <h1> {data.mascota} </h1>
            <img src= {data.img} />            
        </div>

    )
}