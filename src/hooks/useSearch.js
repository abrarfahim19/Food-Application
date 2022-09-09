import {useState,useEffect} from "react";
import yelp from "../api/yelp";

export default ()=> {
    const [result, setResult] = useState([]);
    const [error, setError] = useState("");
    
    const searchApi = async (text) => {
        try{
            const response = await yelp.get("/search",{
                params:{
                    limit:50,
                    term:text,
                    location:"san jose"
                }
            });
            setResult(response.data.businesses);
            
        } catch (err){
            setError("There was an error");
        }
    };
    
    useEffect(()=>{
        searchApi("pasta")
    }, []);

    return [result, error, searchApi]
}
