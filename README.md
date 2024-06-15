Functionalities required:
A new doctor should be able to register, and mention his/her speciality among (Cardiologist, Dermatologist, Orthopedic, General Physician)
A doctor should be able to declare his/her availability in each slot for the day. For example, the slots will be of 30 mins like 9am-9.30am, 9.30am-10am..
Patients should be able to login, and search available slots based on speciality.  
The slots should be displayed in a ranked fashion. Default ranking strategy should be to rank by start time. But we should be able to plugin more strategies like Doctor’s rating etc in future.
Patients should be able to book appointments with a doctor for an available slot.A patient can book multiple appointments in a day.  A patient cannot book two appointments with two different doctors in the same time slot.
Patients can also cancel an appointment, in which case that slot becomes available for someone else to book.
Build a waitlist feature:
If the patient wishes to book a slot for a particular doctor that is already booked, then add this patient to the waitlist. If the patient with whom the appointment is booked originally, cancels the appointment, then the first in the waitlist gets the appointment.
A patient/doctor should be able to view his/her booked appointments for the day.  
Doctors can’t provide overlapping slots.
Implementing login feature is optional
Patient registration is not mandatory
Name of Doctor and patient are their identifiers

Bonus functionality:
Trending Doctor: Maintain at any point of time which doctor has the most appointments.
Examples:
The input/output need not be exactly in this format but the functionality should remain intact

i: input     o: output
i:registerDoc -> Curious-> Cardiologist
o: Welcome Dr. Curious !!
i: markDocAvail: Curious 9:30-10:30
o: Sorry Dr. Curious slots are 30 mins only
i: markDocAvail: Curious 9:30-10:00, 12:30-13:00, 16:00-16:30
o: Done Doc!
i:registerDoc -> Dreadful-> Dermatologist
o: Welcome Dr. Dreadful !!
i: markDocAvail: Dreadful 10:30-11:00, 13:30-14:00, 17:00-17:30
o: Done Doc!
i: showAvailByspeciality: Cardiologist
o: Dr.Curious: (9:30-10:00)
o: Dr.Curious: (12:30-13:00)
o: Dr.Curious: (16:00-16:30)
i:  bookAppointment: (PatientA, Dr.Curious, 12:30)
O: Booked. Booking id: 1234
i:showAvailByspeciality: Cardiologist
o: Dr.Curious: (10:30-11:00)
o: Dr.Curious: (17:00-17:30)
I: cancelBookingId: 1234
O: Booking Cancelled
i: showAvailByspeciality: Cardiologist
o: Dr.Curious: (9:30-10:00)
o: Dr.Curious: (12:30-13:00)
o: Dr.Curious: (16:00-16:30)
i:  bookAppointment: (PatientB, Dr.Curious, 12:30)
o: Booked. Booking id: 5678
i:registerDoc -> Daring-> Dermatologist
o: Welcome Dr. Daring !!
i: markDocAvail: Daring 11:30-12:00 14:00-14:30
o: Done Doc!
i: showAvailByspeciality: Dermatologist
o: Dr.Dreadful: (9:30-10:00)
o: Dr.Daring: (11:30-12:00)
o: Dr.Dreadful: (12:30-13:00)
o:Dr.Daring:(14:00-14:30)
o: Dr.Dreadful: (16:00-16:30)
