import { useState } from 'react';
import axios from 'axios';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    f_name: '',
    email: '',
    Days: 'day1',
    age: '',
    gender: 'male',
    cnic: '',
    institute: '',
    address: '',
    city: '',
    contact: '',
    contact_ii: '',
    social_media: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const cities = [
    "Ahmed Nager Chatha", "Ahmadpur East", "Ali Khan Abad", "Alipur", "Arifwala",
    "Attock", "Abbottabad", "Adezai", "Alpuri", "Akora Khattak", "Ayubia", "Awaran",
    "Bhera", "Bhalwal", "Bahawalnagar", "Bahawalpur", "Bhakkar", "Burewala", "Badin",
    // ... include all other cities from your original list
    "other"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'cnic') {
      const numericValue = value.replace(/[^0-9]/g, '');
      if (numericValue.length <= 13) {
        setFormData(prev => ({ ...prev, [name]: numericValue }));
      }
      return;
    }
    
    if (name === 'contact' || name === 'contact_ii') {
      const numericValue = value.replace(/[^0-9]/g, '');
      if (numericValue.length <= 11) {
        setFormData(prev => ({ ...prev, [name]: numericValue }));
      }
      return;
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.f_name.trim()) newErrors.f_name = "Father's name is required";
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.age) newErrors.age = 'Age is required';
    if (!formData.cnic) {
      newErrors.cnic = 'CNIC is required';
    } else if (formData.cnic.length < 13) {
      newErrors.cnic = 'CNIC must be 13 digits';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.contact) {
      newErrors.contact = 'Contact number is required';
    } else if (formData.contact.length < 11) {
      newErrors.contact = 'Contact must be 11 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      formDataToSend.append('sbt-btn', 'Submit');
      formDataToSend.append('date_time', new Date().toISOString().split('T')[0].replace(/-/g, '/'));

      const response = await axios.post('registration.php', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.includes('OTP has been sent')) {
        window.location.href = `verify_otp_registration.php?email=${encodeURIComponent(formData.email)}`;
      } else {
        setSubmitMessage('Registration successful! Please check your email for confirmation.');
      }
      
      setFormData({
        name: '',
        f_name: '',
        email: '',
        Days: 'day1',
        age: '',
        gender: 'male',
        cnic: '',
        institute: '',
        address: '',
        city: '',
        contact: '',
        contact_ii: '',
        social_media: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage(error.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Background Image Section */}
      <div 
        className="bg-cover bg-center min-h-screen flex items-center justify-center"
        style={{ backgroundImage: "url('/figure3.png')" }}
      >
        {/* Main Form Container */}
        <div className="w-full max-w-4xl bg-white bg-opacity-90 rounded-lg shadow-lg p-8 mx-4 my-8">
          
          {/* Event Banner */}
          <div className="flex justify-center my-8">
            <img 
              src="https://acpkhi.com/events/alumni%202025.webp" 
              alt="Event Banner" 
              className="max-w-full h-auto"
            />
          </div>

          {/* Registration Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">REGISTRATION</h2>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name and Father's Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Name:</label>
                <input
                  className={`w-full px-4 py-2 border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Father's Name:</label>
                <input
                  className={`w-full px-4 py-2 border rounded-lg ${errors.f_name ? 'border-red-500' : 'border-gray-300'}`}
                  name="f_name"
                  type="text"
                  placeholder="Father Full Name"
                  value={formData.f_name}
                  onChange={handleChange}
                  required
                />
                {errors.f_name && <p className="text-red-500 text-sm mt-1">{errors.f_name}</p>}
              </div>
            </div>

            {/* Email and Day Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Email Address:</label>
                <input
                  className={`w-full px-4 py-2 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  name="email"
                  type="email"
                  placeholder="ex: abc@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Select Day:</label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  name="Days"
                  value={formData.Days}
                  onChange={handleChange}
                  required
                >
                  <option value="day1">Day 1</option>
                  <option value="day2">Day 2</option>
                  <option value="day3">Day 3</option>
                  <option value="all days">All Days</option>
                </select>
              </div>
            </div>

            {/* Age, Gender, and CNIC */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Age:</label>
                <input
                  className={`w-full px-4 py-2 border rounded-lg ${errors.age ? 'border-red-500' : 'border-gray-300'}`}
                  name="age"
                  type="number"
                  placeholder="Ex: 25"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
                {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Gender:</label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">CNIC:</label>
                <input
                  className={`w-full px-4 py-2 border rounded-lg ${errors.cnic ? 'border-red-500' : 'border-gray-300'}`}
                  name="cnic"
                  type="text"
                  placeholder="4130211111111"
                  value={formData.cnic}
                  onChange={handleChange}
                  minLength="13"
                  maxLength="13"
                  required
                />
                {errors.cnic && <p className="text-red-500 text-sm mt-1">{errors.cnic}</p>}
              </div>
            </div>

            {/* Institute, Address, and City */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Educational Institution: (if Any)</label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  name="institute"
                  type="text"
                  placeholder=""
                  value={formData.institute}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Address:</label>
                <input
                  className={`w-full px-4 py-2 border rounded-lg ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                  name="address"
                  type="text"
                  placeholder=""
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>

              <div>
                <label className="block text-gray-700 mb-2">City:</label>
                <input
                  className={`w-full px-4 py-2 border rounded-lg ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                  name="city"
                  type="text"
                  list="cityList"
                  placeholder="Type or select a city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
                <datalist id="cityList">
                  {cities.map((city, index) => (
                    <option key={index} value={city} />
                  ))}
                </datalist>
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
              </div>
            </div>

            {/* Contact Numbers and Social Media */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">Contact no: (Primary)</label>
                <input
                  className={`w-full px-4 py-2 border rounded-lg ${errors.contact ? 'border-red-500' : 'border-gray-300'}`}
                  name="contact"
                  type="text"
                  placeholder="03001234567"
                  value={formData.contact}
                  onChange={handleChange}
                  maxLength="11"
                  required
                />
                {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact}</p>}
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Contact no: (Secondary)</label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  name="contact_ii"
                  type="text"
                  placeholder="03331234567"
                  value={formData.contact_ii}
                  onChange={handleChange}
                  maxLength="11"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Social Media ID:</label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  name="social_media"
                  type="text"
                  placeholder="Ex: FB, Insta, personal social media"
                  value={formData.social_media}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="bg-[#FC471E] hover:bg-[#e03e1a] text-white font-bold py-3 px-8 rounded-lg transition duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>

            {/* Resend OTP Link */}
            <div className="text-center mt-4">
              <a 
                href="resend_otp_registration.php" 
                className="inline-block bg-[#fad03b] hover:bg-[#e8c233] text-black font-bold py-2 px-6 rounded-lg transition duration-300"
              >
                Resend OTP
              </a>
            </div>

            {/* Submission Message */}
            {submitMessage && (
              <div className={`mt-4 text-center p-3 rounded-lg ${submitMessage.includes('successful') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}