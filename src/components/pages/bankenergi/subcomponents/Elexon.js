
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, BarChart,Bar, AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Elexon({ dataGiven, graphId,datakeyOne,dataKeyOneX,datakeyTwo }) {

  switch (graphId) {
    case 0:
      return (
        <ResponsiveContainer width="85%" height="70%">
          <LineChart
            width={200}
            height={200}
            data={dataGiven}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={datakeyOne} />
            <YAxis />
            <Tooltip />
            <Legend />
            {dataKeyOneX && <Line  type="monotone" dataKey={dataKeyOneX} stroke="#82ca9d"  activeDot={{ r: 8 }}/>}
            <Line type="monotone" dataKey={datakeyTwo} stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      )

    case 1:
      return (
        <div style={{ width: '85%', height: '70%' }} >
          <ResponsiveContainer width="99%" height="100%">
            <AreaChart
              width={200}
              height={200}
              data={dataGiven}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={datakeyOne} />
              <YAxis />
              <Tooltip />
              {dataKeyOneX && <Area  type="monotone" stackId="1" dataKey={dataKeyOneX} stroke="#82ca9d" fill="#82ca9d" />}
              <Area type="monotone" dataKey={datakeyTwo} stackId="1" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )

    case 2:
      return (
        <div style={{ width: '85%', height: '70%' }} >
          <ResponsiveContainer width="99%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={dataGiven}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={20}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis name={datakeyOne} dataKey={datakeyOne} />
              <YAxis />
              <Tooltip />
              <Legend />
              {dataKeyOneX && <Bar dataKey={dataKeyOneX} fill="#82ca9d"  />}
              <Bar  dataKey={datakeyTwo} fill="#8884d8"  />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )
    case 3 :
      return (
        <div style={{ width: '99%', height: '70%' }} >
          <ResponsiveContainer width="99%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataGiven}>
          <PolarGrid />
          <PolarAngleAxis dataKey={datakeyOne} />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name={datakeyTwo} dataKey={datakeyTwo} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          {dataKeyOneX && <Radar  name={dataKeyOneX}  dataKey={dataKeyOneX} fill="#82ca9d" fillOpacity={0.6}/>}
          <Legend />
        </RadarChart>
          </ResponsiveContainer>
        </div>
      )
      
    default:
      return <div>nothing</div>
  }
  
}

export default Elexon
