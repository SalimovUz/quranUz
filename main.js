const BASE_URL = "http://api.alquran.cloud/v1/";

const container = document.getElementById("container")


const fetchData = async () => {
  try {
    const res = await fetch(`${BASE_URL}quran/ar.alafasy`)
    if(!res.ok) throw new Error("Couldn't refresh data")
    return res.json()
  }catch(error) {
    return error.message
  }
}


fetchData().then((res)=> {
  console.log(res);
  res.data.surahs.map((item, index)=> {
    
    // console.log(index.ayahs);
  })
})