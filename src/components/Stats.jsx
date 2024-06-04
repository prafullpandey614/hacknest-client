/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useEffect} from 'react'
import StatsCard from './StatsCard'


const Stats = ({hackathon}) => {

   useEffect(()=>{
   },[])
    
  return (
    <div>
         <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Statistics</h1>
      <h1 className="text-2xl font-bold mb-4">{hackathon.name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Number of Teams Participated"
          evaluate={false}
          stat={hackathon.name}
          icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />}
        />
        
        <StatsCard
            evaluate = {true}
          title="Round 1"
          stat="500"
          icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />}
        />
         <StatsCard
            evaluate = {true}
          title="Round 2"
          stat="100"
          icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />}
        />
         <StatsCard
            evaluate = {true}
          title="Round 3"
          stat="100"
          icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />}
        />

      </div>
    </div>
    </div>
  )
}

export default Stats