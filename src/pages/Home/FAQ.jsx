import React, { useState, useEffect } from 'react';
import { FaUser, FaNewspaper, FaMoneyBillAlt, FaCheck } from 'react-icons/fa';
import loginImage1 from '../../assets/login.png';
import postImage from '../../assets/signup.png';
import payment from '../../assets/checkout.jpg';
import success from '../../assets/success.png';

const FAQ = () => {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    setCurrentStep(1);
  }, []);

  const steps = [
    { title: 'Login & Register', icon: <FaUser />, description: 'Enjoy a seamless experience as you navigate through the process of sharing valuable information with the community. Provide your login details and register if you are a new user.', images: [loginImage1, postImage] },
    { title: 'Press Release Post', icon: <FaNewspaper />, description: 'Craft your message, attach relevant media, and let your news reach a broader audience. Our portal allows you to post directly to various social media sites, amplifying your reach effortlessly.', image: postImage },
    { title: 'Payment', icon: <FaMoneyBillAlt />, description: 'Make your payment seamlessly, guaranteeing that your message gets the attention it deserves. Our payment process is swift, reliable, and designed to facilitate your press release journey.', image: payment },
    { title: 'Success', icon: <FaCheck />, description: 'Take a moment to review your submission and ensure all details are accurate. Once satisfied, conclude the process, and your press release will soon be making waves across social media platforms. Thank you for choosing our Press Release Portal!', image: success },
  ];

  const isStepActive = (stepNumber) => {
    return stepNumber === currentStep;
  };

  const handleStepClick = (stepNumber) => {
    setCurrentStep(stepNumber);
  };

  return (
    <div className="flex flex-col justify-between p-12 bg-pink w-full h-full">
      <h1 className="text-4xl font-bold text-center mb-8">PRP Overview</h1>
      {steps.map((step, index) => (
        <div key={index} className="flex items-center mb-4">
          <div
            className={`w-12 h-12 flex text-2xl items-center justify-center rounded-full border-2 ${
              isStepActive(index + 1) ? 'text-gray' : 'border-black'
            }`}
          >
            {isStepActive(index + 1) ? index + 1 : step.icon}
          </div>
          <div className="ml-8">
            <button
              className={`font-bold ${
                isStepActive(index + 1)
                  ? 'text-blue cursor-default'
                  : 'text-gray hover:text-blue text-xl focus:outline-none'
              }`}
              onClick={() => handleStepClick(index + 1)}
            >
              {step.title}
            </button>
            {isStepActive(index + 1) && (
              <div className="flex items-center p-6">
                {step.images && step.images.map((image, imgIndex) => (
                  <img key={imgIndex} src={image} alt={`${step.title}-image-${imgIndex}`} className="w-80 h-80 object-cover rounded-md p-6" />
                ))}
                {!step.images && (
                  <img src={step.image} alt={step.title} className="w-80 h-80 object-cover rounded-md p-6" />
                )}
                <p className="text-l text-black text-right font-semibold">{step.description}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
