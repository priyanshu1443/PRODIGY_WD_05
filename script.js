const converttime = (v) => {
  const time = new Date(v * 1000)
  return time.getHours() + " : " + time.getMinutes() + " : " + time.getSeconds()
}
const getdata = async (v) => {
  const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${v}&appid=5dd403f1b1274ad67122f61e021df7dc&units=metric`)
  const data = await responce.json()


  document.getElementById("city").innerHTML = data.name
  document.getElementById('country').innerHTML = data.sys.country
  document.getElementById("sunrise").innerHTML = converttime(data.sys.sunrise)
  document.getElementById("sunset").innerHTML = converttime(data.sys.sunset)
  document.getElementById('img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  document.getElementById("wathertype").innerHTML = data.weather[0].main
  document.getElementById("temp").innerHTML = data.main.temp + " 	&#x2103;"
  document.getElementById('tempmin').innerHTML = data.main.temp_min + " 	&#x2103;"
  document.getElementById('tempmax').innerHTML = data.main.temp_max + " 	&#x2103;"
  document.getElementById('wind').innerHTML = (data.wind.speed * 3.6).toFixed(2) + " km/hr"
  document.getElementById("visibility").innerHTML = data.visibility * 0.001 + " km"
  document.getElementById('pressure').innerHTML = data.main.pressure + " hPa"
  document.getElementById('humidity').innerHTML = data.main.humidity + " %"

}
window.onload = () => {
  let cityname = window.prompt("Enter your city name")
  getdata(cityname)
}

document.getElementById('search').addEventListener('click', () => {
  getdata(document.getElementById("input").value)
  document.getElementById('input').value = ""
})
