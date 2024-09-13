import useFetch from "../../hooks/useFetch.jsx"


export default function FeaturedSection() {
    const { data, error, loading } = useFetch("http://localhost:3000/api/hotel?featured=true");
    // console.log(data)
    return (
        <>
          <h1 className="featured--h1">Featured Properties</h1>
          <div className="featured--hotels">
          {data.map((item, key) => (
            <div className="hotel--card" key={key}>
                <img src={item.photos} alt="" />
                <p>{item.type}</p>
                <p>{item.name}</p>
                <p>{item.rating}</p>
                <p>{item.cheapestPrice}</p>
                <p>{item.distance}</p>
                <p>{item.desc}</p>
            </div>
            ))
          }
          </div>
        </>
    )
}