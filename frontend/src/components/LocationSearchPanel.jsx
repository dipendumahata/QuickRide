import React from 'react'

const LocationSearchPanel = (props) => {
//     sample array for locatoin
    const location = [
        "Nilgunj Rd, Milan Pally, Deshpriya Nagar, Belghoria, Kolkata, West Bengal 700056",
        "Nilgunj Rd, Milan Pally, Deshpriya Nagar, Belghoria, Kolkata, West Bengal 700057",
        "Nilgunj Rd, Milan Pally, Deshpriya Nagar, Belghoria, Kolkata, West Bengal 700058"
    ]
  return (
    <div>
        {/* this is just a sample data */}
        {
            location.map(function(elem, idx){
                return <div key={idx} onClick={()=>{
                    props.setVehiclePanel(true)
                    props.setPanelOpen(false)
                }} 
                className='flex gap-4 border-2 p-3 border-gray-100 active:border-black rounded-lg items-center my-2 pl-2 justify-center'>
                <h2 className='bg[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="text-xl ri-map-pin-fill"></i></h2>
                <h4 className='font-medium'>{elem}</h4>
            </div>
            })
        }
    </div>
  )
}

export default LocationSearchPanel