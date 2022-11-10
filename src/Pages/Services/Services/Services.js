import React, { useEffect, useState } from 'react';
import useTitle from '../../../Hooks/useTitle';
import Loading from '../../Shared/Loading/Loading';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    useTitle('Services')

    useEffect(() => {
        setLoading(true)
        fetch('https://daygraphy-server.vercel.app/services/')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
    }, [])

    // console.log(services);
    return (
        <div>

            {
                loading && <Loading></Loading>
            }
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 mt-8 mb-12 px-6 w-full'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;