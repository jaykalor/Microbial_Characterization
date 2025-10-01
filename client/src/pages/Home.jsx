import React from "react";
import Chatbot from "../components/Chatbot";  // Import Chatbot component

export const Home = () => {
    return (
      <main className="home-page">
        <section className="section-home">
          <div className="container grid grid-two-cols">
            <div className="home-content">
              <p>
              Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.
              Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment.
                    However, some will become seriously ill and require medical attention.
                    Older people and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, or cancer are more likely to develop serious illness.
                    Anyone can get sick with COVID-19 and become seriously ill or die at any age. 
              </p>
              <div className="btn-group">
                <a href="/micro-organism">
                  <button className="btn">Learn More</button>
                </a>
                <a href="/contact">
                  <button className="btn secondary-btn">Feedback</button>
                </a>
              </div>
            </div>
            <div className="home-image">
            <h1>Corona Virus</h1>
              <img src="/images/corona.jpg" alt="Corona Virus" width="400" height="300" />
            </div>
          </div>
        </section>
  
        <section className="section-home1">
          <div className="container grid grid-two-cols">
            <div className="home1-image">
              <h1>Covaxin</h1>
              <img src="/images/covaxin.jpg" alt="Covaxin" width="400" height="400" />
            </div>
            <div className="home-content">
              <p>
              COVAXIN®, India's indigenous COVID-19 vaccine by Bharat Biotech is developed in collaboration with the Indian Council of Medical Research (ICMR) - National Institute of Virology (NIV).
                    The indigenous, inactivated vaccine is developed and manufactured in Bharat Biotech's BSL-3 (Bio-Safety Level 3) high containment facility.
                    The vaccine is developed using Whole-Virion Inactivated Vero Cell derived platform technology.
                    Inactivated vaccines do not replicate and are therefore unlikely to revert and cause pathological effects.
                    They contain dead virus, incapable of infecting people but still able to instruct the immune system to mount a defensive reaction against an infection.
              </p>
              <div className="btn-group">
                <a href="/vaccination">
                  <button className="btn">Learn More</button>
                </a>
                <a href="/contact">
                  <button className="btn secondary-btn">Feedback</button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-home">
          <div className="container grid grid-two-cols">
            <div className="home-content">
              <p>
              Tuberculosis (TB) is a contagious disease caused by the bacterium Mycobacterium tuberculosis.
              It primarily affects the lungs but can also impact other parts of the body, such as the spine, brain, and kidneys.
              TB spreads through the air when an infected person coughs, sneezes, or speaks, releasing tiny droplets containing the bacteria.
              Symptoms of TB include a persistent cough, chest pain, weight loss, fever, and night sweats.
              Treatment typically involves a long course of antibiotics, and it is crucial to complete the full regimen to prevent the development of drug-resistant TB.
              </p>
              <div className="btn-group">
                <a href="/micro-organism">
                  <button className="btn">Learn More</button>
                </a>
                <a href="/contact">
                  <button className="btn secondary-btn">Feedback</button>
                </a>
              </div>
            </div>
            <div className="home-image">
            <h1>Tuberculosis</h1>
              <img src="/images/tuberculosis.jpeg" alt="Tuberculosis" width="400" height="300" />
            </div>
          </div>
        </section>

        <section className="section-home1">
          <div className="container grid grid-two-cols">
            <div className="home1-image">
              <h1>Bacillus Calmette–Guérin (BCG)</h1>
              <img src="/images/BCG_vaccine.jpeg" alt="BCG Vaccine" width="400" height="300" />
            </div>
            <div className="home-content">
              <p>
              The Bacillus Calmette–Guérin (BCG) vaccine is a vaccine primarily used against tuberculosis (TB).
              It is named after its inventors Albert Calmette and Camille Guérin.
              In countries where tuberculosis or leprosy is common, one dose is recommended in healthy babies as soon after birth as possible.
              In areas where tuberculosis is not common, only children at high risk are typically immunized, while suspected cases of tuberculosis are individually tested for and treated.
              Adults who do not have tuberculosis and have not been previously immunized, but are frequently exposed, may be immunized, as well.
              BCG also has some effectiveness against Buruli ulcer infection and other nontuberculous mycobacterial infections.
              Additionally, it is sometimes used as part of the treatment of bladder cancer
              </p>
              <div className="btn-group">
                <a href="/vaccination">
                  <button className="btn">Learn More</button>
                </a>
                <a href="/contact">
                  <button className="btn secondary-btn">Feedback</button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-home">
          <div className="container grid grid-two-cols">
            <div className="home-content">
              <p>
              Cancer is a disease in which some of the body’s cells grow uncontrollably and spread to other parts of the body. 
              Cancer can start almost anywhere in the human body, which is made up of trillions of cells.
              Normally, human cells grow and multiply (through a process called cell division) to form new cells as the body needs them. 
              When cells grow old or become damaged, they die, and new cells take their place.
              Sometimes this orderly process breaks down, and abnormal or damaged cells grow and multiply when they shouldn’t.
              These cells may form tumors, which are lumps of tissue.
              Tumors can be cancerous or not cancerous (benign). 
              Cancerous tumors spread into, or invade, nearby tissues and can travel to distant places in the body to form new tumors (a process called metastasis).
              Cancerous tumors may also be called malignant tumors.
              Many cancers form solid tumors, but cancers of the blood, such as leukemias, generally do not.
              Benign tumors do not spread into, or invade, nearby tissues.
              When removed, benign tumors usually don’t grow back, whereas cancerous tumors sometimes do.
              Benign tumors can sometimes be quite large, however. Some can cause serious symptoms or be life threatening, such as benign tumors in the brain.             
              </p>
              <div className="btn-group">
                <a href="/micro-organism">
                  <button className="btn">Learn More</button>
                </a>
                <a href="/contact">
                  <button className="btn secondary-btn">Feedback</button>
                </a>
              </div>
            </div>
            <div className="home-image">
            <h1>Cancer</h1>
              <img src="/images/cancer.jpg" alt="cancer" width="400" height="300" />
            </div>
          </div>
        </section>


        <Chatbot />
      </main>
    );
};
