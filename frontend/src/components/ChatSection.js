import React, { useState, useEffect, useRef } from 'react';
import Chart from "chart.js/auto"
import { LuRefreshCcw } from "react-icons/lu";



const ChatSection = (props) => {

    const chartRef1 = useRef(null);
    const chartInstance1 = useRef(null);
    const [chatType, setChatType] = useState('bar');
    const [reload, setReload] = useState('reload');

    const Refresh = () => {
        if (reload === '') {
            setReload('reload')

        } else {
            setReload('')

        }
    }

    // First chart
    useEffect(() => {
        const ctx1 = chartRef1.current.getContext('2d');
        const barColours1 = ['rgba(255, 99, 132, 255)', 'rgb(56,155,248)', 'rgba(255, 99, 132, 0.2)', 'rgba(90, 150, 0, 50)', 'rgb(18,69,117)'];

        chartInstance1.current = new Chart(ctx1, {
            type: chatType,
            data: {
                labels: props.labels,
                datasets: [
                    {
                        label: 50,
                        data: [props.attendance, props.testScore, 40, 80, 90],
                        backgroundColor: barColours1,
                    },
                ],
            },
            options: {
                indexAxis: 'x',
            },
        });

        return () => {
            chartInstance1.current.destroy();
        };
    }, [props.testScore, chatType, reload]);


    return (
        <div className=''>
              <div className='flex justify-end gap-3 mt-4'>
                <select 
                    className=' rounded-md outline-none w-[90px] text-sm'
                    value={chatType}
                    onChange={(event) => setChatType(event.target.value)}
                >
                    <option value='bar'> Bar Chat</option>
                    <option value='pie'> Pie Chat</option>
                    <option value='line'> Line Chat</option>
                    <option value='doughnut'> Doughnut Chat</option>
                    <option value='polarArea'> Polar Area Chat</option>
                    <option value='radar'> Radar Chat</option>
                   
                </select>

                <button onClick={Refresh}>
                    <div className='flex gap-2 text-gray-500 text-sm justify-center'>

                        <p className='hidden sm:block'>Refresh</p>
                        <LuRefreshCcw size={20} />

                    </div>
                </button>
            </div>

            <div className='flex justify-center pb-2 px-2 '>
                <div className='w-[550px]'>
                    <p className="justify-center text-center pt-2 text-[#2b4053] text-sm ">{`${props.course} Performance`}</p>
                    <canvas ref={chartRef1} />
                </div>
            </div>
          
        </div>
    )
}

export default ChatSection