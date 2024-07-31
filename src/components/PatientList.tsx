import PatientCard from './PatientCard';
const data = [
  {
    id: 1,
    name: 'John Doe',
    avatar: '/images/Edward_Jenner.jpg',
    createdAt: 'June 14, 2019, 19:30',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    website: 'https://example.com',
  },
  {
    id: 2,
    name: 'Jane Doe',
    avatar: '/images/Edward_Jenner.jpg',
    createdAt: 'June 14, 2019, 19:30',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    website: 'https://example.com',
  },
  {
    id: 3,
    name: 'Jane Doe',
    avatar: '/images/Edward_Jenner.jpg',
    createdAt: 'June 14, 2019, 19:30',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    website: 'https://example.com',
  },
];

const PatientList = () => {
  return (
    <ul className='flex gap-3 flex-wrap'>
      {data.map((patient) => (
        <PatientCard key={patient.id} patient={patient} />
      ))}
    </ul>
  );
};

export default PatientList;
