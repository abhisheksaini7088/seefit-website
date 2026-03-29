import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ margin: 0, padding: 0, fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', backgroundColor: '#f8f9fa', color: '#212529' }}>
      <Head>
        <title>SEE FIT Gym | Join our community</title>
      </Head>

      {/* Hero Section */}
      <div style={{ position: 'relative', height: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', backgroundColor: '#000', overflow: 'hidden' }}>
        {/* Yahan tumhari background image lagayi hai */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url("/IMG-20260227-WA0000.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3, zIndex: 0 }}></div>
        <div style={{ position: 'relative', zIndex: 1, padding: '20px', maxWidth: '800px' }}>
          
          {/* Yahan text ki jagah aapka logo lagaya gaya hai */}
          <img 
            src="/see fit .jpeg" 
            alt="SEE FIT Logo" 
            style={{ width: '250px', maxWidth: '100%', height: 'auto', marginBottom: '10px' }} 
          />
          
          {/* Nayi tagline yahan update ki gayi hai */}
          <p style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '10px', color: '#fff', lineHeight: '1.4' }}>
            Join our community and get a personalized plan that works the way you want
          </p>
          <p style={{ fontSize: '1.1rem', color: '#ccc', marginTop: '15px', fontWeight: '500' }}>
            Transforming lives since 15 Feb 2026 | 5+ Years Experience
          </p>
          <a href="#join" style={{ display: 'inline-block', marginTop: '30px', padding: '15px 40px', fontSize: '1.2rem', fontWeight: 'bold', color: '#fff', backgroundColor: '#ff4500', textDecoration: 'none', borderRadius: '50px', textTransform: 'uppercase', letterSpacing: '1px', boxShadow: '0px 4px 15px rgba(255, 69, 0, 0.4)' }}>
            Join The Tribe
          </a>
        </div>
      </div>

      {/* Timings & Team Banner */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', backgroundColor: '#212529', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <div style={{ margin: '10px' }}>🕒 <strong>Timings:</strong> 5 AM To 11 PM (No days off - open even on sundays!)</div>
        <div style={{ margin: '10px' }}>🏅 <strong>Guided by certified trainers</strong></div>
        <div style={{ margin: '10px' }}>💪 <strong>One-on-one personalized training available</strong></div>
      </div>

      {/* Gym Vibe Video Section */}
      <div style={{ backgroundColor: '#111', padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#ff4500', marginBottom: '30px', textTransform: 'uppercase' }}>Experience The Vibe</h2>
        <video controls autoPlay muted loop style={{ maxWidth: '100%', width: '800px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(255, 69, 0, 0.2)', border: '2px solid #333' }}>
          {/* Yahan tumhara video link kiya hai */}
          <source src="/VID-20260227-WA0005.mp4" type="video/mp4" />
          Your browser does not support the video.
        </video>
      </div>

      {/* Gym Gallery Section */}
      <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#ff4500', marginBottom: '40px', textTransform: 'uppercase' }}>Our Space</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {/* Yahan tumhari 3 baaki photos lagayi hain */}
          <img src="/IMG-20260227-WA0002.jpg" alt="SEE FIT Space 1" style={{ width: '350px', height: '250px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} />
          <img src="/IMG-20260227-WA0003.jpg" alt="SEE FIT Space 2" style={{ width: '350px', height: '250px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} />
          <img src="/IMG-20260227-WA0004.jpg" alt="SEE FIT Space 3" style={{ width: '350px', height: '250px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} />
        </div>
      </div>

      {/* Mission & Services */}
      <div style={{ backgroundColor: '#e9ecef', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#ff4500', marginBottom: '40px', textTransform: 'uppercase' }}>Our Mission</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            {['Personal Training', 'CrossFit', 'Group Training', 'Zumba & Yoga Classes', 'Custom Diet & Workout Plan', 'Fat Loss & Weight Gaining'].map((item, index) => (
              <div key={index} style={{ backgroundColor: '#fff', padding: '20px 30px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', fontSize: '1.2rem', fontWeight: 'bold', color: '#333', borderBottom: '4px solid #ff4500' }}>
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Membership Plans */}
      <div style={{ padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#ff4500', marginBottom: '40px', textTransform: 'uppercase' }}>Membership Plans</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
            <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '15px', width: '250px', boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontSize: '1.8rem', margin: '0 0 15px 0' }}>3 Months</h3>
              <p style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ff4500', margin: '0 0 20px 0' }}>₹3800</p>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '15px', width: '250px', boxShadow: '0 10px 20px rgba(0,0,0,0.08)', border: '2px solid #ff4500' }}>
              <div style={{ backgroundColor: '#ff4500', color: '#fff', padding: '5px', borderRadius: '5px', fontSize: '0.9rem', marginBottom: '15px', display: 'inline-block', fontWeight: 'bold' }}>POPULAR</div>
              <h3 style={{ fontSize: '1.8rem', margin: '0 0 15px 0' }}>6 Months</h3>
              <p style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ff4500', margin: '0 0 20px 0' }}>₹6000</p>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '15px', width: '250px', boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontSize: '1.8rem', margin: '0 0 15px 0' }}>13 Months</h3>
              <p style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ff4500', margin: '0 0 20px 0' }}>₹9000</p>
            </div>
            <div style={{ backgroundColor: '#111', color: '#fff', padding: '40px', borderRadius: '15px', width: '250px', boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }}>
              <h3 style={{ fontSize: '1.8rem', margin: '0 0 15px 0' }}>Personal Training</h3>
              <p style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ff4500', margin: '0 0 10px 0' }}>₹6500</p>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#aaa' }}>+ Gym Fee</p>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities & Equipment */}
      <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#ff4500', marginBottom: '30px', textTransform: 'uppercase' }}>Premium Facilities & Equipment</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginBottom: '30px' }}>
          {['Fully AC Occupied', 'Male & Female Changing Rooms', 'Locker/Rack Facility', 'Ample Parking Space', 'RO Water (Cold & Hot)', 'Supplements Available', 'UPI Payments Accepted'].map((facility, i) => (
            <span key={i} style={{ backgroundColor: '#e9ecef', padding: '10px 20px', borderRadius: '50px', fontSize: '1rem', fontWeight: 'bold', color: '#333' }}>⭐ {facility}</span>
          ))}
        </div>
        <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '20px', fontWeight: 'bold' }}>1500+ KG Weights | Dedicated CrossFit Area</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
          {['Treadmill', 'Cross Trainer', 'Spin Bike', 'Wrist Raises', 'Multipress', 'Lat Pull Down', 'Seated Row', 'Pec-Dec', 'Squats Rack', 'Unique Deadlift Platform', 'Olympic Benches', 'Leg Press', 'Leg Curl', 'Calf Raises', 'Utility Bench', 'Adjustable & Flat Bench', 'Abductor', 'Cable Cross Station', 'Smith Machine'].map((equip, i) => (
            <span key={i} style={{ border: '1px solid #ddd', padding: '5px 12px', borderRadius: '5px', fontSize: '0.9rem', color: '#555', backgroundColor: '#fff' }}>{equip}</span>
          ))}
        </div>
      </div>

      {/* Inquiry Form & Contact Section */}
      <div id="join" style={{ backgroundColor: '#212529', color: '#fff', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1000px',
