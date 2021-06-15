import React,{useState,useEffect} from 'react'
import Movieitem from './Movieitem'
import axios from 'axios';


function Movielist() {
    const [items, setItems] = useState([])

    useEffect(() => {
        const key = '32c212f611f69ea5293b2b48d63186cd';
    const getmoviedata = async() => {
        const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)
        console.log(res.data.results);
        setItems(res.data.results)
    };
    getmoviedata();

        },[]);

       

    return (
        <div>
            <div className = 'container'>
                <div className = 'row'>
                    
                    {items.map((item)=>(
                        <Movieitem key = {item.id} item={item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Movielist
