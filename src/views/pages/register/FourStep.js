import React, { useState, useEffect } from 'react';
import company from '../../../assets/svg/clarity_building-line.png';
import mNumber from '../../../assets/svg/akar-icons_mobile-device.png';
import email from '../../../assets/svg/ic_twotone-alternate-email.png';
import address from '../../../assets/svg/akar-icons_location.png';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_ENDPOINT;

function FourStep() {
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('Token not found');
            setIsLoading(false);
            return;
        }
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Token ${token}`
        };
        axios.get(`${apiUrl}user-details/`, { headers })
            .then(response => {
                console.log(response)
                setUserData(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="grid-container">
            <div className="grid-item">
                <ul>
                    <li className='icon'><img src={company} alt="company" /></li>
                    <li className='name'>Company</li>
                    <li className='e-dtl'>{userData?.company_name}</li>
                </ul>
            </div>
            <div className="grid-item">
                <ul>
                    <li className='icon'><img src={address} alt="company" /></li>
                    <li className='name'>Address</li>
                    <li className='e-dtl'>{userData?.state}</li>
                </ul>
            </div>
            <div className="grid-item">
                <ul>
                    <li className='icon'><img src={mNumber} alt="company" /></li>
                    <li className='name'>Phone Number</li>
                    <li className='e-dtl'>{userData?.phone_number}</li>
                </ul>
            </div>
            {/* <div className="grid-item">
                <ul>
                    <li className='icon'><img src={address} alt="company" /></li>
                    <li className='name'>Zip Code</li>
                    <li className='e-dtl'>987 655</li>
                </ul>
            </div> */}
            <div className="grid-item">
                <ul>
                    <li className='icon'><img src={email} alt="company" /></li>
                    <li className='name'>Email</li>
                    <li className='e-dtl'>{userData?.email}</li>
                </ul>
            </div>
            <div className="grid-item">
                <ul>
                    <li className='icon'><img src={address} alt="company" /></li>
                    <li className='name'>Country</li>
                    <li className='e-dtl'>{userData?.country}</li>
                </ul>
            </div>
        </div>
    )
}
export default FourStep;