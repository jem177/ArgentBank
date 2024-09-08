import { Features } from "../../components/Features";
import Hero from "../../components/Hero";
import "./style.css";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <Features
            imgSrc="/src/assets/img/icon-chat.webp"
            imgAlt="Chat Icon"
            title="You are our #1 priority"
            description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          />
          <Features
            imgSrc="/src/assets/img/icon-money.webp"
            imgAlt="Money Icon"
            title="More savings means higher rates"
            description="The more you save with us, the higher your interest rate will be!"
          />
          <Features
            imgSrc="/src/assets/img/icon-security.webp"
            imgAlt="Security Icon"
            title="Security you can trust"
            description="We use top of the line encryption to make sure your data and money is always safe."
          />
        </section>
      </main>
    </>
  );
}
