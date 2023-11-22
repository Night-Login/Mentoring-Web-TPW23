import axios from "axios"
import { useEffect, useState } from "react"

function WeatherComponent({time, cuaca, temp}) {
  return(
    <div className="flex flex-col justify-center bg-white w-fit text-black font-quicksand">
      <h1>{time}</h1>
      <h1 className="text-[20px] font-semibold">{cuaca}</h1>
      <h1 className="text-center">{temp}°C</h1>
    </div>
  )
}

export default function Page() {
  const [data, setData] = useState([])
  useEffect(() => {  
    axios.get("https://ibnux.github.io/BMKG-importer/cuaca/501397.json")
    .then((res) => {
      console.log(res.data)
      setData(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])
  return(
    <main className="text-white grid grid-cols-4 gap-4">
      {
        data.map((weather) => {
          return(
            <WeatherComponent time={weather.jamCuaca} cuaca={weather.cuaca} temp={weather.tempC} />
          )
        })
      }
    </main>
  )
}