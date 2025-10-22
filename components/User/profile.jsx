"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { FaUser, FaEdit, FaSave, FaTimes, FaCamera, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCity, FaBirthdayCake, FaTint, FaUserFriends } from "react-icons/fa";
import { useAuth } from "../../lib/hooks/useAuth";
import { useUserProfileQuery, useUpdateUserProfileDataMutation } from "../../lib/store/api/userApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PersonalInfo() {
  const { user: authUser, isAuthenticated } = useAuth();
  const userId = authUser?.id;
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});
  const fileInputRef = useRef(null);
  
  const { data, isLoading, error } = useUserProfileQuery(userId, {
    skip: !userId
  });
  
  const [updateProfile, { isLoading: isUpdating }] = useUpdateUserProfileDataMutation();

  if (!isAuthenticated || !userId) return <div className="text-center py-8">Please log in to view profile</div>;
  if (isLoading) return <div className="text-center py-8">Loading profile...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error loading profile</div>;

  const user = data?.user || {};

  const handleEdit = () => {
    setEditData({
      name: user.name || '',
      phone: user.phone || '',
      address: user.address || '',
      city: user.city || ''
    });
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      console.log('Updating profile with:', { userId, ...editData });
      const result = await updateProfile({ 
        userId,
        name: editData.name,
        phone: editData.phone,
        address: editData.address,
        city: editData.city
      }).unwrap();
      console.log('Update result:', result);
      toast.success('Profile updated successfully!');
      setIsEditing(false);
    } catch (error) {
      console.error('Update error:', error);
      toast.error(error?.data?.message || 'Failed to update profile');
    }
  };

  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        console.log('Updating photo for userId:', userId);
        await updateProfile({ userId, profilePic: file }).unwrap();
        toast.success('Photo updated successfully!');
      } catch (error) {
        console.error('Photo update error:', error);
        toast.error(error?.data?.message || 'Failed to update photo');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-8 px-4">
      <div className=" mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <FaUser className="text-white text-xl" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Profile Information</h1>
                  <p className="text-blue-100">Manage your personal details</p>
                </div>
              </div>
              {!isEditing && (
                <button 
                  onClick={handleEdit}
                  className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200"
                >
                  <FaEdit className="text-sm" />
                  <span>Edit Profile</span>
                </button>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-8">

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Profile Image Section */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="relative group">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative"
                  >
                    <img
                      src={user.profileImage || `https://ui-avatars.com/api/?name=${user.name}&background=3b82f6&color=fff&size=150`}
                      alt={user.name}
                      className="w-36 h-36 rounded-2xl object-cover shadow-lg border-4 border-white"
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <FaCamera className="text-white text-2xl" />
                    </div>
                  </motion.div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handlePhotoChange}
                    accept="image/*"
                    className="hidden"
                  />
                </div>
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-4 bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-6 py-2.5 rounded-xl font-medium flex items-center space-x-2 shadow-lg transition-all duration-200 transform hover:scale-105"
                >
                  <FaCamera className="text-sm" />
                  <span>Change Photo</span>
                </button>
                
                {/* User Status */}
                <div className="mt-6 text-center lg:text-left">
                  <h3 className="text-xl font-bold text-gray-800">{user.name}</h3>
                  <p className="text-gray-500 flex items-center justify-center lg:justify-start mt-1">
                    <FaEnvelope className="mr-2 text-sm" />
                    {user.email}
                  </p>
                </div>
              </div>

              {/* Information Grid */}
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {isEditing ? (
                    <>
                      <EditField icon={FaUser} label="Full Name" value={editData.name} onChange={(v) => setEditData({...editData, name: v})} />
                      <InfoField icon={FaEnvelope} label="Email" value={user.email} readonly />
                      <EditField icon={FaPhone} label="Phone" value={editData.phone} onChange={(v) => setEditData({...editData, phone: v})} />
                      <EditField icon={FaMapMarkerAlt} label="Address" value={editData.address} onChange={(v) => setEditData({...editData, address: v})} />
                      <EditField icon={FaCity} label="City" value={editData.city} onChange={(v) => setEditData({...editData, city: v})} />
                      <InfoField icon={FaBirthdayCake} label="Date of Birth" value={user.dob} readonly />
                      <InfoField icon={FaTint} label="Blood Group" value={user.bloodGroup} readonly />
                      <InfoField icon={FaUserFriends} label="Emergency Contact" value={user.emergencyContact} readonly />
                    </>
                  ) : (
                    <>
                      <InfoField icon={FaUser} label="Full Name" value={user.name} />
                      <InfoField icon={FaEnvelope} label="Email" value={user.email} />
                      <InfoField icon={FaPhone} label="Phone" value={user.phone} />
                      <InfoField icon={FaMapMarkerAlt} label="Address" value={user.address} />
                      <InfoField icon={FaCity} label="City" value={user.city} />
                      <InfoField icon={FaBirthdayCake} label="Date of Birth" value={user.dob} />
                      <InfoField icon={FaTint} label="Blood Group" value={user.bloodGroup} />
                      <InfoField icon={FaUserFriends} label="Emergency Contact" value={user.emergencyContact} />
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            {isEditing && (
              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end gap-3">
                <button 
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2.5 rounded-xl font-medium flex items-center space-x-2 transition-all duration-200"
                >
                  <FaTimes className="text-sm" />
                  <span>Cancel</span>
                </button>
                <button 
                  onClick={handleSave}
                  disabled={isUpdating}
                  className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-6 py-2.5 rounded-xl font-medium flex items-center space-x-2 shadow-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
                >
                  <FaSave className="text-sm" />
                  <span>{isUpdating ? 'Saving...' : 'Save Changes'}</span>
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
}

function InfoField({ icon: Icon, label, value, readonly }) {
  return (
    <div className={`bg-gray-50 rounded-xl p-4 border border-gray-100 ${readonly ? 'opacity-75' : ''}`}>
      <div className="flex items-center space-x-2 mb-2">
        <Icon className="text-blue-500 text-sm" />
        <p className="text-gray-600 text-sm font-medium">{label}</p>
      </div>
      <p className="text-gray-900 font-semibold text-lg">{value || 'Not provided'}</p>
    </div>
  );
}

function EditField({ icon: Icon, label, value, onChange }) {
  return (
    <div className="bg-white rounded-xl p-4 border-2 border-blue-100 focus-within:border-blue-300 transition-colors duration-200">
      <div className="flex items-center space-x-2 mb-2">
        <Icon className="text-blue-500 text-sm" />
        <label className="text-gray-600 text-sm font-medium">{label}</label>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full text-gray-900 font-semibold text-lg bg-transparent border-none outline-none placeholder-gray-400"
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  );
}
