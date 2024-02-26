

export const AboutUs = () => (
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
            transforming the way we think about food, from farm to fork virtually. We envision a world where <br/>
            access to nutritious, responsibly-packaged food is a standard, not a luxury.</p>
        </section>
        <section className="values">
            <h2>Our Values</h2>
            <ul>
                <li><strong>Sustainability</strong>: "We prioritize the planet in every decision, from packaging to partnerships."</li>
                <li><strong>Quality</strong>: "Every product is hand-selceted for its freshness and nutritional value."</li>
                <li><strong>Community</strong>: "Building strong, supportive relationships with both our farmers and customers."</li>
            </ul>
        </section>
        <section className="our-team">
            <h2>Meet the Faces Behind Our Freshness</h2>
            <div className="team-members">
                {teamMembers.map(member =>(
                    <div key={member.name} className="team-member-card">
                        <img src={member.image} alt={member.name} className="team-member-image"/>
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
