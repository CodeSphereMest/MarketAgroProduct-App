import React from "react"
// import { Comfort-image.jpg, Ken-image.jpg} from "../../assets"

// const TeamMemberCard = ({name, image, background, bio}) => (
//     <div className="team-member-card">
//         <h3>{name}</h3>
//         <img src={image} alt="" />
//         <p>{background}</p>
//         <p>{bio}</p>
//     </div>
// );


const AboutUs = () => {
    const teamMembers = [
        {
            name: "Kenneth Boateng-Antwi",
            image: "../src/assets/Ken-image.jpg",
            background: "Founder & CEO",
            bio: "Ken is a passionate entrepreneur who has been in the food industry for over 20 years."
        },
        {
            name: "Cilla Azil",
            image: "../src/assets/Cilla.jpg",
            background: "Co-Founder & CTO",
            bio: "Cilla is a tech-savvy professional with a background in computer science and engineering."
        },
        {
            name: "Comfort Arthur",
            image: "../src/assets/Comfort-image.jpg",
            background: "Head of Operations",
            bio: "Comfort is a seasoned operations manager with a passion for sustainable practices."
        }
        ,
        {
            name: "Sandra Dakey",
            image: "../src/assets/Sandra-image.jpg",
            background: "Head of Marketing",
            bio: "Sandra is a marketing expert with a background in digital marketing and brand management."
        }
    ]

    return (
    <div className="about-us">
        <section className="hero-section">
            <h1>Empowering Healthy Lifestyles with Every Bite</h1>
            <p>Discover farm-fresh produce delivered in eco-friendly packaging, <br/>
            directly to your doorstep</p>
        </section>
        <section className="mission-statement">
            <h2>Our Mission</h2>
            <p>Our mission is to ensure that every piece of produce we deliver<br/>
             represents our commitment to freshness, hygiene, and environmental responsibility. <br/>
             By adopting plastic-free packaging, we not only provide our customers with farm-fresh produce
             <br/>
             but also contribute to a healthier planet.</p>
        </section>
        <section className="vision-statement">
            <h2>Our Vision</h2>
            <p>To become a marketplace that connects conscientious consumers with local farmers, <br/>
            transforming the way we think about food, from farm to fork, virtually. We envision a world where <br/>
            access to nutritious, responsibly packaged food is a standard, not a luxury.</p>
        </section>
        <section className="values">
            <h2>Our Values</h2>
            <ul>
                <li><strong>Sustainability</strong>: "We prioritize the planet in every decision, from packaging to partnerships."</li>
                <li><strong>Quality</strong>: "Every product is hand-selected for its freshness and nutritional value."</li>
                <li><strong>Community</strong>: "Building strong, supportive relationships with both our farmers and customers."</li>
            </ul>
        </section>
        <section className="our-team">
            <h2>Meet the Faces Behind Our Freshness</h2>
            <div className="team-members">
                {teamMembers.map(member =>(
                    <div key={member.name} className="team-member-card">
                        <img src={member.image} alt={member.name} width="50%" className="team-member-image"/>
                        <div className="team-member-info">
                            <h3>{member.name}</h3>
                            <p>{member.background}</p>
                            <p>{member.bio}</p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default AboutUs;
