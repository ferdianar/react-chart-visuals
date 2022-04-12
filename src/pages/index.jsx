import React from 'react'
import Contribute from '../components/Contribute'
import Country from '../components/Country'
import Days from '../components/Days'

const Homepage = () => {
    return (
        <React.Fragment>
            <h1 style={{ textAlign: "center" }}>Test Chart</h1>
            {/* <Days />
            <Contribute /> */}
            <Country />
        </React.Fragment>
    )
}

export default Homepage