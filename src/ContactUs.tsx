import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

const ContactUs: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend here
    console.log("Form submitted with data:", formData);
    // Show success message
    setIsSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-[#003579]">M AVENUE</Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/about" className="text-[#01014b] hover:text-[#0ba5bf] font-medium">About</Link>
              <Link to="/#services" className="text-[#01014b] hover:text-[#0ba5bf] font-medium">Services</Link>
              <Link to="/#goal" className="text-[#01014b] hover:text-[#0ba5bf] font-medium">Goals</Link>
              <Link to="/#marketing" className="text-[#01014b] hover:text-[#0ba5bf] font-medium">Digital Marketing</Link>
              <Link to="/contact" className="bg-[#0ba5bf] text-white px-4 py-2 rounded-full hover:bg-[#00e3f5] transition duration-300">Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-r from-[#01014b] to-[#320048]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&q=75')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            We'd love to hear from you. Reach out to us for inquiries, support, or to discuss your next project.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-[#01014b] mb-8 relative">
                Get in Touch
                <span className="block w-16 h-1 bg-[#0ba5bf] mt-4"></span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-10">
                Have questions or want to discuss how we can help with your IT solutions? 
                Our team is ready to assist you. Reach out to us using any of the methods below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-r from-[#003579] to-[#0ba5bf] rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#01014b] mb-1">Phone</h3>
                    <p className="text-gray-700">+91 1234567890</p>
                    <p className="text-gray-700">+91 9876543210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-r from-[#003579] to-[#0ba5bf] rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#01014b] mb-1">Email</h3>
                    <p className="text-gray-700">info@mavenuetechnosoft.com</p>
                    <p className="text-gray-700">support@mavenuetechnosoft.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-r from-[#003579] to-[#0ba5bf] rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#01014b] mb-1">Office Address</h3>
                    <p className="text-gray-700">
                      123 Tech Park, Silicon Avenue<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-r from-[#003579] to-[#0ba5bf] rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#01014b] mb-1">Business Hours</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold text-[#01014b] mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  {/* Social Media Icons */}
                  <a href="#" className="bg-[#003579] p-3 rounded-full text-white hover:bg-[#0ba5bf] transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-[#003579] p-3 rounded-full text-white hover:bg-[#0ba5bf] transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-[#003579] p-3 rounded-full text-white hover:bg-[#0ba5bf] transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-[#003579] p-3 rounded-full text-white hover:bg-[#0ba5bf] transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-[#01014b] mb-6">Send Us a Message</h3>
                
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                    <strong className="font-bold">Thank you!</strong>
                    <span className="block sm:inline"> Your message has been sent successfully. We'll get back to you shortly.</span>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0ba5bf] focus:border-transparent" 
                      required 
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email <span className="text-red-500">*</span></label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0ba5bf] focus:border-transparent" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0ba5bf] focus:border-transparent" 
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject <span className="text-red-500">*</span></label>
                    <select 
                      id="subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0ba5bf] focus:border-transparent" 
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Sales">Sales</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Career">Career Opportunity</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message <span className="text-red-500">*</span></label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      rows={5} 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0ba5bf] focus:border-transparent" 
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-[#0ba5bf] text-white font-bold py-3 px-4 rounded-md hover:bg-[#00e3f5] transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#01014b] mb-12">Find Us</h2>
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            {/* Replace with your actual Google Maps embed code */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b62771d12f31%3A0x9c9a0c4fb5c642df!2sGoregaon%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1616661658045!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="M AVENUE TECHNOSOFT location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#01014b] mb-12 relative">
            Frequently Asked Questions
            <span className="block w-20 h-1 bg-[#0ba5bf] mx-auto mt-4"></span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-[#01014b] mb-3">What services does M AVENUE TECHNOSOFT provide?</h3>
              <p className="text-gray-700">We provide a comprehensive range of IT solutions including SEO, SMO, Performance Marketing, Content Marketing, and custom IT solutions for businesses of all sizes.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-[#01014b] mb-3">How quickly can you respond to support requests?</h3>
              <p className="text-gray-700">We provide 24/7 support for all our clients. Most queries are responded to within 2-4 hours, and critical issues are addressed immediately.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-[#01014b] mb-3">Do you work with international clients?</h3>
              <p className="text-gray-700">Yes, we work with clients from around the globe. Our team is equipped to handle different time zones and communication requirements.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-bold text-[#01014b] mb-3">How do I request a quote for my project?</h3>
              <p className="text-gray-700">You can request a quote by filling out our contact form, sending us an email, or calling us directly. We'll get back to you with a custom proposal based on your requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#01014b] text-white pt-16 pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-2">M AVENUE TECHNOSOFT</h3>
              <p className="text-[#00e3f5] font-medium">INSPIRE. INNOVATE. CONNECT.</p>
              <p className="mt-4 text-gray-300">
                Leading the way in IT solutions and digital transformation.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 border-b border-[#0ba5bf] pb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-[#00e3f5] transition duration-300">About Us</Link></li>
                <li><Link to="/#services" className="text-gray-300 hover:text-[#00e3f5] transition duration-300">Services</Link></li>
                <li><Link to="/#marketing" className="text-gray-300 hover:text-[#00e3f5] transition duration-300">Digital Marketing</Link></li>
                <li><Link to="/#goal" className="text-gray-300 hover:text-[#00e3f5] transition duration-300">Our Goal</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 border-b border-[#0ba5bf] pb-2">Contact Us</h4>
              <p className="mb-2 flex items-center text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#0ba5bf]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                info@mavenuetechnosoft.com
              </p>
              <p className="mb-2 flex items-center text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#0ba5bf]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91 1234567890
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2025 M AVENUE TECHNOSOFT PVT LTD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;