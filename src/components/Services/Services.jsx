
import './Services.module.css'; 
import img1 from '../../assets/img1.png';
const servicesData = [
  {
    id: 1,
    image: img1,
    name: 'Service 1',
    category: 'Category 1',
    subcategory: 'Subcategory 1',
    desc: 'Description of Service 1',
  },
  {
    id: 2,
    image: img1,
    name: 'Service 2',
    category: 'Category 2',
    subcategory: 'Subcategory 2',
    desc: 'Description of Service 2',
  },
  
];

const Services = () => {
  return (
    <>
    <div className="services-heading">
        <h2 className="heading-text">Services</h2>
      </div>
    
    <div className="services-container">
      {servicesData.map(service => (
        <div key={service.id} className="service-card">
          <div className="service-image">
            <img src={service.image} alt={service.name} />
          </div>
          <div className="service-details">
            <h3>{service.name}</h3>
            <p><strong>Category:</strong> {service.category}</p>
            <p><strong>Subcategory:</strong> {service.subcategory}</p>
            <p>{service.desc}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Services;
