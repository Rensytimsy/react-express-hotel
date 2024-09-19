import useFetch from "../../../hooks/useFetch"

export default function HotelType() {

    const { data, error, loading } = useFetch("http://localhost:3000/api/byType");
    let images = [
        "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg",
        "https://t4.ftcdn.net/jpg/01/69/69/21/360_F_169692156_L1aGrmJaHsZxF1sWQGuRKn3mR60bBqhN.jpg",
        "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?cs=srgb&dl=pexels-thorsten-technoman-109353-338504.jpg&fm=jpg",
        "https://t4.ftcdn.net/jpg/03/70/64/43/360_F_370644357_MDF4UXLAXTyyi2OyuK66tWW9cA2f8svL.jpg",
        "https://static.wixstatic.com/media/3ffa1d_35ac4f6b1fa245858e61e527bbc011b0~mv2.jpg/v1/fill/w_1199,h_800,al_c/3ffa1d_35ac4f6b1fa245858e61e527bbc011b0~mv2.jpg",
    ];

    return (
        <>
            {
                loading ? "Loading Please wait..." :
                    (<div className="card--cover">
                        <h1>Browse by property type</h1>
                        <div className="hotels--selections">
                            {data && images.map((item, index) => (
                                <div className="hotels--card" key={index}>
                                    <img src={item} alt="" />
                                    <p className="hotel--card--details">{data[index]?.type}    ({data[index]?.count})</p>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                    )
            }

        </>
    )
}