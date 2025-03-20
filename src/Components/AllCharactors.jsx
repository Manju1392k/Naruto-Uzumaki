import React from 'react'
import { useState } from 'react';
import axios from 'axios';

// Importing Header & Footer.
import Footer from './UI/Footer.jsx'

export default function AllCharactors() {

  // Saving data in useState.
  const [data, setData] = useState([]);

  // Showing Loading Screen until total 50 charactors data is fetched from api.
  const [Loading, setLoading] = useState(true)

  // Fetching Naruto Charactors from link.
  // https://naruto-api-rsl3.onrender.com/api/v1/characters I got this link from github profile, But this link is only providing 50 charactors of naruto only and this api is free, I did not when this api service will be stopped, 'When you see loading page for long with out cards that mean's this api is will not working. Link github source: https://github.com/gustavonobreza/naruto-api
  const fetchData = async () => {
    try {
      const response = await axios.get('https://naruto-api-rsl3.onrender.com/api/v1/characters');
      console.log('Data is Fetched:', response.data);
      setData(response.data)
      setLoading(false)
    } catch (error) {
      console.error('Error while fetching the data:', error);
    }
  };
  fetchData();

  // Showing loading circle untill the data is fetched.
  if (Loading) {
    return (
      <>
        {/* Div for contaier. */}
        <div className="container w-[100vw] h-[80vh] flex justify-around items-center">
          <img src="/Photos/Loadinggif.gif" alt="" className='h-[10rem]' />
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      {/* Naruto total Charactors section. */}
      <div className="NarutoMainCharactors w-[100%] bg-white px-10 py-4 flex flex-col">

        {/* Div for heading. */}
        <div className="heading w-[100%] flex justify-center items-start border-b-2 border-black">
          <h1 className='text-black font-extrabold text-2xl montserrat'>Total Naruto Charactors</h1>
        </div>

        {/* Div for Charactor Cards. */}
        <div className="CharactorsCards w-[100%] grid grid-cols-4">

          {data.map(Charactor => (
            <>
              {/* Charactor card. */}
              <div className="NarutoUzumakiCard flex flex-col justify-around items-center py-4 border-[0.3rem] border-[#FF851B] px-4 rounded-lg mt-4 overflow-hidden mx-4" key={Charactor.id}>
                {/* Div for image. */}
                <div className="image">
                  <img src={Charactor.images[0]} alt="" className='h-[18rem] w-[12rem] rounded-md object-cover' />
                </div>
                {/* Div for Name. */}
                <h1 className='text-xl font-bold mt-2'>{Charactor.name}</h1>
              </div>
            </>
          ))}

        </div>

      </div>

      <Footer />
    </>
  )
}
