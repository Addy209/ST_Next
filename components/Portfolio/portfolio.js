import React from 'react'
import styles from './portfolio.module.css'
import {Bar, Doughnut,Pie} from 'react-chartjs-2'
import {Heading, Text} from '@chakra-ui/react'


const labels = ['HTML/CSS','UI Library','Javascript','ReactJS','Redux','Python','Django','REST API'];
const data = {
  labels: labels,
  datasets: [{
    label: 'Tech We Use',
    data: [100,90,90,85, 70, 80, 75, 85],
    backgroundColor: [
      'rgba(221, 77, 37, 0.2)',
      'rgba(1, 112, 254, 0.2)',
      'rgba(239, 215, 29, 0.2)',
      'rgba(94, 211, 243, 0.2)',
      'rgba(124, 65, 190, 0.2)',
      'rgba(151, 163, 121,0.2)',
      'rgba(16, 62, 46, 0.2)',
      'rgba(176,70,55,0.2)'
    ],
    borderColor: [
      'rgba(221, 77, 37)',
      'rgba(1, 112, 254)',
      'rgba(239, 215, 29)',
      'rgba(94, 211, 243)',
      'rgba(124, 65, 190)',
      'rgba(151, 163, 121)',
      'rgba(16, 62, 46)',
      'rgba(176,70,55)'
    ],
    borderWidth: 1
  }]
};

const options={
    scales: {
      y: {
        beginAtZero: true
      }
    }
}
const Portfolio = ()=>{
    return(
        <div id='3' className="margin_div">
            <Heading as='h2' size='2xl' 
            bgGradient="linear(to-r,#7928CA, #FF0080)"
            bgClip="text"
            >
                Portfolio
            </Heading>

            <Bar data={data}  />
        </div>)
}

export default Portfolio