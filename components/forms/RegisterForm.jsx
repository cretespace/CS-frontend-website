'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../../components/ui/Button';
import IndividualForm from './IndividualForm';
import IndividualBenefits from '../accounts-benefits/IndividualBenefits';
import BusinessBenefits from '../accounts-benefits/BusinessBenefits';
import StudentsBenefits from '../accounts-benefits/StudentsBenefits';
import BizCentersBenefits from '../accounts-benefits/BizCentersBenefits';
import BusinessForm from './BusinessForm';
import StudentForm from './StudentForm';
import BusinessCenterForm from './BusinessCenterForm';

const BusinessRegistrationPage = () => {
  const [selectedTab, setSelectedTab] = useState('Individual');
  const [formData, setFormData] = useState({
    // Common fields
    email: '',
    password: '',
    confirmPassword: '',
    // Student fields
    schoolName: '',
    registrationNo: '',
    course: '',
    graduationYear: '',
    country:'',
    gender:'',
    dob:'',

    
    // Individual fields
    firstName: '',
    lastName: '',
    phoneNumber: '',
    country: '',
    gender:'',
    dob:'',
    
    // Business fields
    businessName: '',
    businessAddress: '',
    contactPersonName: '',
    contactPersonRole: 'Manager',
    businessPhoneNumber: '',
    numberOfEmployees: '',
    
    
    
    // Business Centre fields
    businessCentreName: '',
    businessCentreAddress: '',
    contactPersonName: '',
    partnershipReason: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const handleFileUpload = (event) => {
    const file = event?.target?.files?.[0];
    if (file) {
      setUploadedFile({
        name: file?.name,
        size: (file?.size / 1024)?.toFixed(2) + 'kb'
      });
    }
  };
  
  const handleSubmit = (e) => {
    e?.preventDefault();
    console.log('Form submitted:', { selectedTab, formData });
  };

  const tabs = ['Individual', 'Business', 'Student', 'Business Centre'];

  // Form content based on selected tab
  const renderFormContent = () => {
    switch (selectedTab) {
      case 'Individual':
        return (
        //  individual form 

        <IndividualForm formData={formData} onChange={handleInputChange}/>
        );
        
      case 'Business':
        return (
         
          // Business form 
          <BusinessForm formData={formData} onChange={handleInputChange}/>
        );
        
      case 'Student':
        return (
        //  student form
        <StudentForm formData={formData} onChange={handleInputChange} uploadedFile={uploadedFile} handleFileUpload={handleFileUpload}/>
        );
        
      case 'Business Centre':
        return (
        //  Business center form 
        <BusinessCenterForm formData={formData} onChange={handleInputChange} uploadedFile={uploadedFile} handleFileUpload={handleFileUpload}/>
        );
        
      default:
        return null;
    }
  };

  // page title and subtitle based on selected tab
  const getPageTitle = () => {
    switch (selectedTab) {
      case 'Individual':
        return {
          title: 'Create your Account',
          subtitle: 'Individual Account',
          benefits:<IndividualBenefits/>,
        };
      case 'Business':
        return {
          title: 'Create your Account',
          subtitle: 'Business Account',
          benefits:<BusinessBenefits/>
        };
      case 'Student':
        return {
          title: 'Create your Account',
          subtitle: 'Student Account',
          benefits:<StudentsBenefits/>
        };
      case 'Business Centre':
        return {
          title: 'Create your Account',
          subtitle: 'Business Centre Account',
          benefits:<BizCentersBenefits/>
        };
      default:
        return {
          title: 'Create your Account',
          subtitle: 'Account'
        };
    }
  };

  const { title, subtitle,benefits } = getPageTitle();

  return (
    <div className="w-full bg-[#000000] min-h-screen ">
      {/* Background Image */}
      <div className=" w-full">
        <div className="absolute inset-0 w-full h-[420px]">
          <Image
            src="/images/ellipse 8.png"
            alt="Background"
            fill
            className="object-cover w-full  "
            priority
          />
        </div>
        {/* Main Content */}
        <div className="relative z-10 w-full ">
          {/* Header */}
          <div className="w-full border-b border-[#2fc22b7f] ">
            <div className="flex justify-between items-center  ">
              <Image
                src="/Crete Logo.png"
                alt="CRETESPACE"
                width={86}
                height={28}
                className="w-[86px] h-[28px] ml-12"
              />
              <Link href="/" className="text-[#2fc22b] text-[16px] font-normal mr-22">
                Cancel
              </Link>
            </div>
          </div>
          {/* Content Container */}
          <div className="w-full max-w-[1440px] mx-auto px-4 py-8 md:py-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left Side - Benefits */}
              <div className="w-full lg:w-2/5">
                <div className="flex flex-col gap-12 lg:gap-16 ml-12">
                  {/* Title Section */}
                  <div className="text-center lg:text-left">
                    <h1 className="text-[24px] sm:text-[28px] md:text-[36px] font-medium text-white mb-3">
                      {title}
                    </h1>
                    <p className="text-[18px] sm:text-[20px] md:text-[24px] font-medium text-[#2fc22b]">
                      {subtitle}
                    </p>
                  </div>
                  
                  {/* Benefits List */}
                  <div className="flex flex-col gap-8 lg:gap-9">
                {benefits}
                  </div>
                </div>
              </div>
              {/* Right Side - Form */}
              <div className="w-full lg:w-2/4">
                <div className="bg-[linear-gradient(180deg,#093e0f72_0%,#060606_100%)] border border-[#0b510a7f] rounded-[18px] p-6 sm:p-8 lg:p-12 
                ">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6 lg:gap-7">
                    {/* Account Type Tabs */}
                    <div className="flex justify-baseline">
                      <div className="bg-[#001b0466] rounded-[5px] p-1 flex gap-4">
                        {tabs?.map((tab) => (
                          <button
                            key={tab}
                            type="button"
                            onClick={() => setSelectedTab(tab)}
                            className={`px-2 py-1.5 text-[14px] font-medium rounded-[3px] transition-all ${
                              selectedTab === tab
                                ? 'bg-[#013500] text-white'
                                : 'text-[#ffffff7f] hover:text-white'
                            }`}
                          >
                            {tab}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Dynamic Form Content Based on Selected Tab */}
                    {renderFormContent()}
                    
                    {/* Email  */}
                    <div className="flex flex-col gap-3">
                      <label className="text-[14px] font-medium text-white">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Email"
                        value={formData?.email}
                        onChange={(e) => handleInputChange('email', e?.target?.value)}
                        className="w-full px-3 py-3 bg-[#062d0866] border border-[#2fc22b19] rounded-[8px] text-[14px] text-[#ffffffb2] placeholder:text-[#ffffffb2] focus:outline-none focus:border-[#2fc22b] focus:ring-1 focus:ring-[#2fc22b]"
                      />
                    </div>
                    
                    {/* Password */}
                    <div className="flex flex-col gap-2.5">
                      <label className="text-[14px] font-medium text-white">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          placeholder=""
                          value={formData?.password}
                          onChange={(e) => handleInputChange('password', e?.target?.value)}
                          className="w-full px-3 py-3 pr-12 bg-[#062d0866] border border-[#2fc22b19] rounded-[8px] text-[14px] text-[#ffffffb2] placeholder:text-[#ffffffb2] focus:outline-none focus:border-[#2fc22b] focus:ring-1 focus:ring-[#2fc22b]"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                          <Image
                            src="/images/img_mdieyeoffoutline.svg"
                            alt="Toggle password visibility"
                            width={20}
                            height={16}
                            className="w-[20px] h-[16px]"
                          />
                        </button>
                      </div>
                      <p className="text-[12px] text-[#ffffffb2]">
                        Minimum length is 8 characters
                      </p>
                    </div>
                    {/* Confirm Password */}
                    <div className="flex flex-col gap-2.5">
                      <label className="text-[14px] font-medium text-white">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder=""
                          value={formData?.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e?.target?.value)}
                          className="w-full px-3 py-3 pr-12 bg-[#062d0866] border border-[#2fc22b19] rounded-[8px] text-[14px] text-[#ffffffb2] placeholder:text-[#ffffffb2] focus:outline-none focus:border-[#2fc22b] focus:ring-1 focus:ring-[#2fc22b]"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                          <Image
                            src="/images/img_mdieyeoffoutline.svg"
                            alt="Toggle password visibility"
                            width={20}
                            height={16}
                            className="w-[20px] h-[16px]"
                          />
                        </button>
                      </div>
                      <p className="text-[12px] text-[#ffffffb2]">
                        Minimum length is 8 characters
                      </p>
                    </div>
                    {/* Submit Button and Terms */}
                    <div className="flex flex-col gap-5 items-center">
                      <Button
                        type="submit"
                        onClick={handleSubmit}
                        className="w-full bg-[#2fc22b] text-white text-[16px] font-medium py-3 px-8 rounded-[10px] hover:bg-[#28a526] transition-colors"
                      >
                        Sign Up
                      </Button>
                      <div className="flex flex-col gap-6 items-center">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setAgreeToTerms(!agreeToTerms)}
                            className="flex-shrink-0"
                          >
                            <Image
                              src="/images/img_ion_checkbox_outline.svg"
                              alt="Checkbox"
                              width={20}
                              height={20}
                              className="w-[20px] h-[20px]"
                            />
                          </button>
                          <p className="text-[12px] text-[#ffffffb2] leading-[15px]">
                            <span>By creating an account, I agree to the </span>
                            <span className="font-semibold underline">Terms & Conditions</span>
                            <span> and </span>
                            <span className="font-semibold underline">Privacy Policy</span>
                          </p>
                        </div>
                        <p className="text-[14px] text-white text-center">
                          <span>Already have an account? </span>
                          <Link href="/login" className="text-[#2fc22b] font-semibold">
                            Login
                          </Link>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessRegistrationPage;