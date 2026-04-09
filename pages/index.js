import Head from 'next/head';

export default function Home() {
  
  // Ye function form submit hone par WhatsApp par data bhejega
  const sendToWhatsApp = (e) => {
    e.preventDefault(); // Page refresh hone se rokne ke liye
    
    // Form se data nikal rahe hain
    const formData = new FormData(e.target);
    const name = formData.get('Name');
    const phone = formData.get('Phone');
    const goal = formData.get('Goal');

    // WhatsApp par bhejne wala message format kar rahe hain
    const message = `Hello SEE FIT Gym! 💪\nI want to join the tribe. Here are my details:\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Goal:* ${goal}`;
    
    // WhatsApp URL banana
    const whatsappUrl = `https://wa.me/917906049106?text=${encodeURIComponent(message)}`;
    
    // Naye tab me WhatsApp open karna
    window.open(whatsappUrl, '_blank');
  };

  // Text logo ke liye custom CSS styles
  const letterStyle = {
    fontWeight: '900',
    fontFamily: 'Impact, "Arial Black", "Segoe UI Black", sans-serif',
    WebkitTextStroke: '1px #000',
    textShadow: '3px 4px 0px rgba(0,0,0,1)',
    fontSize: 'clamp(4rem, 15vw, 6rem)',
    lineHeight: '1',
    letterSpacing: '2px',
  };

  // Colors
  const seeFitGreen = '#C6E815';
  
  const greenLetter = { ...letterStyle, color: seeFitGreen }; 
  const whiteLetter = { ...letterStyle, color: '#FFFFFF' };

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', backgroundColor: '#f8f9fa', color: '#212529' }}>
      <Head>
        <title>SEE FIT Gym | Join our community</title>
        <link rel="icon" href="/see fit .jpeg" />
      </Head>

      {/* Hero Section */}
      <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', backgroundColor: '#000', overflow: 'hidden', padding: '60px 20px' }}>
        {/* Background Image */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url("/IMG-20260227-WA0000.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.4, zIndex: 0 }}></div>
        
        <div style={{ position: 'relative', zIndex: 1, padding: '20px', maxWidth: '900px', width: '100%' }}>
          
          {/* Styled Text Logo */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex' }}>
              <span style={greenLetter}>S</span>
              <span style={whiteLetter}>E</span>
              <span style={whiteLetter}>E</span>
            </div>
            <div style={{ display: 'flex', marginLeft: '10px' }}>
              <span style={greenLetter}>F</span>
              <span style={whiteLetter}>I</span>
              <span style={whiteLetter}>T</span>
            </div>
          </div>
          
          {/* UPDATED SECTION: Why Us & The First Step */}
          <div style={{ margin: '30px 0', padding: '10px' }}>
            
            {/* Why us? - Changed to SEE FIT color */}
            <h2 style={{ fontSize: '2.5rem', color: seeFitGreen, textShadow: '3px 3px 5px #000000', marginBottom: '20px', textTransform: 'uppercase', fontWeight: '900', letterSpacing: '1.5px' }}>
              Why us?
            </h2>
            
            {/* Paragraph - Made bolder, slightly larger, and added stronger drop shadow */}
            <p style={{ fontSize: '1.2rem', color: '#ffffff', textShadow: '2px 2px 6px #000000, 0px 0px 10px rgba(0,0,0,0.8)', lineHeight: '1.6', marginBottom: '35px', maxWidth: '750px', margin: '0 auto 35px auto', fontWeight: '700', letterSpacing: '0.5px' }}>
              At SEE FIT Fitness Dehradun, the support is real and it starts the moment we meet. Our trainers don&apos;t have one plan that fits everyone, they develop a plan that fits you - a total fitness experience designed around your abilities, your body, and your goals. Your plan will contain a 360 approach to your health.
            </p>
            
            {/* The first step? - Matched exactly with SEE FIT color & boldness */}
            <h3 style={{ fontSize: '1.8rem', color: seeFitGreen, textShadow: '2px 2px 5px #000000', marginBottom: '15px', marginTop: '20px', fontWeight: '900', letterSpacing: '1px' }}>
              The first step?
            </h3>
            
            <p style={{ fontSize: '1.4rem', fontWeight: '900', color: '#fff', textShadow: '2px 2px 6px #000000', lineHeight: '1.4' }}>
              Join our community and get a personalized plan that works the way you want
            </p>
          </div>

          {/* WhatsApp Button */}
          <a href="https://wa.me/917906049106?text=Hi%20SEE%20FIT%20Gym,%20I%20am%20interested%20in%20joining%20and%20would%20like%20to%20know%20more." target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: '15px', padding: '12px 30px', fontSize: '1.2rem', fontWeight: 'bold', color: '#000', backgroundColor: seeFitGreen, textDecoration: 'none', borderRadius: '50px', boxShadow: '0px 4px 15px rgba(198, 232, 21, 0.5)', transition: 'transform 0.2s' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: '24px', height: '24px', fill: 'currentColor', marginRight: '8px' }}>
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 413.6c-33.6 0-66.5-9-95.2-26.1l-6.8-4-70.8 18.6 18.9-69-4.4-7c-18.8-30.2-28.7-65.1-28.7-101.4 0-103.5 84.3-187.8 187.9-187.8 50.2 0 97.3 19.6 132.8 55.1 35.5 35.5 55.1 82.6 55.1 132.9 0 103.4-84.3 187.8-187.6 187.8zM326.6 288.7c-5.6-2.8-33.3-16.4-38.5-18.3-5.2-1.9-9-2.8-12.8 2.8-3.8 5.6-14.6 18.3-17.9 22-3.3 3.8-6.6 4.2-12.2 1.4-5.6-2.8-23.8-8.8-45.3-27.9-16.7-14.9-28-33.3-31.3-38.9-3.3-5.6-.4-8.7 2.4-11.5 2.5-2.5 5.6-6.6 8.5-9.9 2.8-3.3 3.8-5.6 5.6-9.4 1.9-3.8.9-7.1-.5-9.9-1.4-2.8-12.8-30.9-17.6-42.3-4.6-11.1-9.3-9.6-12.8-9.8-3.3-.2-7.1-.2-10.8-.2-3.8 0-9.9 1.4-15.1 7.1-5.2 5.6-19.8 19.3-19.8 47.1 0 27.8 20.3 54.7 23.1 58.5 2.8 3.8 39.8 60.8 96.4 85.3 13.5 5.8 24 9.3 32.2 11.9 13.6 4.3 26 3.7 35.8 2.2 11-1.7 33.3-13.6 38-26.8 4.7-13.2 4.7-24.5 3.3-26.8-1.4-2.4-5.2-3.8-10.8-6.6z"/>
            </svg>
            Chat on WhatsApp
          </a>

          <p style={{ fontSize: '1rem', color: '#ccc', marginTop: '20px', fontWeight: '500' }}>
            Transforming lives since 15 Feb 2026 | 5+ Years Experience
          </p>
        </div>
      </div>

      {/* Timings & Team Banner */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: '#212529', color: '#fff', padding: '20px 10px', textAlign: 'center', gap: '20px' }}>
        <div style={{ flex: '1 1 300px' }}>🕒 <strong>Timings:</strong> 5 AM To 11 PM (No days off - open even on sundays!)</div>
        <div style={{ flex: '1 1 300px' }}>🏅 <strong>Guided by certified trainers</strong></div>
        <div style={{ flex: '1 1 300px' }}>💪 <strong>One-on-one personalized training available</strong></div>
      </div>

      {/* Gym Vibe Video Section */}
      <div style={{ backgroundColor: '#111', padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#ff4500', marginBottom: '30px', textTransform: 'uppercase' }}>Experience The Vibe</h2>
        <video controls autoPlay muted loop style={{ maxWidth: '100%', width: '800px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(255, 69, 0, 0.2)', border: '2px solid #333' }}>
          <source src="/VID-20260227-WA0005.mp4" type="video/mp4" />
          Your browser does not support the video.
        </video>
      </div>

      {/* Gym Gallery Section */}
      <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#ff4500', marginBottom: '40px', textTransform: 'uppercase' }}>Our Space</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          <img src="/IMG-20260227-WA0002.jpg" alt="SEE FIT Space 1" style={{ width: '350px', height: '250px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} />
          <img src="/IMG-20260227-WA0003.jpg" alt="SEE FIT Space 2" style={{ width: '350px', height: '250px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} />
          <img src="/IMG-20260227-WA0004.jpg" alt="SEE FIT Space 3" style={{ width: '350px', height: '250px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} />
        </div>
      </div>

      {/* Membership Plans */}
      <div style={{ padding: '60px 20px', backgroundColor: '#e9ecef' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#ff4500', marginBottom: '10px', textTransform: 'uppercase' }}>Membership Plans</h2>
          
          {/* NEW LINE ADDED HERE */}
          <p style={{ fontSize: '1.4rem', color: seeFitGreen, fontWeight: '900', marginBottom: '40px', textTransform: 'uppercase', letterSpacing: '1px', textShadow: '2px 2px 0px #000000' }}>
            Strengthen everything from calves to confidence
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
            
            {/* 6 Months Plan */}
            <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '15px', width: '250px', boxShadow: '0 10px 20px rgba(0,0,0,0.08)', border: '2px solid #ff4500' }}>
              <div style={{ backgroundColor: '#ff4500', color: '#fff', padding: '5px', borderRadius: '5px', fontSize: '0.9rem', marginBottom: '15px', display: 'inline-block', fontWeight: 'bold' }}>POPULAR</div>
              <h3 style={{ fontSize: '1.8rem', margin: '0 0 15px 0' }}>6 Months</h3>
              <p style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ff4500', margin: '0 0 20px 0' }}>₹6000</p>
            </div>
            
            {/* 13 Months Plan */}
            <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '15px', width: '250px', boxShadow: '0 10px 20px rgba(0,0,0,0.08)' }}>
              <h3 style={{ fontSize: '1.8rem', margin: '0 0 15px 0' }}>13 Months</h3>
              <p style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ff4500', margin: '0 0 20px 0' }}>₹10000</p>
            </div>
            
            {/* Personal Training */}
            <div style={{ backgroundColor: '#111', color: '#fff', padding: '40px', borderRadius: '15px', width: '250px', boxShadow: '0 10px 20px rgba(0,0,0,0.15)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '1.8rem', margin: '0 0 15px 0' }}>Personal Training</h3>
              <p style={{ margin: '0 0 20px 0', fontSize: '1rem', color: '#ccc', lineHeight: '1.4' }}>Customized plans tailored for your specific fitness goals.</p>
              
              <a href="https://wa.me/917906049106?text=Hi%20SEE%20FIT%20Gym,%20I%20want%20to%20know%20the%20details%20and%20pricing%20for%20Personal%20Training." target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '10px 20px', fontSize: '1rem', fontWeight: 'bold', color: '#fff', backgroundColor: '#25D366', textDecoration: 'none', borderRadius: '5px', transition: 'transform 0.2s' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: '18px', height: '18px', fill: 'currentColor', marginRight: '8px' }}>
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 413.6c-33.6 0-66.5-9-95.2-26.1l-6.8-4-70.8 18.6 18.9-69-4.4-7c-18.8-30.2-28.7-65.1-28.7-101.4 0-103.5 84.3-187.8 187.9-187.8 50.2 0 97.3 19.6 132.8 55.1 35.5 35.5 55.1 82.6 55.1 132.9 0 103.4-84.3 187.8-187.6 187.8zM326.6 288.7c-5.6-2.8-33.3-16.4-38.5-18.3-5.2-1.9-9-2.8-12.8 2.8-3.8 5.6-14.6 18.3-17.9 22-3.3 3.8-6.6 4.2-12.2 1.4-5.6-2.8-23.8-8.8-45.3-27.9-16.7-14.9-28-33.3-31.3-38.9-3.3-5.6-.4-8.7 2.4-11.5 2.5-2.5 5.6-6.6 8.5-9.9 2.8-3.3 3.8-5.6 5.6-9.4 1.9-3.8.9-7.1-.5-9.9-1.4-2.8-12.8-30.9-17.6-42.3-4.6-11.1-9.3-9.6-12.8-9.8-3.3-.2-7.1-.2-10.8-.2-3.8 0-9.9 1.4-15.1 7.1-5.2 5.6-19.8 19.3-19.8 47.1 0 27.8 20.3 54.7 23.1 58.5 2.8 3.8 39.8 60.8 96.4 85.3 13.5 5.8 24 9.3 32.2 11.9 13.6 4.3 26 3.7 35.8 2.2 11-1.7 33.3-13.6 38-26.8 4.7-13.2 4.7-24.5 3.3-26.8-1.4-2.4-5.2-3.8-10.8-6.6z"/>
                </svg>
                Ask on WhatsApp
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Mission & Services */}
      <div style={{ padding: '60px 20px' }}>
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
          
          <div style={{ flex: '1 1 400px', backgroundColor: '#343a40', padding: '30px', borderRadius: '15px' }}>
            <h3 style={{ fontSize: '2rem', color: '#ff4500', margin: '0 0 20px 0' }}>Join The Tribe!</h3>
            <p style={{ marginBottom: '20px', color: '#ccc' }}>Fill out the form and our team will get back to you.</p>
            <form onSubmit={sendToWhatsApp} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
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

          <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '2rem', color: '#fff', margin: '0 0 20px 0' }}>Visit Us</h3>
            <p style={{ fontSize: '1.2rem', margin: '10px 0' }}>📍 <strong>Address:</strong> 2nd floor Vohra Tower, Above Suvidha Store, Sudhowala, Dehradun</p>
            <p style={{ fontSize: '1.2rem', margin: '10px 0' }}>📞 <strong>Contact:</strong> 7906049106</p>
            <p style={{ fontSize: '1.2rem', margin: '10px 0' }}>📱 <strong>Instagram:</strong> <a href="https://instagram.com/seefit21" style={{ color: '#E1306C', textDecoration: 'none' }}>@seefit21</a></p>
            
            <a href="https://maps.app.goo.gl/hX9jFfbAQRs5W5eu7?g_st=aw" target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '20px', padding: '12px 20px', fontSize: '1.1rem', fontWeight: 'bold', color: '#212529', backgroundColor: '#fff', textDecoration: 'none', borderRadius: '5px', textAlign: 'center' }}>
              🌍 Open in Google Maps
            </a>
          </div>

        </div>
      </div>

      <footer style={{ padding: '20px', textAlign: 'center', backgroundColor: '#111', color: '#666' }}>
        <p style={{ margin: 0 }}>© 2026 SEE FIT Gym. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
