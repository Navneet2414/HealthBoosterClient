# HealthBooster Frontend

A comprehensive healthcare platform built with Next.js 15, providing seamless access to medical services including doctor consultations, lab tests, and medicine delivery.

## 🚀 Features

- **Multi-Role Authentication**: Support for Users, Doctors, and Laboratories
- **Doctor Consultation**: Find and book appointments with qualified doctors
- **Lab Testing**: Book diagnostic tests and view reports
- **Medicine Delivery**: Order medicines with home delivery
- **User Dashboard**: Comprehensive health tracking and management
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Beautiful animations with Framer Motion

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **State Management**: Redux Toolkit
- **Icons**: React Icons
- **Notifications**: React Toastify
- **Language**: JavaScript (ES6+)

## 📁 Project Structure

```
healthboosterfrontend/
├── app/                          # Next.js App Router
│   ├── about-us/                 # About page
│   ├── admin/                    # Admin dashboard
│   ├── dashboard/                # Main dashboard
│   ├── doctor/                   # Doctor-related pages
│   ├── laboratory/               # Lab-related pages
│   ├── login/                    # Authentication pages
│   │   ├── doctor/               # Doctor login
│   │   ├── laboratory/           # Lab login
│   │   └── user/                 # User login
│   ├── sign-up/                  # Registration pages
│   │   ├── doctor/               # Doctor registration
│   │   ├── laboratory/           # Lab registration
│   │   └── user/                 # User registration
│   ├── user/                     # User-specific pages
│   │   └── dashboard/            # User dashboard
│   │       └── components/       # Dashboard components
│   ├── verify-otp/               # OTP verification
│   ├── globals.css               # Global styles
│   ├── layout.js                 # Root layout
│   └── page.js                   # Home page
├── components/                   # Reusable components
│   ├── auth/                     # Authentication components
│   ├── providers/                # Context providers
│   └── shared/                   # Shared UI components
├── lib/                          # Utilities and configurations
│   ├── hooks/                    # Custom React hooks
│   └── store/                    # Redux store configuration
├── public/                       # Static assets
│   └── images/                   # Image assets
├── tailwind.config.js            # Tailwind configuration
├── next.config.mjs               # Next.js configuration
└── package.json                  # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd healthboosterfrontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Configure your environment variables in `.env.local`

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Styling

This project uses Tailwind CSS 4 with custom configuration:

- **Custom Colors**: Primary (blue) and Secondary (green) color schemes
- **Custom Animations**: Fade-in, slide-up, and text gradient animations
- **Responsive Design**: Mobile-first approach
- **Custom Components**: Reusable UI components

## 🔐 Authentication Flow

1. **Role Selection**: Users choose between User, Doctor, or Laboratory
2. **Registration**: Role-specific registration forms
3. **OTP Verification**: Email-based verification
4. **Dashboard Access**: Role-based dashboard redirection

## 🚦 Routing Structure

- `/` - Landing page
- `/sign-up` - Role selection for registration
- `/sign-up/{role}` - Role-specific registration
- `/login/{role}` - Role-specific login
- `/verify-otp` - OTP verification with role parameter
- `/{role}/dashboard` - Role-specific dashboards
- `/doctor` - Find doctors
- `/laboratory` - Book lab tests
- `/order-medicine` - Medicine ordering

## 🔄 State Management

Using Redux Toolkit for:
- Authentication state
- User data management
- API calls and caching
- Global application state

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Enhanced experience on tablets
- **Desktop**: Full-featured desktop experience
- **Touch Friendly**: Optimized for touch interactions

## 🎯 Key Features Implementation

### Multi-Role System
- Separate registration and login flows
- Role-based routing and permissions
- Customized dashboards per role

### Modern UI/UX
- Gradient backgrounds and buttons
- Smooth animations with Framer Motion
- Toast notifications for user feedback
- Loading states and error handling

### Professional Structure
- Clean folder organization
- Consistent naming conventions
- Modular component architecture
- Proper separation of concerns

## 🐛 Troubleshooting

### Common Issues

1. **Import Errors**: Ensure all paths use the new component structure
2. **Styling Issues**: Check Tailwind configuration and imports
3. **Routing Problems**: Verify Next.js App Router structure
4. **Build Errors**: Clear `.next` folder and reinstall dependencies

### Development Tips

- Use the browser dev tools for debugging
- Check console for error messages
- Verify environment variables are set correctly
- Ensure all dependencies are installed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Email: support@healthbooster.com
- Phone: +91 6394832414

---

**HealthBooster** - Your trusted healthcare partner 🏥
