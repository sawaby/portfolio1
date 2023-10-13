"use client";
import React, { useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { PieChart } from '@mui/x-charts/PieChart';
import ReactCardFlip from 'react-card-flip';

import ProjectTag from './Projects/ProjectTag';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const Skills = () => {
    const [tag, setTag] = useState('BarChart');
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = (newTag) => {
        setTag(newTag);
        if (tag !== newTag){
            setIsFlipped(!isFlipped);
        }  
    }
    
  return (
    <section id='skills' className='text-white mb-[100px] mt-11'>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-6 md:mb-12"> Skills</h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag onClick={handleClick} name="BarChart" isSelected={tag === "BarChart"} />
            <ProjectTag onClick={handleClick} name="PieChart" isSelected={tag === "PieChart"} />
        </div>
         <div className="flex flex-wrap justify-center">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="h-[600px]">
                <ThemeProvider theme={darkTheme}  >
                    <BarChart
                        sx={[{p: 4, m: 4}]}
                        yAxis={[
                            {
                            id: 'barCategories',
                            data: ['React', 'Python', 'JavaScript', 'Node.js', 'Express', 'Progress', 'MySQL', 'MongoDB', 'API', 'jQuery', 'Procreate', 'Illustrator', 'Premiere', 'Java'],
                            scaleType: 'band',
                            },
                        ]}
  
                        series={[
                            {
                                data: [80, 85, 85, 60, 30, 80, 60, 50, 80, 90, 90, 50, 30, 50],
                            color: '#bb98a4',
                            },
                            
                        ]}
                        layout="horizontal"
                        slots={{
                            bar: (props) => {
                              const radius = 10;
                              const { x, y, height, width, ownerState, ...restProps } = props;
                              const d = `M${x},${y} h${
                                width - radius
                              }a${radius},${radius} 0 0 1 ${radius},${radius} v${
                                height - 2 * radius
                              } a${radius},${radius} 0 0 1 ${-radius},${radius} h${
                                radius - width
                              }z`;
                              return <path d={d} fill={ownerState.color} {...restProps} />;
                            }
                          }}
                    />
                </ThemeProvider>
            </div>
            <div className="h-[500px]">
              <ThemeProvider theme={darkTheme}>
                    <PieChart
                        
                        series={[
                            {
                            data: [
                                { value: 80, label: 'React' },
                                { value: 85, label: 'Python' },
                                { value: 85, label: 'JavaScript' },
                                { value: 60, label: 'Node.js' },
                                { value: 30, label: 'Express' },
                                { value: 80, label: 'Progress' },
                                { value: 60, label: 'MySQL' },
                                { value: 50, label: 'MongoDB' },
                                { value: 80, label: 'API' },
                                { value: 90, label: 'jQuery' },
                                { value: 50, label: 'Java' },
                                { value: 90, label: 'Procreate' },
                                { value: 30, label: 'Illustrator' },
                                { value: 50, label: 'Premiere' },
                            ],
                            innerRadius: 50,
                            outerRadius: 150,
                            paddingAngle: 4,
                            cornerRadius: 5,
                            startAngle: -90,
                            endAngle: 220,
                        
                            },
                        
                        ]}
                        />
                </ThemeProvider>
            </div>
        </ReactCardFlip>
        </div> 
        
    </section>
  )
}

export default Skills;