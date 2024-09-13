import useFetch from "../../hooks/useFetch"

export default function TopCities(){

    const {data, loading, error} = useFetch("http://localhost:3000/api/countCities?cities=America,Nairobi,London,china,japan");

    return (
        <>
            {
                loading ? "Loading please wait." :
                <div className="card--cover">
                    <div className="hotels--feel">
                        <div className="hotels--card">
                            <img src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="an image" />
                            <p>Kenya</p>
                            <p>({data[1]}) Available</p>
                        </div>
                        <div className="hotels--card">
                            <img src="https://media.istockphoto.com/id/1400989622/photo/wooden-chalet-in-swiss-alps.jpg?s=1024x1024&w=is&k=20&c=TBYT9ifv9Welupqixad9XUbVVbK2XsVD_g1hpNpC2KE=" alt="an image" />
                            <p>London</p>
                            <p>({data[2]}) Available</p>
                        </div>
                        <div className="hotels--card">
                            <img src="https://www.wandersmiles.com/wp-content/uploads/2020/05/nargakot-hotel-mystic-mountain-nepal.jpg" alt="an image" />
                            <p>China</p>
                            <p>({data[3]}) Available</p>
                        </div>
                        <div className="hotels--card">
                            <img src="https://www.wandersmiles.com/wp-content/uploads/2020/05/nargakot-hotel-mystic-mountain-nepal.jpg" alt="an image" />
                            <p>Japan</p>
                            <p>({data[4]}) Available</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}