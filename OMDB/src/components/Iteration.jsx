import { useEffect, useState } from "react"

export const useIteration = (url) =>{
    const [users,setUsers] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [currentIndex, setIsCurrentIndex] = useState(0);

    useEffect(() => {
        fetchData();
    },[])
    const fetchData = async() => {
        setIsLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        const { results} = data;
        const { name :{first,last}, picture: {thumbnail}, id: {name:id}} = results[0];
        setUsers([...users,{name:`${first} ${last}`, picture:thumbnail, id:id}])
    }

    useEffect(() => {
         setIsCurrentIndex(users.length -1);
         setIsLoading(false);
    },[users])

    const next = () => {
        if(currentIndex + 1 < users.length){
            setIsCurrentIndex(currentIndex +1);
        }
        else{
            fetchData();
        }
    }
    
    const previous = () => {
        let currentIndexPostion = currentIndex -1;
        if(currentIndexPostion < 0){
            currentIndexPostion = users.length -1;
        }
        setIsCurrentIndex(currentIndexPostion);
    }

    return [users,users[currentIndex],isLoading,next,previous]
}