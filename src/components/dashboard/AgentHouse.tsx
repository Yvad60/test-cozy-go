import React, { useState } from 'react';
import HouseAgent from '../UI/cards/HouseAgent';
import AddHouse from '../modals/AddHouse';
import HouseForm from '../forms/HouseForm';

const AgentHouse = () => {
    const [showAddHouseModal, setShowAddHouseModal] = useState(false);

    const handleOpenAddHouseModal = () => setShowAddHouseModal(true);
    const handleCloseAddHouseModal = () => setShowAddHouseModal(false);

    return (

        <div className='px-20 py-20 flex flex-col gap-10 w-full'>

            <div>
            <button 
                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    onClick={handleOpenAddHouseModal}
                >
                    Add House
                </button>

            </div>
            <div className="container  w-full grid grid-cols-3 gap-6 2xl:gap-5">
                <HouseAgent
                    bedrooms={3}
                    baths={3}
                    area={340}
                    price={25000.00}
                    address="Meadowview Lane, Tranquil Springs"
                />

                <HouseAgent
                    bedrooms={3}
                    baths={3}
                    area={340}
                    price={25000.00}
                    address="Meadowview Lane, Tranquil Springs"
                />

                <HouseAgent
                    bedrooms={3}
                    baths={3}
                    area={340}
                    price={25000.00}
                    address="Meadowview Lane, Tranquil Springs"
                />
                 <HouseAgent
                    bedrooms={3}
                    baths={3}
                    area={340}
                    price={25000.00}
                    address="Meadowview Lane, Tranquil Springs"
                />

                <HouseAgent
                    bedrooms={3}
                    baths={3}
                    area={340}
                    price={25000.00}
                    address="Meadowview Lane, Tranquil Springs"
                />

                <HouseAgent
                    bedrooms={3}
                    baths={3}
                    area={340}
                    price={25000.00}
                    address="Meadowview Lane, Tranquil Springs"
                />
                 <HouseAgent
                    bedrooms={3}
                    baths={3}
                    area={340}
                    price={25000.00}
                    address="Meadowview Lane, Tranquil Springs"
                />

                <HouseAgent
                    bedrooms={3}
                    baths={3}
                    area={340}
                    price={25000.00}
                    address="Meadowview Lane, Tranquil Springs"
                />

                <HouseAgent
                    bedrooms={3}
                    baths={3}
                    area={340}
                    price={25000.00}
                    address="Meadowview Lane, Tranquil Springs"
                />
                 <HouseAgent
                    bedrooms={3}
                    baths={3}
                    area={340}
                    price={25000.00}
                    address="Meadowview Lane, Tranquil Springs"
                />

                <HouseAgent
                    bedrooms={3}
                    baths={3}
                    area={340}
                    price={25000.00}
                    address="Meadowview Lane, Tranquil Springs"
                />

                <HouseAgent
                    bedrooms={3}
                    baths={3}
                    area={340}
                    price={25000.00}
                    address="test house edit "
                />
            </div>

            <AddHouse show={showAddHouseModal} onClose={handleCloseAddHouseModal}>
                <HouseForm />
            </AddHouse>

        </div>
    )
}

export default AgentHouse;
