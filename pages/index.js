import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ margin: 0, padding: 0, fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', backgroundColor: '#f8f9fa', color: '#212529' }}>
      <Head>
        <title>SEE FIT Gym | Everyday is an opportunity</title>
      </Head>

      {/* Hero Section */}
      <div style={{ position: 'relative', height: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', backgroundColor: '#000', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url("https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25, zIndex: 0 }}></div>
        <div style={{ position: 'relative', zIndex: 1, padding: '20px' }}>
          <h1 style={{ fontSize: '5rem', fontWeight: '900', letterSpacing: '3px', margin: '0', color: '#ff4500', textTransform: 'uppercase', textShadow: '2px 2px 10px rgba(0,0,0,0.8)' }}>
            SEE FIT
          </h1>
          <p style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '10px', color: '#fff', textShadow: '1px 1px 5px rgba(0,0,0,0.8)' }}>
            Everyday is an opportunity
          </p>
          <p style={{ fontSize: '1.1rem', color: '#ccc', marginTop: '5px', fontWeight: '500' }}>
            Transforming lives since 15 Feb 2026 | 5+ Years Experience
          </p>
          
          <div style={{ marginTop: '30px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#join" style={{ padding: '15px 35px', fontSize: '1.2rem', fontWeight: 'bold', color: '#fff', backgroundColor: '#ff4500', textDecoration: 'none', borderRadius: '50px', textTransform: 'uppercase', boxShadow: '0px 4px 15px rgba(255, 69, 0, 0.4)' }}>
              Join The Tribe
            </a>
            {/* Direct WhatsApp Button */}
            <a href="https://wa.me/917906049106?text=Hi%20SEE%20FIT%20Gym!%20I%20want%20to%20know%20more%20about%20the%20membership." target="_blank" rel="noreferrer" style={{ padding: '15px 35px', fontSize: '1.2rem', fontWeight: 'bold', color: '#fff', backgroundColor: '#25D366', textDecoration: 'none', borderRadius: '50px', textTransform: 'uppercase', boxShadow: '0px 4px 15px rgba(37, 211, 102, 0.4)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Timings & Team Banner */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', backgroundColor: '#212529', color: '#fff', padding: '20px', textAlign: 'center', fontSize: '1.1rem' }}>
        <div style={{ margin: '10px' }}>🕒 <strong>Timings:</strong> 5 AM To 11 PM (Sunday Also Open)</div>
        <div style={{ margin: '10px' }}>👑 <strong>Owner:</strong> Shekhar</div>
        <div style={{ margin: '10px' }}>💪 <strong>Trainer:</strong> Abhishek (6398851797)</div>
      </div>

      {/* AUTOPLAY VIDEO SECTION */}
      <div style={{ backgroundColor: '#111', padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#ff4500', marginBottom: '10px', textTransform: 'uppercase' }}>Experience The Vibe</h2>
        <p style={{ color: '#aaa', marginBottom: '30px', fontSize: '1.1rem' }}>Take a quick tour of our premium facility.</p>
        <div style={{ maxWidth: '900px', margin: '0 auto', border: '5px solid #333', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
          {/* Note: Autoplay requires 'muted' to work on Chrome/Safari */}
          <video 
            src="https://www.w3schools.com/html/mov_bbb.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            style={{ width: '100%', display: 'block' }}
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <p style={{ color: '#555', fontSize: '0.9rem', marginTop: '10px' }}>(Sample Video - Ise hum baad mein tumhari gym video se replace karenge)</p>
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

      {/* IMAGE GALLERY SECTION */}
      <div style={{ backgroundColor: '#fff', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#ff4500', marginBottom: '40px', textTransform: 'uppercase' }}>Gym Gallery</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80" alt="Gym weights" style={{ width: '350px', height: '250px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} />
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80" alt="Gym training" style={{ width: '350px', height: '250px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} />
            <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80" alt="Fitness" style={{ width: '350px', height: '250px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </div>

      {/* Membership Plans */}
      <div style={{ backgroundColor: '#e9ecef', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#ff4500', marginBottom: '40px', textTransform: 'uppercase' }}>Membership Plans</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
            <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '15px', width: '250px', boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontSize: '1.8rem', margin: '0 0 15px 0' }}>3 Months</h3>
              <p style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ff4500', margin: '0 0 20px 0' }}>₹3800</p>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '15px', width: '250px', boxShadow: '0 10px 20px rgba(0,0,0,0.08)', border: '2px solid #ff4500', position: 'relative', transform: 'scale(1.05)' }}>
              <div style={{ backgroundColor: '#ff4500', color: '#fff', padding: '5px 15px', borderRadius: '50px', fontSize: '0.9rem', position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', fontWeight: 'bold' }}>POPULAR</div>
              <h3 style={{ fontSize: '1.8rem', margin: '0 0 15px 0', marginTop: '10px' }}>6 Months</h3>
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
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>
          
          {/* Contact Form */}
          <div style={{ flex: '1 1 400px', backgroundColor: '#343a40', padding: '30px', borderRadius: '15px' }}>
            <h3 style={{ fontSize: '2rem', color: '#ff4500', margin: '0 0 20px 0' }}>Join The Tribe!</h3>
            <p style={{ marginBottom: '20px', color: '#ccc' }}>Fill out the form and our team will get back to you.</p>
            <form action="mailto:shekhar_saini2112@icloud.com" method="post" encType="text/plain" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" name="Name" placeholder="Your Name" required style={{ padding: '12px', borderRadius: '5px', border: 'none', fontSize: '1rem' }} />
              <input type="tel" name="Phone" placeholder="Your Phone Number" required style={{ padding: '12px', borderRadius: '5px', border: 'none', fontSize: '1rem' }} />
              <select name="Goal" style={{ padding: '12px', borderRadius: '5px', border: 'none', fontSize: '1rem', color: '#555' }}>
                <option value="General Fitness">General Fitness</option>
                <option value="Weight Loss">Weight Loss</option>
                <option value="Muscle Gain">Muscle Gain</option>
                <option value="Personal Training">Personal Training</option>
              </select>
              <button type="submit" style={{ padding: '15px', fontSize: '1.1rem', fontWeight: 'bold', color: '#fff', backgroundColor: '#ff4500', border: 'none', borderRadius: '5px', cursor: 'pointer', textTransform: 'uppercase' }}>
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Contact Details & Map/WhatsApp Buttons */}
          <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '2rem', color: '#fff', margin: '0 0 20px 0' }}>Visit Us</h3>
            <p style={{ fontSize: '1.2rem', margin: '10px 0' }}>📍 <strong>Address:</strong> 2nd floor Vohra Tower, Above Suvidha Store, Sudhowala, Dehradun</p>
            <p style={{ fontSize: '1.2rem', margin: '10px 0' }}>📞 <strong>Contact:</strong> 7906049106</p>
            <p style={{ fontSize: '1.2rem', margin: '10px 0' }}>📱 <strong>Instagram:</strong> <a href="https://instagram.com/seefit21" target="_blank" rel="noreferrer" style={{ color: '#E1306C', textDecoration: 'none' }}>@seefit21</a></p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
              {/* Google Maps Button */}
              <a href="https://www.google.com/maps/search/?api=1&query=Vohra+Tower,+Above+Suvidha+Store,+Sudhowala,+Dehradun" target="_blank" rel="noreferrer" style={{ padding: '12px 20px', fontSize: '1.1rem', fontWeight: 'bold', color: '#212529', backgroundColor: '#fff', textDecoration: 'none', borderRadius: '5px', textAlign: 'center' }}>
                🌍 Open in Google Maps
              </a>
              
              {/* WhatsApp Button */}
              <a href="https://wa.me/917906049106?text=Hi%20SEE%20FIT%20Gym!%20I%20want%20to%20know%20more%20about%20the%20membership." target="_blank" rel="noreferrer" style={{ padding: '12px 20px', fontSize: '1.1rem', fontWeight: 'bold', color: '#fff', backgroundColor: '#25D366', textDecoration: 'none', borderRadius: '5px', textAlign: 'center' }}>
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>

      <footer style={{ padding: '20px', textAlign: 'center', backgroundColor: '#111', color: '#666' }}>
        <p style={{ margin: 0 }}>© 2026 SEE FIT Gym. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
