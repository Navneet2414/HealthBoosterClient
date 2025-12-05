"use client";

import { useState, useEffect } from "react";
import { FaUserMd, FaFlask, FaUser, FaCheck, FaTimes, FaCalendarAlt, FaChartLine, FaUsers, FaCog } from "react-icons/fa";
import { useGetPendingApprovalsQuery, useApproveUserMutation } from "@/lib/store/api/adminApi";
import { toast } from "react-toastify";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const { data: apiData, isLoading, refetch, error } = useGetPendingApprovalsQuery();
  const pendingVerifications = apiData ? [...(apiData.doctors || []), ...(apiData.laboratories || [])] : [];
  
  console.log('API Data:', apiData);
  console.log('Pending Verifications:', pendingVerifications);
  const [approveUser] = useApproveUserMutation();

  const [stats] = useState({
    totalUsers: 1247,
    totalDoctors: 89,
    totalLabs: 23,
    totalBookings: 3456,
    completedBookings: 2890,
    pendingBookings: 566,
    monthlyRevenue: 125000
  });

  const [bookingStats] = useState([
    { role: "Doctor", total: 2100, completed: 1850, pending: 250, revenue: 84000 },
    { role: "Laboratory", total: 1356, completed: 1040, pending: 316, revenue: 41000 }
  ]);

  const handleVerify = async (id, action, role) => {
    if (action === "approve") {
      try {
        await approveUser({ role, id }).unwrap();
        toast.success(`${role} approved successfully!`);
        refetch();
      } catch (error) {
        toast.error(error?.data?.message || "Approval failed");
      }
    }
  };

  const StatCard = ({ title, value, icon: Icon, color, subtitle }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className={`text-2xl font-bold ${color}`}>{value}</p>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div className={`p-3 rounded-lg bg-gradient-to-r ${color === 'text-blue-600' ? 'from-blue-400 to-blue-500' : color === 'text-green-600' ? 'from-green-400 to-green-500' : color === 'text-purple-600' ? 'from-purple-400 to-purple-500' : 'from-orange-400 to-orange-500'}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  return (
    <div className=" bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white p-2 shadow-lg">
        <h1 className="text-3xl font-bold">HealthBooster Admin Dashboard</h1>
        <p className="text-blue-100 mt-2">Complete platform management and analytics</p>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm border-b">
        <div className="mx-auto px-6">
          <div className="flex space-x-8">
            {[
              { id: "overview", label: "Overview", icon: FaChartLine },
              { id: "verifications", label: "Verifications", icon: FaCheck },
              { id: "users", label: "User Management", icon: FaUsers },
              { id: "bookings", label: "Booking Analytics", icon: FaCalendarAlt },
              { id: "settings", label: "Settings", icon: FaCog }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto px-6 py-8">
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard title="Total Users" value={stats.totalUsers.toLocaleString()} icon={FaUsers} color="text-blue-600" />
              <StatCard title="Active Doctors" value={stats.totalDoctors} icon={FaUserMd} color="text-green-600" />
              <StatCard title="Partner Labs" value={stats.totalLabs} icon={FaFlask} color="text-purple-600" />
              <StatCard title="Monthly Revenue" value={`₹${(stats.monthlyRevenue / 1000).toFixed(0)}K`} icon={FaChartLine} color="text-orange-600" />
            </div>

            {/* Booking Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <StatCard title="Total Bookings" value={stats.totalBookings.toLocaleString()} icon={FaCalendarAlt} color="text-blue-600" subtitle="All time" />
              <StatCard title="Completed" value={stats.completedBookings.toLocaleString()} icon={FaCheck} color="text-green-600" subtitle="83.6% success rate" />
              <StatCard title="Pending" value={stats.pendingBookings} icon={FaCog} color="text-orange-600" subtitle="Awaiting completion" />
            </div>
          </div>
        )}

        {activeTab === "verifications" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Pending Verifications</h3>
              <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                {pendingVerifications.length} Pending
              </span>
            </div>
            {isLoading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            ) : pendingVerifications.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">No pending verifications</p>
              </div>
            ) : (
              <div className="space-y-4">
                {pendingVerifications.map((user) => (
                <div key={user._id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full ${user.role === 'doctor' ? 'bg-blue-100' : 'bg-green-100'}`}>
                      {user.role === "doctor" ? <FaUserMd className="text-blue-600" /> : <FaFlask className="text-green-600" />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{user.name}</h4>
                      <p className="text-sm text-gray-600">{user.email}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`text-xs px-2 py-1 rounded-full capitalize font-medium ${
                          user.role === 'doctor' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {user.role}
                        </span>
                        <span className="text-xs text-gray-500">Applied: {new Date(user.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleVerify(user._id, "approve", user.role)}
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-lg hover:from-green-500 hover:to-green-600 transition-all font-medium"
                    >
                      <FaCheck className="mr-2" /> Approve
                    </button>
                    <button
                      onClick={() => handleVerify(user._id, "reject", user.role)}
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-red-400 to-red-500 text-white rounded-lg hover:from-red-500 hover:to-red-600 transition-all font-medium"
                    >
                      <FaTimes className="mr-2" /> Reject
                    </button>
                  </div>
                </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "bookings" && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Booking Analytics by Role</h3>
              <div className="space-y-4">
                {bookingStats.map((stat, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-900">{stat.role} Bookings</h4>
                      <span className="text-sm font-medium text-green-600">₹{(stat.revenue / 1000).toFixed(0)}K Revenue</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600">{stat.total.toLocaleString()}</p>
                        <p className="text-sm text-gray-600">Total Bookings</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-600">{stat.completed.toLocaleString()}</p>
                        <p className="text-sm text-gray-600">Completed</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-orange-600">{stat.pending}</p>
                        <p className="text-sm text-gray-600">Pending</p>
                      </div>
                    </div>
                    <div className="mt-3 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full"
                        style={{ width: `${(stat.completed / stat.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "users" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">User Management</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <FaUser className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900">Regular Users</h4>
                <p className="text-2xl font-bold text-blue-600 mt-2">{stats.totalUsers - stats.totalDoctors - stats.totalLabs}</p>
                <p className="text-sm text-gray-600">Active accounts</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <FaUserMd className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900">Doctors</h4>
                <p className="text-2xl font-bold text-green-600 mt-2">{stats.totalDoctors}</p>
                <p className="text-sm text-gray-600">Verified professionals</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <FaFlask className="w-12 h-12 text-purple-500 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900">Laboratories</h4>
                <p className="text-2xl font-bold text-purple-600 mt-2">{stats.totalLabs}</p>
                <p className="text-sm text-gray-600">Partner facilities</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">System Settings</h3>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium text-gray-900">Platform Configuration</h4>
                <p className="text-sm text-gray-600 mt-1">Manage global platform settings and configurations</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium text-gray-900">Notification Settings</h4>
                <p className="text-sm text-gray-600 mt-1">Configure email and SMS notification preferences</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium text-gray-900">Security Settings</h4>
                <p className="text-sm text-gray-600 mt-1">Manage security policies and access controls</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}