
import './CarrerDetailsPage.module.css'; 
import ApplyCard from '../ApplyCard/ApplyCard.jsx'

const CareerDetailsPage = ({ title, position, vacancies, experience, location, joining, overview, responsibilities, requirements }) => {
  return (
    <div className="career-container">
      <div className="career-details">
      <h2>{title}</h2>
      <div className="details">
        <div>
          <p>Position: {position}</p>
          <p>Vacancies: {vacancies}</p>
          <p>Experience Required: {experience}</p>
          <p>Location: {location}</p>
          <p>Joining Date: {joining}</p>
        </div>
        <div className="overview">
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
        <div className="responsibilities">
          <h2>Responsibilities</h2>
          <ul>
            {responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>
        <div className="requirements">
          <h2>Requirements</h2>
          <ul>
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className="apply">
      <ApplyCard/>
    </div>
    </div>
    
  );
};

export default CareerDetailsPage;
