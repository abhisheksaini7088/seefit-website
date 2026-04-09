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
    
    // WhatsApp URL banana with correct encoding
    const whatsappUrl = `https://wa.me/917906049106?text=${encodeURIComponent(message)}`;
    
    // Naye tab me WhatsApp open karna
    window.open(whatsappUrl, '_blank');
  };

  // Reusable character styling to replicate the heavy outline from image
  const logoCharStyle = {
    fontWeight: '900',
    fontSize: '6rem', // Visual scale match original image
    textTransform: 'uppercase',
    // Heavy Black Outline effect via multiple text-shadows
    textShadow: `
      -2px -2px 0 #000,
       2px -2px 0 #000,
      -2px 2px 0 #000,
       2px 2px 0 #000
    `, 
    display: 'inline-block',
    marginRight: '0.05em' // Minimal space between letters
  };

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', backgroundColor: '#f8f9fa', color: '#212529' }}>
      <Head>
        <title>SEE FIT Gym | Join our community</title>
        {/* SEO and meta tags for better reach */}
        <meta name="description" content="Join SEE FIT Gym in Sudhowala, Dehradun. 24/7 access, certified trainers, personalized plans, functional fitness, and premium equipment. Transforming lives since 2026." />
        <meta name="keywords" content="see fit gym dehradun, sudhowala gym, fitness tribe dehradun, personal training dehradun, crossfit gym dehradun" />
        
        {/* Favicon add kiya hai jisse tab par logo dikhega */}
        <link rel="icon" href="/see fit .jpeg" />
        {/* Load needed heavy font (Poppins 900) for a cleaner match to image */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap" rel="stylesheet" />
      </Head>

      {/* Hero Section */}
      <div style={{ position: 'relative', height: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', backgroundColor: '#000', overflow: 'hidden' }}>
        {/* Tumhari background image lagayi hai */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url("/IMG-20260227-WA0000.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3, zIndex: 0 }}></div>
        <div style={{ position: 'relative', zIndex: 1, padding: '20px', maxWidth: '800px' }}>
          
          {/* Yahan Image logo remove karke Text Logo text-only me replicate kiya gaya hai */}
          <div style={{
            fontFamily: '"Poppins", sans-serif', // Use the closest heavy rounded font
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '10px',
            maxWidth: '100%',
          }}>
            {/* Individually colored and styled spans for S, F in Green and others in White */}
            <span style={{ ...logoCharStyle, color: '#99cc00' }}>S</span>
            <span style={{ ...logoCharStyle, color: '#ffffff' }}>E</span>
            <span style={{ ...logoCharStyle, color: '#ffffff' }}>E</span>
            {/* Clean non-collapsing space */}
            &nbsp;
            <span style={{ ...logoCharStyle, color: '#99cc00' }}>F</span>
            <span style={{ ...logoCharStyle, color: '#ffffff' }}>I</span>
            <span style={{ ...logoCharStyle, color: '#ffffff', marginRight: 0 }}>T</span>
          </div>
          
          {/* Nayi tagline */}
          <p style={{ fontSize: '1.4rem', fontWeight: 'bold', marginTop: '10px', color: '#fff', lineHeight: '1.4' }}>
            Join our community and get a personalized plan that works the way you want
          </p>

          {/* WhatsApp Button with Pre-filled Message */}
          <a href="https://wa.me/917906049106?text=Hi%20SEE%20FIT%20Gym,%20I%20am%20interested%20in%20joining%20and%20would%20like%20to%20know%20more." target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: '15px', padding: '10px 25px', fontSize: '1.1rem', fontWeight: 'bold', color: '#fff', backgroundColor: '#25D366', textDecoration: 'none', borderRadius: '50px', boxShadow: '0px 4px 10px rgba(37, 211, 102, 0.4)', transition: 'transform 0.2s' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: '20px', height: '20px', fill: 'currentColor', marginRight: '8px' }}>
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 413.6c-33.6 0-66.5-9-95.2-26.1l-6.8-4-70.8 18.6 18.9-69-4.4-7c-18.8-30.2-28.7-65.1-28.7-101.4 0-103.5 84.3-187.8 187.9-187.8 50.2 0 97.3 19.6 132.8 55.1 35.5 35.5 55.1 82.6 55.1 132.9 0 103.4-84.3 187.8-187.6 187.8zM326.6 288.7c-5.6-2.8-33.3-16.4-38.5-18.3-5.2-1.9-9-2.8-12.8 2.8-3.8 5.6-14.6 18.3-17.9 22-3.3 3.8-6.6 4.2-12.2 1.4-5.6-2.8-23.8-8.8-45.3-27.9-16.7-14.9-28-33.3-31.3-38.9-3.3-5.6-.4-8.7 2.4-11.5 2.5-2.5 5.6-6.6 8.5-9.9 2.8-3.3 3.8-5.6 5.6-9.4 1.9-3.8.9-7.1-.5-9.9-1.4-2.8-12.8-30.9-17.6-42.3-4.6-11.1-9.3-9.6-12.8-9.8-3.3-.2-7.1-.2-10.8-.2-3.8 0-9.9 1.4-15.1 7.1-5.2 5.6-19.8 19.3-19.8 47.1 0 27.8 20.3 54.7 23.1 58.5 2.8 3.8 39.8 60.8 96.4 85.3 13.5 5.8 24 9.3 32.2 11.9 13.6 4.3 26 3.7 35.8 2.2 11-1.7 33.3-13.6 38-26.8 4.7-13.2 4.7-24.5 3.3-26.8-1.4-2.4-5.2-3.8-10.8-6.6z"/>
            </svg>
            Chat on WhatsApp
          </a>

          <p style={{ fontSize: '1.1rem', color: '#ccc', marginTop: '15px', fontWeight: '500' }}>
            Transforming lives since 15 Feb 2026 | 5+ Years Experience
          </p>
        </div>
      </div>

      {/* Timings & Team Banner - Updated for better mobile view */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: '#212529', color: '#fff', padding: '20px 10px', textAlign: 'center', gap: '20px' }}>
        <div style={{ flex: '1 1 300px' }}>🕒 <strong>Timings:</strong> 5 AM To 11 PM (No days off - open even on sundays!)</div>
        <div style={{ flex: '1 1 300px' }}>🏅 <strong>Guided by certified trainers</strong></div>
        <div style={{ flex: '1 1 300px' }}>💪 <strong>One-on-one personalized training available</strong></div>
      </div>

      {/* Gym Vibe Video Section */}
      <div style={{ backgroundColor: '#111', padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#ff4500', marginBottom: '30px', textTransform: 'uppercase' }}>Experience The Vibe</h2>
        <video controls autoPlay muted loop style={{ maxWidth: '100%', width: '800px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(255, 69, 0, 0.2)', border: '2px solid #333' }}>
          {/* Tumhara video link kiya hai */}
          <source src="/VID-20260227-WA0005.mp4" type="video/mp4" />
          Your browser does not support the video.
        </video>
      </div>

      {/* Gym Gallery Section */}
      <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#ff4500', marginBottom: '40px', textTransform: 'uppercase' }}>Our Space</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {/* Tumhari 3 baaki photos lagayi hain */}
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
