import { PieChart, Pie, Cell} from 'recharts';

const Statistics = () => {

    
    const totalJobs = 12;
    const appliedJobs = totalJobs - 5;

    const data = [
        { name: 'Total Donations', value: totalJobs, color: '#FF444A' }, 
        { name: 'Your Donations', value: appliedJobs, color: '#00C49F' },
      ];

    return (
        <div className="flex flex-col justify-center items-center ml-10 md:ml-0 lg:ml-0">
           <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          data={data}
          label={({ cx, cy, midAngle, innerRadius, outerRadius, name }) => {
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
            const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

            let labelText = '';
            if (name === 'Your Donations') {
            labelText = `${((appliedJobs / 12) * 100).toFixed(2)}%`;
            } else if (name === 'Total Donations') {
            labelText = `${((totalJobs / 12) * 100).toFixed(2)}%`;
            }
                    
            return (
              <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
              >
                {labelText}
              </text>
            );
          }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        
      </PieChart>
      <div className='flex gap-10 text-lg mt-12'>
        <h1>Applied Jobs: <span className='bg-[#00C49F] text-white px-2'>{((appliedJobs/12) * 100).toFixed(2)}%</span> </h1>
        <h1>Total Jobs: <span className='bg-[#FF444A] text-white px-2'>{((12-appliedJobs)/12 * 100).toFixed(2)}%</span></h1>
      </div>
        </div>
    );
};

export default Statistics;