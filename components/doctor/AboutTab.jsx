"use client";

export default function AboutTab({ doctor, doctorname }) {
  return (
    <div className="p-6 border rounded-lg bg-white shadow-md m-2">
      <h3 className="text-lg font-semibold mb-2">{doctorname}</h3>
      <p className="text-gray-600 mb-4">
        {doctorname} is a highly experienced cardiologist with over 15 years of practice.
        He specializes in interventional cardiology, heart disease prevention, and cardiac
        rehabilitation. He has performed over 1000+ successful cardiac procedures and is known
        for his patient-centric approach.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold mb-2">Education & Qualifications</h4>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>MBBS - King George Medical University, Lucknow (2008)</li>
            <li>MD Cardiology - AIIMS, Delhi (2012)</li>
            <li>Fellowship - Cleveland Clinic, USA (2014)</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Awards & Recognition</h4>
          <ul className="list-disc pl-5 text-gray-600 space-y-1">
            <li>Best Cardiologist Award - Mumbai Medical Association (2022)</li>
            <li>Excellence in Patient Care - Apollo Hospitals (2021)</li>
            <li>Research Excellence Award - Indian Medical Council (2020)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}