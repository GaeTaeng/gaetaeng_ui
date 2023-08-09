import React from 'react'
import './Profile.css'

export default function Profile() {
    return (
        <div className='profile'>
            {/* <h1>Profile</h1> */}
            <hr />
            <div className='white-background section right'>
                Who is GaeTaeng?
            </div>
            <div className='dark-background section left'>
            My Skills
            </div>

            <div className='white-background section right'>
            My Project
            </div>

            <div className='dark-background section left'>
            Gym & BodyProfile
            </div>


        </div>
    )
}