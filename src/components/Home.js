import React from "react";
import Skills from "./Skills";
import CarouselNew from "./CarouselNew";
function Home() {
  return (
    <div class="newsec">
      <p className="tops">
        A highly motivated and hard-working individual with a strong
        understanding of key business concepts.I have a strong belief in how
        data and technology can help us work together better, innovate and solve
        urgent problems. I look foward to joining a like-minded team and create
        value together.
      </p>

      <Skills />
      <div className="newsec">
        <CarouselNew />
      </div>
    </div>
  );
}
export default Home;
