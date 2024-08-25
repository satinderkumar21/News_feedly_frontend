import { useEffect, useState } from "react"
import NewsItems from "../components/Newsitems";
import Newsitems from "../components/Newsitems";


const Home = () =>{
 
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [value, setValue] = useState("")
    const [search, setSearch] = useState("bitcoin");
    const [source, setSource] = useState("");



  
 useEffect (() =>{
      const key  = 'f301b5ed656d4d3d961b707b063bcf95';
      const url = `https://newsapi.org/v2/everything?sources=${source}&q=${search}&apiKey=${key}`
    
      const fetchNews = async()=>{

        try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setArticles(data.articles);
            setLoading(false);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        }
        
      

      fetchNews()
    
},[search,source])


if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching news: {error.message}</div>;
  }

  const handleChange = (e)=>{
    const value = e.target.value;
    if (source === value) {
      setSource(''); // Uncheck the checkbox
    } else {
      setSource(value); // Select the clicked checkbox
    }
    // setSource(value);

  }
    return(
     <div>
      <div>
        <label>search</label>
      <input  onChange={(e)=>setValue(e.target.value)}/>
      <button onClick={(e)=>setSearch(value)}>Search</button>
       
     </div>
     <div className="newscheck">
      <label>CNN</label>
     <input id="checkItem" type="checkbox"  checked={source === 'cnn'} value="cnn" onChange={handleChange}/>
     <label>The-verge</label>
     <input id="checkItem"type="checkbox" checked={source === 'the-verge'}value="the-verge" onChange={handleChange}/>
     <label>The-Washington-Post</label>
     <input id="checkItem" type="checkbox" checked={source === 'the-washington-post'} value="the-washington-post" onChange={handleChange}/>
     <label>Wired</label>
     <input id="checkItem" type="checkbox" checked={source === 'wired'} value="wired" onChange={handleChange}/>
     <label>TechCrunch</label>
     <input id="checkItem" type="checkbox" checked={source === 'techcrunch'} value="techcrunch" onChange={handleChange}/>
     </div>
     
        <div  > 
         {articles.map((news, index) => (

              <Newsitems key={index} title={news.tittle} description={news.description} src={news.urlToImage} url={news.url} />
        
        ))}
         </div>
         </div>


      
    )
}

export default Home
