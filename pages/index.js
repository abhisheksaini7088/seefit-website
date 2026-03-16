import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ margin: 0, padding: 0, fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', backgroundColor: '#f8f9fa', color: '#212529' }}>
      <Head>
        <title>SEE FIT | Everyday is an opportunity</title>
      </Head>

      {/* Hero Section */}
      <div style={{ position: 'relative', height: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', backgroundColor: '#ffffff', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url("https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15, zIndex: 0 }}></div>
        <div style={{ position: 'relative', zIndex: 1, padding: '20px' }}>
          <h1 style={{ fontSize: '5rem', fontWeight: '900', letterSpacing: '2px', margin: '0', color: '#ff4500', textTransform: 'uppercase' }}>
            SEE FIT
          </h1>
          <p style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '10px', color: '#333' }}>
            Everyday is an opportunity
          </p>
          <p style={{ fontSize: '1.1rem', color: '#666', marginTop: '5px', fontWeight: '500' }}>
            Transforming lives since 15 Feb 2026 | 5+ Years Experience
          </p>
          <a href="#contact" style={{ display: 'inline-block', marginTop: '30px', padding: '15px 40px', fontSize: '1.2rem', fontWeight: 'bold', color: '#fff', backgroundColor: '#ff4500', textDecoration: 'none', borderRadius: '50px', textTransform: 'uppercase', letterSpacing: '1px', boxShadow: '0px 4px 15px rgba(255, 69, 0, 0.4)' }}>
            Join Now
          </a>
        </div>
      </div>

      {/* Timings & Team Banner */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', backgroundColor: '#212529', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <div style={{ margin: '10px' }}>🕒 <strong>Timings:</strong> 5 AM To 11 PM (Sunday Also Open)</div>
        <div style={{ margin: '10px' }}>👑 <strong>Owner:</strong> Shekhar</div>
        <div style={{ margin: '10px' }}>💪 <strong>Trainer:</strong> Abhishek (6398851797)</div>
      </div>

      {/* Mission & Services */}
      <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#ff4500', marginBottom: '40px', textTransform: 'uppercase' }}>Our Mission</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {['Personal Training', 'CrossFit', 'Group Training', 'Zumba & Yoga Classes', 'Custom Diet & Workout Plan', 'Fat Loss & Weight Gaining'].map((item, index) => (
            <div key={index} style={{ backgroundColor: '#fff', padding: '20px 30px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', fontSize: '1.2rem', fontWeight: 'bold', color: '#333', borderBottom: '4px solid #ff4500' }}>
              ✓ {item}
            </div>
          ))}
        </div>
      </div>

      {/* Membership Plans */}
      <div style={{ backgroundColor: '#e9ecef', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#ff4500', marginBottom: '40px', textTransform: 'uppercase' }}>Membership Plans</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
            {/* Plan Cards */}
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

      {/* Facilities & Amenities */}
      <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#ff4500', marginBottom: '30px', textAlign: 'center', textTransform: 'uppercase' }}>Premium Facilities</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
          {['Fully AC Occupied', 'Male & Female Changing Rooms', 'Locker/Rack Facility', 'Ample Parking Space', 'RO Water (Cold & Hot)', 'Supplements Available', 'UPI Payments Accepted'].map((facility, i) => (
            <span key={i} style={{ backgroundColor: '#e9ecef', padding: '10px 20px', borderRadius: '50px', fontSize: '1.1rem', fontWeight: '500', color: '#333' }}>⭐ {facility}</span>
          ))}
        </div>
      </div>

      {/* Equipment List */}
      <div style={{ backgroundColor: '#fff', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#ff4500', marginBottom: '20px', textTransform: 'uppercase' }}>Top Tier Equipment</h2>
          <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '40px' }}>1500+ KG Weights | Dedicated CrossFit Area</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {['Treadmill', 'Cross Trainer', 'Spin Bike', 'Wrist Raises', 'Multipress', 'Lat Pull Down', 'Seated Row', 'Pec-Dec', 'Squats Rack', 'Unique Deadlift Platform', 'Olympic Benches', 'Leg Press', 'Leg Curl', 'Calf Raises', 'Utility Bench', 'Adjustable & Flat Bench', 'Abductor', 'Cable Cross Station', 'Smith Machine'].map((equip, i) => (
              <span key={i} style={{ border: '1px solid #ccc', padding: '8px 15px', borderRadius: '5px', fontSize: '1rem', color: '#444' }}>{equip}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Contact & Footer */}
      <div id="contact" style={{ backgroundColor: '#212529', color: '#fff', padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#ff4500', marginBottom: '30px', textTransform: 'uppercase' }}>Visit Us Today</h2>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left', backgroundColor: '#343a40', padding: '30px', borderRadius: '15px' }}>
          <p style={{ fontSize: '1.2rem', margin: '10px 0' }}>📍 <strong>Address:</strong> 2nd floor Vohra Tower, Above Suvidha Store, Sudhowala, Dehradun</p>
          <p style={{ fontSize: '1.2rem', margin: '10px 0' }}>📞 <strong>Contact:</strong> 7906049106</p>
          <p style={{ fontSize: '1.2rem', margin: '10px 0' }}>💬 <strong>WhatsApp:</strong> <a href="https://wa.me/917906049106" style={{ color: '#25D366', textDecoration: 'none' }}>7906049106</a></p>
          <p style={{ fontSize: '1.2rem', margin: '10px 0' }}>✉️ <strong>Email:</strong> shekhar_saini2112@icloud.com</p>
          <p style={{ fontSize: '1.2rem', margin: '10px 0' }}>📱 <strong>Instagram:</strong> <a href="https://instagram.com/seefit21" style={{ color: '#E1306C', textDecoration: 'none' }}>@seefit21</a></p>
        </div>
        <p style={{ marginTop: '40px', color: '#888' }}>© 2026 SEE FIT Gym. All Rights Reserved.</p>
      </div>
    </div>
  );
}
