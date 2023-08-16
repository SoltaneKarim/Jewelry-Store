import React,{useEffect,useState} from 'react'
import PriceDetails from './PriceDetails.jsx'
import axios from 'axios'

const Price = () => {
const [data, setData] = useState([])
const [modal, setModal] = useState(false)



  useEffect(() => {
    axios.get('http://localhost:5000/api/bracelets')
        .then(response => {
          console.log(response.data)
        setData(response.data);
        })
        .catch(error => {
        console.error('Error fetching data:', error);
        console.log('Axios error details:', error.response);
        });
    }, []);

const handleDelete = async (id) => {
  await axios.delete(`http://localhost:5000/api/bracelets/${id}`)
        .then(response => {
          setData(prevData => prevData.filter(item => item.id !== id))
        })
        .catch(error => {
        console.error('Error fetching data:', error);
        console.log('Axios error details:', error.response);
        });
}

const handleUpdate = async (id) => {
  setModal(true)
}
// await axios.put(`http://localhost:5000/api/bracelets/${id}`)
  //       .then(response => {
  //         console.log(response)
  //         setData(prevData => prevData.map(item => item.id !== id))
  //       })
  //       .catch(error => {
  //       console.error('Error fetching data:', error);
  //       console.log('Axios error details:', error.response);
  //       });


  return (
    <div className='container-items'>
      {data.map((element,key)=>(
      <PriceDetails key={key} data={element} delete={handleDelete}
      update={handleUpdate} modal={modal}/>
      ))}
    </div>
  )
}

export default Price
