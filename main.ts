import { DoctorController } from "./controller/doctorController";
import { PatientController } from "./controller/patientController";
import { Slot } from "./model/slot";

const doctorController = new DoctorController();
const patientController = new PatientController();

const doc1 = doctorController.registerDoctor('Curious', 'Cardiologist');
const doc2 = doctorController.registerDoctor('Dreadful', 'Dermatologist');

const slot1 = new Slot(new Date(2024, 5, 15, 9, 0), new Date(2024, 5, 15, 9, 30));
const slot2 = new Slot(new Date(2024, 5, 15, 9, 30), new Date(2024, 5, 15, 10, 0));
const slot3 = new Slot(new Date(2024, 5, 15, 11, 30), new Date(2024, 5, 15, 12, 30));

doctorController.declareAvailability('Curious', slot1);
doctorController.declareAvailability('Curious', slot1);
doctorController.declareAvailability('Curious', slot2);
doctorController.declareAvailability('Dreadful', slot1);
doctorController.declareAvailability('Dreadful', slot3);

const patient1 = patientController.registerPaitent('PatientA');
const patient2 = patientController.registerPaitent('PatientB');
const patient3 = patientController.registerPaitent('PatientC');

let availableSlots = patientController.searchSlots('Cardiologist', doctorController.doctor);
//console.log('Available Slots:', availableSlots);

patientController.bookAppointment('PatientA', 'Dreadful', slot1, doctorController.doctor);
patientController.bookAppointment('PatientB', 'Dreadful', slot3, doctorController.doctor);
patientController.bookAppointment('PatientC', 'Dreadful', slot3, doctorController.doctor); 

patientController.viewAppointments('PatientA');
patientController.viewAppointments('PatientB');

availableSlots = patientController.searchSlots('Dermatologist', doctorController.doctor);
console.log('Available Slots:', availableSlots);


patientController.cancelAppointment('PatientA', 'Dreadful', slot1, doctorController.doctor);
patientController.cancelAppointment('PatientB', 'Dreadful', slot3, doctorController.doctor);
patientController.cancelAppointment('PatientC', 'Dreadful', slot3, doctorController.doctor);

availableSlots = patientController.searchSlots('Dermatologist', doctorController.doctor);
console.log('Available Slots:', availableSlots);


patientController.viewAppointments('PatientA');
patientController.viewAppointments('PatientB');