

export default function SelectedHotel({hotelname, hotelImage}){
    console.log(hotelImage, hotelname)
    return(
        <>
            <div className="hotel">
                {hotelname}
            </div>
        </>
    )
}