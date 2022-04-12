import React from 'react'
import { ResponsiveChoropleth } from '@nivo/geo'
import country from "../apis/country.json"
import contries from "../apis/world_countries.json"

const Country = () => {
    return (
        <React.Fragment>
            <div style={{ width: "100%", maxWidth: "1000px", margin: "0 auto", height: "500px" }}>
                <ResponsiveChoropleth
                    data={country}
                    features={contries.features}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    colors="nivo"
                    domain={[0, 1000000]}
                    unknownColor="#666666"
                    label="properties.name"
                    valueFormat=".2s"
                    projectionTranslation={[0.5, 0.5]}
                    projectionRotation={[0, 0, 0]}
                    enableGraticule={true}
                    graticuleLineColor="#dddddd"
                    borderWidth={0.5}
                    borderColor="#152538"
                    legends={[
                        {
                            anchor: 'bottom-left',
                            direction: 'column',
                            justify: true,
                            translateX: 20,
                            translateY: -100,
                            itemsSpacing: 0,
                            itemWidth: 94,
                            itemHeight: 18,
                            itemDirection: 'left-to-right',
                            itemTextColor: '#444444',
                            itemOpacity: 0.85,
                            symbolSize: 18,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000000',
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </div>
        </React.Fragment>
    )
}

export default Country