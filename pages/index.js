import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif', backgroundColor: '#0a0a0a', color: '#ffffff', minHeight: '100vh' }}>
      <Head>
        <title>SEE FIT Gym</title>
      </Head>

      {/* Hero Section - First Screen */}
      <div style={{ position: 'relative', height: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden' }}>
        
        {/* Background Image (Cinematic Gym Photo) */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3, zIndex: 0 }}></div>

        {/* Main Gym Content */}
        <div style={{ position: 'relative', zIndex: 1, padding: '20px' }}>
          <h1 style={{ fontSize: '5rem', fontWeight: '900', letterSpacing: '5px', margin: '0', color: '#ff4d4d', textShadow: '2px 2px 20px rgba(255, 77, 77, 0.6)', textTransform: 'uppercase' }}>
            SEE FIT
          </h1>
          <p style={{ fontSize: '1.5rem', fontWeight: '300', marginTop: '10px', letterSpacing: '3px', color: '#e0e0e0' }}>
            Everyday is an opportunity
          </p>
          <p style={{ fontSize: '1rem', color: '#888888', marginTop: '5px' }}>
            Opened 15 Feb 2026
          </p>
          
          <button style={{ marginTop: '40px', padding: '15px 40px', fontSize: '1.2rem', fontWeight: 'bold', color: '#fff', backgroundColor: '#ff4d4d', border: 'none', borderRadius: '4px', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '2px', boxShadow: '0px 4px 15px rgba(255, 77, 77, 0.4)' }}>
            Join the Tribe
          </button>
        </div>
      </div>

      {/* Contact Section */}
      <div style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#111111' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#ff4d4d', marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '2px' }}>
          Contact Us
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '1.2rem', color: '#cccccc', maxWidth: '600px', margin: '0 auto', textAlign: 'left', backgroundColor: '#1a1a1a', padding: '30px', borderRadius: '10px', border: '1px solid #333' }}>
          <p style={{ margin: 0 }}>📍 <strong>Address:</strong> 2nd Floor Vohra Tower, Above Suvidha Store, Sudhowala</p>
          <p style={{ margin: 0 }}>📞 <strong>Phone:</strong> 7906049106</p>
          <p style={{ margin: 0 }}>✉️ <strong>Email:</strong> shekhar_saini2112@icloud.com</p>
          <p style={{ margin: 0 }}>📱 <strong>Instagram:</strong> @seefit21</p>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ padding: '20px', textAlign: 'center', backgroundColor: '#050505', color: '#555555', borderTop: '1px solid #222' }}>
        <p style={{ margin: 0 }}>© 2026 SEE FIT Gym. All rights reserved.</p>
      </footer>
    </div>
  );
}
