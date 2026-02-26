import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>See FIT Gym | Best Gym in Dehradun</title>
        <meta name="description" content="See FIT Gym in Sudhowala, Dehradun. Personal Training, CrossFit, Zumba, Modern Equipment, Fully AC Gym." />
      </Head>

      <div style={{ fontFamily: "Arial", backgroundColor: "#0d0d0d", color: "white" }}>

        {/* HERO VIDEO */}
        <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
          <video autoPlay loop muted style={{ width: "100%", height: "100%", objectFit: "cover" }}>
            <source src="/video1.mp4" type="video/mp4" />
          </video>

          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center"
          }}>
            <h1 style={{ fontSize: "60px", color: "#ff0000" }}>SEE FIT</h1>
            <p style={{ fontSize: "22px" }}>Everyday is an opportunity</p>
            <p>Opened 15 Feb 2026</p>
          </div>
        </section>

        {/* ABOUT */}
        <section style={{ padding: "60px 20px", textAlign: "center" }}>
          <h2 style={{ color: "#ff0000" }}>About Us</h2>
          <p>Owner: Shekhar</p>
          <p>Trainer: Abhishek (5+ Years Experience) - 6398851797</p>
          <p>Open Daily: 5AM – 11PM (Sunday Open)</p>
        </section>

        {/* SERVICES */}
        <section style={{ padding: "60px 20px", backgroundColor: "#1a1a1a", textAlign: "center" }}>
          <h2 style={{ color: "#ff0000" }}>Our Services</h2>
          <p>Personal Training | CrossFit | Group Training</p>
          <p>Zumba & Yoga | Custom Workout Plan</p>
          <p>Fat Loss & Weight Gain</p>
        </section>

        {/* MEMBERSHIP */}
        <section style={{ padding: "60px 20px", textAlign: "center" }}>
          <h2 style={{ color: "#ff0000" }}>Membership Plans</h2>
          <p>3 Months – ₹3800</p>
          <p>6 Months – ₹6000</p>
          <p>13 Months – ₹9000</p>
          <p>Personal Training – ₹6500 + Gym Fee</p>
        </section>

        {/* EQUIPMENT */}
        <section style={{ padding: "60px 20px", backgroundColor: "#1a1a1a", textAlign: "center" }}>
          <h2 style={{ color: "#ff0000" }}>Equipment</h2>
          <p>Treadmill | Cross Trainer | Spin Bike | Smith Machine</p>
          <p>Multipress | Lat Pull Down | Seated Row</p>
          <p>Squat Rack | Deadlift Platform | Olympic Benches</p>
          <p>1500+ KG Weights | Cable Cross | Leg Press</p>
        </section>

        {/* GALLERY */}
        <section style={{ padding: "60px 20px", textAlign: "center" }}>
          <h2 style={{ color: "#ff0000" }}>Gallery</h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "15px" }}>
            {[...Array(10)].map((_, i) => (
              <img
                key={i}
                src={`/gym${i+1}.jpg`}
                alt="gym"
                style={{ width: "300px", height: "200px", objectFit: "cover" }}
              />
            ))}
          </div>
        </section>

        {/* VIDEOS */}
        <section style={{ padding: "60px 20px", backgroundColor: "#1a1a1a", textAlign: "center" }}>
          <h2 style={{ color: "#ff0000" }}>Workout Videos</h2>
          {[1,2,3].map((num) => (
            <video key={num} controls style={{ width: "80%", margin: "20px 0" }}>
              <source src={`/video${num}.mp4`} type="video/mp4" />
            </video>
          ))}
        </section>

        {/* WHATSAPP MEMBERSHIP FORM */}
        <section style={{ padding: "60px 20px", textAlign: "center" }}>
          <h2 style={{ color: "#ff0000" }}>Join See FIT</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.name.value;
              const phone = e.target.phone.value;
              const plan = e.target.plan.value;

              const message = `Hi See FIT, I want to join.\nName: ${name}\nPhone: ${phone}\nPlan: ${plan}`;
              const url = `https://wa.me/917906049106?text=${encodeURIComponent(message)}`;
              window.open(url, "_blank");
            }}
            style={{ display: "flex", flexDirection: "column", gap: "15px", maxWidth: "400px", margin: "auto" }}
          >
            <input name="name" placeholder="Your Name" required style={{ padding: "10px" }} />
            <input name="phone" placeholder="Your Phone" required style={{ padding: "10px" }} />
            <select name="plan" required style={{ padding: "10px" }}>
              <option value="">Select Plan</option>
              <option>3 Months – ₹3800</option>
              <option>6 Months – ₹6000</option>
              <option>13 Months – ₹9000</option>
              <option>Personal Training – ₹6500 + Gym Fee</option>
            </select>
            <button type="submit" style={{ padding: "12px", backgroundColor: "#25D366", color: "white", border: "none" }}>
              Join via WhatsApp
            </button>
          </form>
        </section>

        {/* GOOGLE MAP */}
        <section style={{ padding: "60px 20px", textAlign: "center" }}>
          <h2 style={{ color: "#ff0000" }}>Our Location</h2>
          <iframe
            src="PASTE_GOOGLE_MAP_EMBED_LINK_HERE"
            width="100%"
            height="300"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>
        </section>

        {/* CONTACT */}
        <section style={{ padding: "60px 20px", backgroundColor: "#1a1a1a", textAlign: "center" }}>
          <h2 style={{ color: "#ff0000" }}>Contact</h2>
          <p>📍 2nd Floor Vohra Tower, Above Suvidha Store, Sudhowala, Dehradun</p>
          <p>📞 7906049106</p>
          <p>📧 shekhar_saini2112@icloud.com</p>
          <p>Instagram: @seefit21</p>
        </section>

        {/* FLOAT WHATSAPP */}
        <a
          href="https://wa.me/917906049106"
          target="_blank"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#25D366",
            color: "white",
            padding: "15px",
            borderRadius: "50px",
            textDecoration: "none"
          }}
        >
          WhatsApp
        </a>

        <footer style={{ padding: "20px", textAlign: "center", backgroundColor: "black" }}>
          © 2026 SEE FIT Gym
        </footer>

      </div>
    </>
  );
}
