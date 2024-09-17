import useFetch from "../../hooks/useFetch"

export default function TopCities() {

    const { data, loading, error } = useFetch("http://localhost:3000/api/continent");
    // console.log(data)
    const continetImages = [
        "https://media.istockphoto.com/id/912288102/vector/territory-of-europe-with-contour-vector-illustration.jpg?s=612x612&w=0&k=20&c=IIbNxkvWR4No7Cq8qRtlVMGjMAhk5GnwG236yfI42g0=",
        "https://media.istockphoto.com/id/1223303841/nl/vector/afrika-continent-kaart-vector-zwart-geel.jpg?s=612x612&w=0&k=20&c=Z6Z5qaZ9jB-gZUfTqy95R8-mTYHA-dASkJHRuTx7iB4=",
        "https://media.istockphoto.com/id/1392570561/vector/simple-black-map-of-asia-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=F9WuRG4IvJVXtpqd8SyoN4GXkjKRB1QKEoSZA_pbWnw=",
        "https://media.istockphoto.com/id/626914308/vector/antarctica-political-map-gray-colored.jpg?s=612x612&w=0&k=20&c=WrJTosGU-L836DJHQPz7rqR-qqH7kp6ifoSjfqFkz9M=",
        "https://static.vecteezy.com/system/resources/previews/021/917/372/non_2x/high-quality-map-of-north-america-vector.jpg",
        "https://t3.ftcdn.net/jpg/02/62/24/40/360_F_262244057_Xd20B7k0uByXVDWjG2Eh1zwQyTdc1xGP.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNMuyOR9liU8XDAiF8cqT42cGRgkjWsEnjXtgBfwIFfF8jqAaxgH2YA8b0ODhmXy9lWis&usqp=CAU"
    ]
    return (
        <>
            <h1 className="continent--description">Find by Continent</h1>
            <div className="hotels--feel">
                {
                    loading ? "Loading please wait." :
                        data && continetImages.map((image, index) => (
                            <div className="hotels--card" key={index}>
                                <img src={image} alt="an image" />
                                <p className="continent--name">{data[index]?.name}</p>
                                <p className="hotels--present"><span>Available</span><span>{data[index]?.count}</span></p>
                            </div>
                        ))
                }
            </div>
        </>
    )
}