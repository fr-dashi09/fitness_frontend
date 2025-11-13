import "./Home.css";
import Plasma from "../components/Aurora";

const Home = () => {
  return (
    <section className="home-page-wrapper">
      <Plasma
        color="#7CFF67"        // GREEN BACKGROUND
        speed={1}
        direction="forward"
        scale={1}
        opacity={0.9}
        mouseInteractive={true}
      />

      <main className="home">
        <section className="hero">
          <div className="hero-text">
            <h1>Transform Your Body With AI-Powered Fitness</h1>
            <p className="subtitle">
              Get personalized workout plans, nutrition guidance, and 24/7 AI
              coaching tailored to your goals and lifestyle.
            </p>

            <div className="hero-buttons">
              <a href="/signup" className="btn green">
                Start Your Journey
              </a>
              <a href="/signin" className="btn green-outline">
                FitAI Coach
              </a>
            </div>

            <p className="note">
              ★ Take our FREE quiz to get your personalized fitness plan!
            </p>
          </div>

          <div className="hero-visual">
  <div className="app-preview">
    <img src="/src/assets/robot.svg" alt="AI Fitness Robot" className="robot-floating" />
  </div>
</div>
        </section>
      </main>
    </section>
  );
};

export default Home;
