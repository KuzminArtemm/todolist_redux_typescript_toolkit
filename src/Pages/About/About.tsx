import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <div style={{ textAlign: 'center', marginTop: '50px', fontWeight: 700 }}>
        This app was build for consistent study.
      </div>
      <button
        onClick={handleNavigate}
        type="button"
        style={{ width: '70px' }}
        className="btn my-3 bg-success-subtle"
      >
        return
      </button>
    </div>
  );
};

export default About;
