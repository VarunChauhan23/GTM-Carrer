import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import styles from "./Philosophy.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Card.css";
import StateFadeMenu from "./StateFadeMenu";
import DepartmentFadeMenu from "./DepartmentFadeMenu";

function AllCarrier() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    AOS.init({ duration: "1000" });
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch("https://gtm-backend.onrender.com/api/getalljobs");
      const data = await response.json();
      if (data.success) {
        setJobs(data.data);
      } else {
        console.error("Failed to fetch jobs:", data.message);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  return (
    <div>
     <div className="selectState">
        <h4>Filter By: </h4>
     <StateFadeMenu/>
      <DepartmentFadeMenu/>
     </div>
      <div className={styles.cardContainer}>
        {jobs.map((job) => (
          <Link key={job._id} to={`/carrier/${job._id}`} className={styles.card1} data-aos="fade-right">
            <img src={job.avatar} alt={job.title} />
            <div className={styles.centered}>
              <strong>{job.title}</strong>
            </div>
            <div className={styles.detailContainer}>
              More details
            </div>
          </Link>
        ))}
      </div>
     
    </div>
  );
}

export default AllCarrier;
