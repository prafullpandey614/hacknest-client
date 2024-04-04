import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Hacknest: All in One Solution for Hackathons</h1>
      <p className="mb-4">
        Welcome to our Hackathon Hosting Software! Our platform is the brainchild of final year students at Bundel Khand University. Initially conceived as a final year project, our goal is to scale it to host hackathons at the university level and beyond.
      </p>
      <p className="mb-4">
        Led by our mentor, Sadik Khan, and our Team Lead, Prafull Kumar Pandey, our team consists of four other talented members: Mohit, Sonu, Subhanshu, and Ankita. Together, we're passionate about creating a seamless and efficient platform for hosting hackathons, fostering innovation, and nurturing the next generation of tech talent.
      </p>
      <p className="mb-4">
        Our journey began with the vision of democratizing hackathons and making them accessible to students from all backgrounds. We believe that hackathons are not just events; they are opportunities for collaboration, creativity, and learning.
      </p>
      <p className="mb-4">
        With our platform, we aim to provide a user-friendly interface for organizers to plan, manage, and execute hackathons effortlessly. Whether you're a seasoned hackathon organizer or a first-time participant, our software is designed to cater to your needs and enhance your experience.
      </p>
      <p className="mb-4">
        Thank you for joining us on this journey. Together, let's empower the innovators of tomorrow!
      </p>
    </div>
    <Footer/>
    </>
  );
};

export default About;
