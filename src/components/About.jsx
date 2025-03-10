import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="p-6 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">About CommunionHub</h1>
        <p className="text-lg text-gray-700">
          CommunionHub is a platform dedicated to connecting people across different faiths and interests 
          through community-driven events. Our goal is to foster unity and support through shared experiences.
        </p>
        <p className="mt-4 text-gray-600">
          Whether you're looking for religious gatherings, social events, or charity activities, 
          CommunionHub provides a space to explore and engage with your community.
        </p>
      </div>
    </div>
  );
};

export default About;
