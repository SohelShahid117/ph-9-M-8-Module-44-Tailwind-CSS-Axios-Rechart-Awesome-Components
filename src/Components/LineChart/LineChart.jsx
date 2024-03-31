import React from 'react'
import PropTypes from 'prop-types'
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    // const mathMarksData = [
    //     {"student": 1, "subject": "Math", "marks": 85},
    //     {"student": 2, "subject": "Math", "marks": 78},
    //     {"student": 3, "subject": "Math", "marks": 92},
    //     {"student": 4, "subject": "Math", "marks": 88},
    //     {"student": 5, "subject": "Math", "marks": 75},
    //     {"student": 6, "subject": "Math", "marks": 90},
    //     {"student": 7, "subject": "Math", "marks": 82},
    //     {"student": 8, "subject": "Math", "marks": 79},
    //     {"student": 9, "subject": "Math", "marks": 95},
    //     {"student": 10, "subject": "Math", "marks": 87}
    //   ]

      const subjectMarksData = [
        {"student_id": 1, "name": "Alice", "Math": 75,"Physics": 70,"Chemistry": 75},
        {"student_id": 2, "name": "Bob", "Math": 78,"Physics": 82,"Chemistry": 80},
        {"student_id": 3, "name": "Charlie", "Math": 92,"Physics": 85,"Chemistry": 88},
        {"student_id": 4, "name": "David", "Math": 88,"Physics": 80,"Chemistry": 82},
        {"student_id": 5, "name": "Emma", "Math": 75,"Physics": 78,"Chemistry": 70},
        {"student_id": 6, "name": "Frank", "Math": 90,"Physics": 98,"Chemistry": 85},
        {"student_id": 7, "name": "Grace", "Math": 82,"Physics": 76,"Chemistry": 78},
        {"student_id": 8, "name": "Henry", "Math": 79,"Physics": 74,"Chemistry": 72},
        {"student_id": 9, "name": "Ivy", "Math": 95,"Physics": 90,"Chemistry": 92},
        {"student_id": 10, "name": "Jack", "Math": 100,"Physics": 82,"Chemistry": 85},
    ]
    
      
      
  return (
    <div>
        {/* <LChart width={500} height={400} data={mathMarksData}>
          
            <Line type="monotone" dataKey="marks" stroke="#8884d8" />

        </LChart> */}

        <LChart width={600} height={400} data={subjectMarksData }>
            <XAxis dataKey="name"/>

            <YAxis/>
            
            <Line dataKey="Math" stroke="red" />
            <Line dataKey="Physics" stroke="green" />

        </LChart>
      
    </div>
  )
}

LineChart.propTypes = {

}

export default LineChart
