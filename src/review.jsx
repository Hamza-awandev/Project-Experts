import "./review.css";
import { MdOutlineStarPurple500 } from "react-icons/md";

const revtop = [
  {
    dp: <img src="/images/rev1.webp" alt="Walid J." />,
    name: "Walid J.",
    des: "Could not have asked for a better team to help me fix the issues I had. It was a real pleasure to work with Project Experts. Thoughtful, patient, and very skilled team. Overall, a great experience.",
  },
  {
    dp: <img src="/images/rev2.webp" alt="Eli Hertz" />,
    name: "Eli Hertz",
    des: "Project Experts were absolutely amazing. I am absolutely thrilled with their outstanding work. Their attention to detail and ability to understand our requirements exceeded our expectations. I highly recommend their services to anyone seeking top-notch web design. ❤",
  },
  {
    dp: <img src="/images/rev3.webp" alt="Mackenzie M." />,
    name: "Mackenzie M.",
    des: "I am very satisfied working with Project Experts. They are extremely professional and delivered a top-notch product that I am so happy with! I will be reaching out to Project Experts again when I am ready for the next evolution of my website. Thank you, Project Experts, for your hard work!",
  },
];

const revend = [
  {
    dp: <img src="/images/rev4.webp" alt="Stan" />,
    name: "Stan",
    des: "Project Experts pay a lot of attention to details, starting by understanding (and challenging) your exact needs to be as accurate as possible when designing/coding a solution. I definitely recommend them and would work with them again. 🚀",
  },
  {
    dp: <img src="/images/rev5.webp" alt="Ketan" />,
    name: "Ketan",
    des: "Project Experts kept their promise and delivered the work with 100 percent accuracy. They are perfect at what they do. ❤",
  },
  {
    dp: <img src="/images/rev6.webp" alt="Edwin A." />,
    name: "Edwin A.",
    des: "Project Experts were exceptional. They did everything I needed very quickly, the same day actually. They were also very trusting, not even creating the order before everything was done.",
  },
];

const Review = () => {
  return (
    <div className="review">
      <div className="upper">
        <h6>Do not take our word for it!</h6>
        <h2>Hear it from our clients</h2>
      </div>

      <div className="card-container">
        <div className="card-section">
          {revtop.map((data, index) => (
            <div className="rev-cards" key={index}>
              <div className="card">
                <div className="card-top">
                  <div className="logo-pic">{data.dp}</div>
                  <div className="content">
                    <div className="rating-star">
                      <MdOutlineStarPurple500 />
                      <MdOutlineStarPurple500 />
                      <MdOutlineStarPurple500 />
                      <MdOutlineStarPurple500 />
                      <MdOutlineStarPurple500 />
                    </div>
                    <h4>{data.name}</h4>
                  </div>
                </div>
                <p className="card-bottom">{data.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card-container">
        <div className="card-section">
          {revend.map((data, index) => (
            <div className="rev-cards" key={index}>
              <div className="card">
                <div className="card-top">
                  <div className="logo-pic">{data.dp}</div>
                  <div className="content">
                    <div className="rating-star">
                      <MdOutlineStarPurple500 />
                      <MdOutlineStarPurple500 />
                      <MdOutlineStarPurple500 />
                      <MdOutlineStarPurple500 />
                      <MdOutlineStarPurple500 />
                    </div>
                    <h4>{data.name}</h4>
                  </div>
                </div>
                <p className="card-bottom">{data.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
