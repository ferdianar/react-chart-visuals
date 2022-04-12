import { ResponsiveBar } from '@nivo/bar'
import React from 'react'
import { days } from '../apis/days'

const Days = () => {
	return (
		<React.Fragment>
			<div style={{ width: "700px", height: "400px" }}>
				<ResponsiveBar
					data={days}
					keys={["degress"]}
					indexBy="day"
					margin={{ top: 50, right: 130, bottom: 50, left: 100 }}
					padding={0.4}
					valueScale={{ type: "linear" }}
					colors="#3182CE"
					animate={true}
					enableLabel={false}
					axisTop={null}
					axisRight={null}
					axisLeft={{
						tickSize: 45,
						tickPadding: 5,
						tickRotation: 0,
						legend: "degrees",
						legendPosition: "middle",
						legendOffset: -40
					}}
				/>
			</div>
		</React.Fragment>
	)
}

export default Days