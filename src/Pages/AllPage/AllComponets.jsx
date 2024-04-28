
import Products from '../../components/Products/Products'
import Carrier from '../../components/Carrier/Carrier'
import PeopleCard from '../../components/PeopleCard/PeopleCard'
import CareerDetailsPage from '../../components/CarrierDetails/CarrierDetailsPage'
import Services from '../../components/Services/Services'
import ProductPage from '../ProductPage/ProductPage'

const AllComponets = () => {
  return (
    <div>
        <Products/>
      <Carrier/>
      <PeopleCard/>
      <CareerDetailsPage
  title="Software Engineer"
  position="Full Stack Developer"
  vacancies={3}
  experience="2+ years"
  location="New York, NY"
  joining="ASAP"
  overview="We are looking for a talented and experienced Full Stack Developer to join our team..."
  responsibilities={[
    "Developing front end website architecture.",
    "Designing user interactions on web pages.",
    "Developing back-end website applications."
  ]}
  requirements={[
    "Bachelor's degree in Computer Science or related field.",
    "2+ years of professional experience in web development.",
    "Proficiency in HTML, CSS, JavaScript, and React.js.",
    "Experience with back-end development frameworks such as Node.js or Django."
  ]}
/>
<Services/>
<ProductPage/> 
    </div>
  )
}

export default AllComponets