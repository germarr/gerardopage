import { Line } from "react-chartjs-2"

export default function Graphs({data}) {
    var dataPoints = data["views"]
    var videoTitles = data["title"]

    let elist = []
    
    for (let i=0; i<dataPoints.length; i++){
        elist.push(data['dates'][i].slice(0,10))
    }

    return (
        <div className="bg-white rounded-md shadow-sm p-5">
            <div className="font-semibold text-lg text-gray-700">Total Views.</div>
            <Line
                data={{
                    labels: elist,
                    datasets: [{
                        label: '# of Views',
                        data: dataPoints,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)'
                        ],
                        borderWidth: 1
                    }]
                }}
                height={50}
                width={150}
                options={{
                    maintainAspectRatio:true,
                    scales:{
                        y:{
                            beginAtZero:true
                        }
                    },
                    plugins:{
                        tooltip:{
                            displayColors:false,
                            callbacks: {
                                title: function(tooltipItems,data) {
                                    var labels = tooltipItems[0]
                                    console.log(">>>>>>",labels["dataIndex"])
                                    return videoTitles[labels["dataIndex"]]
                                    }
                            }
                        }
                }}}
            />
        </div>
        )}
