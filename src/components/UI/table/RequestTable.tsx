import { Approved, Declined, Eye, Message } from '@/components/svgs/Heart';
import React, { useState } from 'react';

// Define a type for the mentor data
type Mentor = {
    id: number;
    name: string;
    mentees: string;
    confirmedDeals: number;
    memberSince: string;
    phone?: string;
    email?: string;
    homeBranch?: string;
    expertise?: string;
    languages?: string;
    joinedDate?: string;
};

// Mock data for mentors
const mentors: Mentor[] = [
    {
        id: 1,
        name: 'Allison Gouse',
        mentees: "160000rwf",
        confirmedDeals: 152,
        memberSince: 'pending',
        phone: '+1 (647) 654-8621',
        email: 'allison.gouse@example.com',
        homeBranch: 'Downtown Toronto',
        expertise: 'Commercial real estate',
        languages: 'English, Russian, French',
        joinedDate: '10 September 2020',
    },
    {
        id: 2,
        name: 'Kadin Carder',
        mentees: "160000rwf",
        confirmedDeals: 16,
        memberSince: 'rejected',
        phone: '+1 (647) 654-8622',
        email: 'kadin.carder@example.com',
        homeBranch: 'Uptown Toronto',
        expertise: 'Residential real estate',
        languages: 'English, Spanish',
        joinedDate: '15 August 2019',
    },
    {
        id: 3,
        name: 'Dulce Baptista',
        mentees: "160000rwf",
        confirmedDeals: 45,
        memberSince: 'approved',
        phone: '+1 (647) 654-8623',
        email: 'dulce.baptista@example.com',
        homeBranch: 'East Toronto',
        expertise: 'Industrial real estate',
        languages: 'English, Portuguese',
        joinedDate: '12 June 2018',
    },
 
    {
        id: 3,
        name: 'Dulce Baptista',
        mentees: "160000rwf",
        confirmedDeals: 45,
        memberSince: 'approved',
        phone: '+1 (647) 654-8623',
        email: 'dulce.baptista@example.com',
        homeBranch: 'East Toronto',
        expertise: 'Industrial real estate',
        languages: 'English, Portuguese',
        joinedDate: '12 June 2018',
    },
    {
        id: 2,
        name: 'Kadin Carder',
        mentees: "160000rwf",
        confirmedDeals: 16,
        memberSince: 'rejected',
        phone: '+1 (647) 654-8622',
        email: 'kadin.carder@example.com',
        homeBranch: 'Uptown Toronto',
        expertise: 'Residential real estate',
        languages: 'English, Spanish',
        joinedDate: '15 August 2019',
    },
];


const RequestTable: React.FC = () => {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const toggleExpand = (id: number) => {
        if (expandedId === id) {
            setExpandedId(null); 
        } else {
            setExpandedId(id); 
        }
    };

    return (
        <div className="overflow-x-auto flex flex-col gap-5">
            <div className='flex flex-col gap-1'>
                <h3  className='text-sm font-medium text-indigo-600 uppercase'>Requests</h3>
                <p className='text-sm leading-5 text-primary_gray'> See below all the booking visits requests</p>
            </div>
            <table className=" bg-white shadow-3xl rounded-md ">
                <thead className="bg-gray-200 rounded-t-md">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Names
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            House Location
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            House Price
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            More
                        </th>
                    </tr>
                </thead>

                <tbody className='text-primary_gray text-sm'>
                    {mentors.map((mentor) => (
                        <React.Fragment key={mentor.id}>
                            <tr className='border'>
                                <td className='px-5 py-2'>{mentor.name}</td>
                                <td className='px-5'>{mentor.expertise}</td>
                                <td className='px-5'>{mentor.mentees}</td>
                                <td className='px-5'>
                                    <div  className={`${mentor.memberSince === 'pending' ? 'bg-yellow-500/20 text-yellow-500 border border-yellow-500' : mentor.memberSince === 'approved' ? 'bg-green-500/20 border border-green-500 text-green-500' : 'bg-red-500/20 border border-red-500 text-red-500'} capitalize rounded-2xl grid place-content-center w-20 text-xs py-1 font-medium`}>{mentor.memberSince}</div>
                                    </td> 
                                <td className='px-5'>
                                    <button
                                        onClick={() => toggleExpand(mentor.id)}
                                        className="border-indigo-600 border text-xs hover:bg-blue-700 text-indigo-600 font-bold py-1 px-4 rounded"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                            {expandedId === mentor.id && (
                                <tr>
                                    <td colSpan={5}>
                                        <div className="grid grid-cols-4 gap-10 p-4">
                                            <div className='flex flex-col gap-2'>
                                                <h3>Contact Details</h3>
                                                <div><strong>Phone:</strong> {mentor.phone}</div>
                                                <div><strong>Email:</strong> {mentor.email}</div>
                                                <div><strong>Time:</strong> {mentor.email}</div>
                                            </div>

                                            <div className='flex flex-col gap-2'>
                                                <p>Message</p>
                                                <p className='text-primary_gray text-sm leading-5'>Hello, I am interested in this house and would like to visit and also I am interested in this house and would like to visit and also</p>
                                                <div className='flex gap-2 items-center'>
                                                    <Message fill={'#000'} height={'20px'} width={'20px'} stroke={'#fff'} stroke_width={0} />
                                                    <p className='underline'>Reply</p>
                                                </div>
                                            </div>

                                            <div className='flex flex-col gap-2'>
                                                <h3>House Details</h3>
                                                <div><strong>Phone:</strong> {mentor.phone}</div>
                                                <div><strong>Email:</strong> {mentor.email}</div>
                                                <button className='underline flex gap-1 items-center text-sm'><Eye fill={'black'} height={'20px'} width={'20px'} stroke={''} stroke_width={0} />View house</button>

                                                <div className='flex gap-3'>
                                                    <button className='bg-green-700 px-5 py-2 text-white rounded flex gap-1 items-center text-sm'> <Approved fill={'white'} height={'15px'} width={'15px'} stroke={''} stroke_width={0} /> Approve</button>
                                                    <button className='bg-red-500 px-5 py-2 text-white rounded flex gap-1 items-center text-sm'><Declined fill={'white'} height={'15px'} width={'15px'} stroke={''} stroke_width={0} /> Decline</button>
                                                </div>
                                            </div>

                                            <div className='flex flex-col gap-2'>
                                                <img src="/assets/apartment.jpeg" className='rounded' />
                                                <div className='grid grid-cols-3 gap-2'>
                                                    <img src="/assets/apartment.jpeg" className='rounded' />
                                                    <img src="/assets/apartment.jpeg" className='rounded' />
                                                    <img src="/assets/apartment.jpeg" className='rounded' />

                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RequestTable;
