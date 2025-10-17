import DoctorAppointment from "@/components/doctor/DoctorAppointment";

export default function BookAppointment({ params }) {
  // params now contains: { speciality, location, doctorname, id }
  return (
    <div>
      <DoctorAppointment params={params} />
    </div>
  );
}