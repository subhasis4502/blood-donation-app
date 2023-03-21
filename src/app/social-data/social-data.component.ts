import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-social-data',
  templateUrl: './social-data.component.html',
  styleUrls: ['./social-data.component.css']
})

export class SocialDataComponent {
  rows = [
    ['Md rockibul hossain', " ", 'Chattogram Medical College Hospital', 'A+', '450ml', 'Receiver', '4/1/2022', 'Yes', '01880-943489', "Facebook", "No"],
    ["Mary mutua", " ", "Aghakan Mombasa hospital", "O-", "500ml", "Receiver", "22/5/2019", "Yes", "7996824980", "Facebook", "No"],
    ["Govind bisht", " ", "Lucknow", "A-", "200ml", "Receiver", "5/1/2023", "Yes", "8738990986", "Facebook", "No"],
    ["Mohamad Ridwan", " ", "Apollo", "O-", "800ml", "Receiver", "21/02/2017", "No", "8286574816", "Facebook", "No"],
    ["Mehndi hassan", " ", "National Heart Foundation Hospital", "A+", "900ml", "Receiver", "02/10/2022", "No", "9156659090", "Facebook", "No"],
    ["Nazrin Fazal", " ", "Regional Cancer Center", "B+", "2000ml", "Receiver", "05/01/2023", "Yes", "9360187261", "Facebook", "No"],
    ["Rohan Shah", " ", "BLK Super Speciality Hospital New Delhi", "O+", "500ml", "Receiver", "12/10/2022", "Yes", "9012345678", "Facebook", "No"],
    ["Aryan Patel", " ", "Amrita Institute of Medical Sciences Kochi", "AB-", "1000ml", "Receiver", "25/08/2022", "No", "9456789012", "Facebook", "No"],
    ["Kavya Sharma", " ", "TOOR HOSPITAL", "B+", "350ml", "Receiver", "14/07/2022", "No", "8345678901", "Facebook", "No"],
    ["Dhruv Gupta", " ", "Apollo Hospitals", "O-", "200ml", "Receiver", "01/01/2022", "Yes", "7845678901", "Facebook", "No"],
    ["Manisha Kumari", " ", "Yashoda Hospitals", "A-", "400ml", "Receiver", "18/05/2022", "No", "7823456789", "Facebook", "No"],
    ["Sumit Singh", " ", "Tagore Heart Care & Research Centre", "AB+", "750ml", "Receiver", "22/09/2022", "No", "8934567890", "Facebook", "No"],
    ["Rajesh Kumar", " ", "Apollo Hospitals Patna", "B-", "250ml", "Receiver", "31/03/2022", "No", "7557586697", "Facebook", "No"],
    ["Shweta Patil", " ", "AESHRAT NURSING HOME", "A+", "600ml", "Receiver", "10/11/2022", "No", "8135897642", "Facebook", "No"],
    ["Avni Mehta", " ", "Government Medical College - Kozhikode", "O+", "300ml", "Receiver", "20/06/2022", "No", "7326397690", "Facebook", "No"],
    ["Harsh Gupta", " ", "Medanta - The Medicity Gurugram", "AB-", "800ml", "Receiver", "29/02/2022", "No", "8681487231", "Facebook", "No"],
    ["Jay Patel", " ", "Government Medical College - Malappuram", "B+", "550ml", "Receiver", "08/12/2022", "Yes", "7897456789", "Facebook", "No"],
    ["Mukesh Kumar", "Apollo Hospitals Kozhikode", "O-", "700ml", "Receiver", "05/04/2022", "No", "7923456789", "Facebook", "No"],
    ["Smita Patel", "St. John's Medical College and Hospital", "A-", "1000ml", "Receiver", "15/02/2022", "No", "6324000548", "Facebook", "No"],
    ["Suresh Yadav", "Chettinad Health City", "AB+", "850ml", "Receiver", "03/08/2022", "No", "7724830690", "Facebook", "No"],
    ["Ritu Sharma", "Artemis Hospital Gurgaon", "B-", "600ml", "Receiver", "12/09/2022", "No", "7923456789", "Facebook", "No"],
    ["Ravi Chauhan", "APOLLO PANKAJ HOSPITALS", "A+", "800ml", "Receiver", "21/07/2022", "No", "7923456789", "Facebook", "No"],
    ["Rupali Patil", "NANKEM HOSPITAL", "O+", "400ml", "Receiver", "01/05/2022", "No", "9211739203", "Facebook", "No"],
    ["Aryan Patel", "Medical Trust Hospital", "AB-", "500ml", "Receiver", "17/03/2022", "No", "8123456789", "Facebook", "No"],
    ["Kavya Sharma", "Kanpur Medical Centre", "B+", "550ml", "Receiver", "25/06/2022", "No", "9456789012", "Facebook", "No"],
    ["Dhruv Gupta", "Government Medical College - Junagadh", "O-", "600ml", "Receiver", "14/07/2022", "Yes", "7823456789", "Facebook", "No"],
    ["Manisha Kumari", "Government Medical College - Alappuzha", "A-", "700ml", "Receiver", "01/09/2022", "No", "7123456789", "Facebook", "No"],
    ["Sumit Singh", "Apollo Hospitals Dehradun", "AB+", "800ml", "Receiver", "22/10/2022", "No", "7901234567", "Facebook", "No"],
    ["Rajesh Kumar", "Apollo Hospitals Guwahati", "B-", "900ml", "Receiver", "31/12/2022", "No", "7123456789", "Facebook", "No"],
    ["Rishi Shah", "St. John's Medical College and Hospital Bengaluru", "O+", "250ml", "Receiver", "12/08/2022", "Yes", "8123456789", "Facebook", "No"],
    ["Aishwarya Patel", "Artemis Hospitals Gurugram", "B+", "500ml", "Receiver", "15/09/2022", "No", "8123456789", "Facebook", "No"],
    ["Kunal Gupta", "Manipal Hospitals Bengaluru", "AB+", "400ml", "Receiver", "20/09/2022", "Yes", "7095208784", "Facebook", "No"],
    ["Srikanth Nair", "Prashanth Super Speciality Hospital Chennai", "A+", "350ml", "Receiver", "25/09/2022", "No", "8725402376", "Facebook", "No"],
    ["Geetha Murthy", "Sri Ramachandra Medical College and Research Institute Chennai", "O-", "200ml", "Receiver", "30/09/2022", "No", "7461829307", "Facebook", "No"],
    ["Anand Sharma", "BALAJI HOSPITAL", "B-", "250ml", "Receiver", "05/10/2022", "Yes", "6869161921", "Facebook", "No"],
    ["Saira Khan", "Apollo Hospitals Navi Mumbai", "AB-", "300ml", "Receiver", "10/10/2022", "No", "8561234569", "Facebook", "No"],
    ["Rohit Mishra", "Apollo Speciality Hospitals", "A-", "350ml", "Receiver", "15/10/2022", "No", "8789878877", "Facebook", "No"],
    ["Megha Verma", "P.D. Hinduja National Hospital and Medical Research Centre", "O+", "400ml", "Receiver", "20/10/2022", "Yes", "9638456790", "Facebook", "No"],
    ["Aditya Rana", "SARWAMANGALA NURSING HOME", "B+", "500ml", "Receiver", "25/10/2022", "No", "7923456789", "Facebook", "No"],
    ["Rohan Desai", "P D Hinduja National Hospital and Medical Research Centre", "AB+", "250ml", "Receiver", "12/08/2022", "No", "9456789023", "Facebook", "No"],
    ["Parul Shah", "K J Somaiya Hospital", "A+", "200ml", "Receiver", "15/09/2022", "No", "7856789012", "Facebook", "No"],
    ["Rajat Agarwal", "JANANII HOSPITAL", "O-", "400ml", "Receiver", "20/09/2022", "No", "8014309753", "Facebook", "No"],
    ["Rupa Gupta", "Cloudnine Hospitals", "B-", "250ml", "Receiver", "25/09/2022", "No", "9890123456", "Facebook", "No"],
    ["Savitri Kaul", "Rainbow Children’s Hospital Hyderabad", "AB-", "350ml", "Receiver", "30/09/2022", "No", "9234567890", "Facebook", "No"],
    ["Sanjay Mehta", "Pushpawati Singhania Research Institute New Delhi", "A-", "400ml", "Receiver", "05/10/2022", "No", "7923456789", "Facebook", "No"],
    ["Sameer Desai", "Jeevan Jyoti Hospital", "O+", "250ml", "Receiver", "10/10/2022", "No", "9878898787", "Facebook", "No"],
    ["Rajesh Patel", "Criti Care Asia Multispeciality Hospital", "B+", "200ml", "Receiver", "15/10/2022", "No", "8789012345", "Facebook", "No"],
    ["Nandini Sharma", "Jeevan Jyoti Hospital", "AB+", "400ml", "Receiver", "20/10/2022", "No", "7823456789", "Facebook", "No"],
    ["Priya Jain", "MATHRU NURSING HOME", "A+", "250ml", "Receiver", "25/10/2022", "No", "8956712348", "Facebook", "No"],
    ["Rahul Shah", "KMC Hospital Mangaluru", "O-", "400ml", "Receiver", "12/08/2022", "No", "9678901234", "Facebook", "No"],
    ["Suresh Patel", "Fortis Memorial Research Institute", "B-", "250ml", "Receiver", "15/09/2022", "No", "8456789023", "Facebook", "No"],
    ["Priyanka Sharma", "Sancheti Institute for Orthopaedics and Rehabilitation", "AB-", "350ml", "Receiver", "20/09/2022", "No", "7570020612", "Facebook", "No"],
    ["Rohan Sharma", "Medanta Hospital Lucknow", "B+", "500ml", "Receiver", "12/05/2022", "Yes", "7891234567", "Facebook", "No"],
    ["Suresh Patel", "Hinduja Hospital Mumbai", "O+", "450ml", "Receiver", "15/05/2022", "No", "9789012345", "Facebook", "No"],
    ["Alok Gupta", "VIDYA MEMORIAL KANWAL HOSPITAL", "A-", "300ml", "Receiver", "18/05/2022", "No", "6635646904", "Facebook", "No"],
    ["Megha Kaur", "Amrita Institute of Medical Sciences and Research Centre Kochi", "AB+", "600ml", "Receiver", "20/05/2022", "Yes", "7823456789", "Facebook", "No"],
    ["Praveen Kumar", "Bangalore Children’s Hospital", "B-", "250ml", "Receiver", "21/05/2022", "No", "7923456789", "Facebook", "No"],
    ["Jitendra Singh", "Fortis Hospital Kolkata", "O-", "300ml", "Receiver", "22/05/2022", "No", "7823456789", "Facebook", "No"],
    ["Rekha Dhaliwal", "Amri Hospitals Ltd", "A+", "400ml", "Receiver", "25/05/2022", "No", "7698041528", "Facebook", "No"],
    ["Nitesh Jain", "Kailash Hospital Noida", "AB-", "500ml", "Receiver", "27/05/2022", "No", "9745123860", "Facebook", "No"],
    ["Neha Patil", "Government Medical College - Bhavnagar", "B+", "300ml", "Receiver", "28/05/2022", "Yes", "7382946105", "Facebook", "No"],
    ["Vikas Mehta", "Jaslok Hospital and Research Centre Mumbai", "O+", "250ml", "Receiver", "29/05/2022", "No", "8491790359", "Facebook", "No"],
    ["Kavita Verma", "SRI RAM HOSPITAL", "AB-", "350ml", "Receiver", "29/06/2022", "No", "8102270264", "Facebook", "No"],
    ["Rohan Gupta", "Government Medical College - Thrissur", "O+", "350ml", "Receiver", "01/01/2022", "Yes", "9234567890", "Facebook", "No"],
    ["Priya Sharma", "BHANDARE HOSPITAL", "AB-", "450ml", "Receiver", "02/01/2022", "No", "7892123456", "Facebook", "No"],
    ["Ankit Patel", "BIMR HOSPITALS", "B+", "200ml", "Receiver", "03/01/2022", "No", "7923456789", "Facebook", "No"],
    ["Megha Shah", "Government Medical College - Porbandar", "A-", "250ml", "Receiver", "04/01/2022", "Yes", "7892890234", "Facebook", "No"],
    ["Sachin Jain", "Manipal Hospital", "O-", "400ml", "Receiver", "05/01/2022", "No", "8362914875", "Facebook", "No"],
    ["Nandini Patel", "Dr. L H Hiranandani Hospital Mumbai", "AB+", "300ml", "Receiver", "06/01/2022", "Yes", "8590032146", "Facebook", "No"],
    ["Rupesh Sharma", "DHARWADKAR NURSING HOME", "A+", "200ml", "Receiver", "07/01/2022", "No", "7934657899", "Facebook", "No"],
    ["Diya Patel", "GAUTAM NURSING HOME", "B-", "250ml", "Receiver", "08/01/2022", "Yes", "8678901234", "Facebook", "No"],
    ["Arjun Gupta", "Wockhardt Hospitals", "O+", "400ml", "Receiver", "09/01/2022", "No", "7823456789", "Facebook", "No"],
    ["Shruti Desai", "GOOD HEALTH HOSPITAL", "AB-", "300ml", "Receiver", "10/01/2022", "Yes", "7874563899", "Facebook", "No"],
    ["Rajesh Sharma", "Apollo Hospitals Ahmedabad", "AB+", "500ml", "Receiver", "01/02/2022", "No", "7642918356", "Facebook", "No"],
    ["Priya Patel", "DEVADOSS MULTISPECIALITY HOSPITAL", "O+", "350ml", "Receiver", "12/03/2022", "No", "7123456789", "Facebook", "No"],
    ["Suresh Kumar", "KPC Medical College and Hospital", "B+", "450ml", "Receiver", "25/05/2022", "No", "7492116573", "Facebook", "No"],
    ["Meena Gupta", "Artemis Hospitals", "A-", "250ml", "Receiver", "30/06/2022", "No", "7123456789", "Facebook", "No"],
    ["Anil Verma", "Manipal Hospitals Bengaluru", "O-", "200ml", "Receiver", "05/07/2022", "No", "8492760351", "Facebook", "No"],
    ["Harish Patel", "ASOPA HOSPITAL & RESEARCH CENTRE", "AB-", "300ml", "Receiver", "15/08/2022", "No", "8367549120", "Facebook", "No"],
    ["Rupa Shah", "Sagar Apollo Hospital", "A+", "400ml", "Receiver", "20/09/2022", "No", "7823456789", "Facebook", "No"],
    ["Ramesh Sharma", "Apollo Hospitals Lucknow", "B-", "150ml", "Receiver", "05/10/2022", "No", "7899901234", "Facebook", "No"],
    ["Swati Patel", "RAJAN HOSPITAL AND HEART CENTRE", "AB+", "600ml", "Receiver", "10/11/2022", "No", "9567890123", "Facebook", "No"],
    ["Rohit Gupta", "Apollo Hospitals Chennai", "O+", "500ml", "Receiver", "01/12/2022", "No", "7823456789", "Facebook", "No"],
    ["Sunil Sharma", "KALYANI HOSPITAL PVT.LTD", "B+", "550ml", "Receiver", "05/01/2022", "No", "7123456789", "Facebook", "No"],
    ["Shweta Patel", "Narayana Health", "A-", "300ml", "Receiver", "10/02/2022", "No", "8761234569", "Facebook", "No"],
    ["Mukesh Gupta", "Apollo Hospitals Coimbatore", "O-", "250ml", "Receiver", "15/03/2022", "No", "9456789021", "Facebook", "No"],
    ["Vipul Shah", "Apollo Hospitals Hyderabad", "AB-", "400ml", "Receiver", "20/04/2022", "No", "8902806315", "Facebook", "No"],
    ["Sonali Patel", "Government Medical College - Palakkad", "A+", "450ml", "Receiver", "25/05/2022", "No", "7234567890", "Facebook", "No"],
    ["Rupesh Sharma", "Amrita Institute of Medical Sciences", "B-", "200ml", "Receiver", "30/06/2022", "No", "7893890234", "Facebook", "No"],
    ["Preeti Gupta", "Government Medical College - Surat", "AB+", "550ml", "Receiver", "05/07/2022", "No", "8879456120", "Facebook", "No"],
    ["Neha Patel", "CMC Vellore Vellore", "O+", "500ml", "Receiver", "10/08/2022", "No", "7123456789", "Facebook", "No"],
    ["Mayank Sharma", "THE BANGALORE HOSPITAL", "B+", "600ml", "Receiver", "15/09/2022", "No", "7878901234", "Facebook", "No"],
    ["Kavita Gupta", "Gleneagles Global Hospitals Chennai", "A-", "350ml", "Receiver", "20/10/2022", "No", "9431827650", "Facebook", "No"],
    ["Jay Patel", "MEERA NURSING HOME", "O-", "300ml", "Receiver", "25/11/2022", "No", "9023456789", "Facebook", "No"],
    ["Gaurav Sharma", "Sancheti Institute for Orthopaedics and Rehabilitation", "AB-", "450ml", "Receiver", "30/12/2022", "No", "7156839402", "Facebook", "No"],
    ["Dipti Patel", "King George's Medical University (KGMU) - Lucknow", "A+", "400ml", "Receiver", "05/01/2022", "No", "7834657899", "Facebook", "No"],
    ["Chirag Gupta", "KRUPALU NURSING HOME", "B-", "250ml", "Receiver", "10/02/2022", "No", "8902345678", "Facebook", "No"],
    ["Rajesh Patel", "NIRAMOY NURSING HOME", "B+", "500ml", "Receiver", "15/07/2022", "No", "7834567890", "Facebook", "No"],
    ["Priya Sharma", "Yashoda Super Speciality Hospital", "O+", "250ml", "Receiver", "25/05/2022", "Yes", "5678902345", "Facebook", "No"],
    ["Vikram Gupta", "Mallya Apollo Hospital", "AB-", "350ml", "Receiver", "12/09/2022", "No", "7823456789", "Facebook", "No"],
    ["Suresh Kumar", "Government Medical College - Bhuj", "A+", "400ml", "Receiver", "01/01/2023", "Yes", "7823456789", "Facebook", "No"],
    ["Rina Shah", "Apollo Hospitals Nagpur", "B-", "450ml", "Receiver", "20/03/2022", "No", "9345678901", "Facebook", "No"],
    ["Anjali Jain", "Curie Manavata Cancer Centre", "O-", "300ml", "Receiver", "11/12/2022", "No", "7897789023", "Facebook", "No"],
    ["Mohit Chauhan", "Yashoda Hospitals Hyderabad", "AB+", "550ml", "Receiver", "03/06/2022", "Yes", "7867890123", "Facebook", "No"],
    ["Manisha Tripathi", "HARLEY RAM NURSING HOME", "A-", "200ml", "Receiver", "02/07/2022", "No", "7234567890", "Facebook", "No"],
    ["Rishi Rana", "Government Medical College - Surat", "B+", "750ml", "Receiver", "18/08/2022", "Yes", "8957013432", "Facebook", "No"],
    ["Ankit Desai", "Breach Candy Hospital", "O+", "400ml", "Receiver", "10/10/2022", "No", "9365897021", "Facebook", "No"],
    ["Rajesh Patel", "RADHAKRISHNAN HOSPITAL", "O+", "500ml", "Receiver", "01/03/2022", "No", "9567892340", "Facebook", "No"],
    ["Sangeeta Sharma", "SANJEEVANI HILL NURSING HOME", "B-", "200ml", "Receiver", "02/05/2022", "Yes", "7823456789", "Facebook", "No"],
    ["Anil Verma", "Medanta - The Medicity", "AB+", "300ml", "Receiver", "20/02/2022", "No", "9641234567", "Facebook", "No"],
    ["Vidya Gupta", "Global Hospitals Mumbai", "O-", "400ml", "Receiver", "03/01/2022", "No", "8792468173", "Facebook", "No"],
    ["Ramesh Kumar", "Fortis Memorial Research Institute Gurgaon", "A+", "250ml", "Receiver", "15/03/2022", "No", "9208461379", "Facebook", "No"],
    ["Radha Mehta", "Moolchand Medcity", "B+", "350ml", "Receiver", "02/04/2022", "No", "7823456789", "Facebook", "No"],
    ["Kiran Gupta", "AASTHA LOK HOSPITAL PVT.LTD", "O+", "400ml", "Receiver", "05/06/2022", "Yes", "7123456789", "Facebook", "No"],
    ["Vikas Sharma", "JIBAN DHARA HOSPITAL", "A-", "200ml", "Receiver", "15/04/2022", "No", "9581234567", "Facebook", "No"],
    ["Sneha Patel", "BRIJ MEDICAL CENTRE", "AB-", "250ml", "Receiver", "03/02/2022", "No", "8901234567", "Facebook", "No"],
    ["Ashok Verma", "Apollo Hospitals Agra", "B+", "300ml", "Receiver", "20/01/2022", "Yes", "7923456789", "Facebook", "No"],
    ["Rajesh Kumar", "AASTHA KIDNEY & SUPER SPECIALITY HOSPITAL", "O+", "500ml", "Receiver", "02/07/2022", "No", "8234567890", "Facebook", "No"],
    ["Mukesh Sharma", "SRINIBAS NURSING HOME", "A-", "250ml", "Receiver", "01/05/2022", "No", "7896890234", "Facebook", "No"],
    ["Shruti Patel", "HARISH HOSPITAL PVT LTD", "AB+", "300ml", "Receiver", "25/03/2022", "No", "6789023456", "Facebook", "No"],
    ["Shweta Gupta", "JIBAN DHARA HOSPITAL", "O-", "400ml", "Receiver", "20/02/2022", "No", "9567890234", "Facebook", "No"],
    ["Deepak Sharma", "Columbia Asia Hospitals", "B+", "350ml", "Receiver", "05/01/2022", "No", "8912345678", "Facebook", "No"],
    ["Monika Mehta", "Tata Memorial Hospital", "A+", "250ml", "Receiver", "10/03/2022", "No", "7893234567", "Facebook", "No"],
    ["Rakesh Patel", "KIMS Hospital Secunderabad", "AB-", "250ml", "Receiver", "02/05/2022", "Yes", "9389561072", "Facebook", "No"],
    ["Sandhya Sharma", "Narayana Health", "O+", "400ml", "Receiver", "15/04/2022", "No", "9234567890", "Facebook", "No"],
    ["Rishabh Gupta", "BGS Global Hospitals Bengaluru", "B+", "300ml", "Receiver", "01/03/2022", "No", "7789012345", "Facebook", "No"],
    ["Anurag Verma", "Government Medical College - Vadodara", "A-", "200ml", "Receiver", "02/07/2022", "No", "7345678901", "Facebook", "No"],
    ["Rohan Sharma", "Manipal Hospital Jaipur", "B+", "500ml", "Receiver", "20/06/2022", "Yes", "7898890123", "Facebook", "No"],
    ["Aayush Gupta", "Apollo Hospitals Varanasi", "O-", "250ml", "Receiver", "15/03/2022", "No", "6557811665", "Facebook", "No"],
    ["Neha Patel", "Sir Ganga Ram Hospital", "A+", "350ml", "Receiver", "10/08/2022", "Yes", "7895890234", "Facebook", "No"],
    ["Shruti Jain", "NN MEMORIAL HOSPITAL", "AB+", "450ml", "Receiver", "25/12/2021", "No", "9345678901", "Facebook", "No"],
    ["Vikram Singh", "Apollo Hospitals Chennai", "B-", "100ml", "Receiver", "01/01/2022", "Yes", "7234567890", "Facebook", "No"],
    ["Priya Shah", "Rainbow Hospitals Hyderabad", "O+", "200ml", "Receiver", "20/02/2022", "No", "7123456789", "Facebook", "No"],
    ["Anuj Verma", "Apollo Hospitals Vellore", "A-", "300ml", "Receiver", "30/05/2022", "Yes", "8569594398", "Facebook", "No"],
    ["Deepak Sharma", "Anandlok Hospital", "AB-", "400ml", "Receiver", "15/07/2022", "No", "7893456789", "Facebook", "No"],
    ["Dhruv Patel", "Max Healthcare New Delhi", "B+", "500ml", "Receiver", "31/08/2022", "Yes", "9123465873", "Facebook", "No"],
    ["Rashi Mehta", "Apollo Hospitals Jaipur", "O-", "250ml", "Receiver", "15/09/2022", "No", "6168204470", "Facebook", "No"],
    ["Ashish Gupta", "Sri Ramachandra Medical College and Research Institute Chennai", "A+", "350ml", "Receiver", "20/10/2022", "No", "7890678912", "Facebook", "No"],
    ["Tanvi Jain", "SHANTI VED HOSPITAL", "AB+", "450ml", "Receiver", "30/11/2022", "No", "7923456789", "Facebook", "No"],
    ["Arjun Singh", "Dr. Rela Institute and Medical Centre", "B-", "100ml", "Receiver", "10/12/2022", "No", "7123456789", "Facebook", "No"],
    ["Manish Patel", "Bhagawan Mahaveer Jain Hospital", "O+", "200ml", "Receiver", "20/12/2022", "No", "6946997560", "Facebook", "No"],
    ["Sonia Verma", "Government Medical College - Wayanad", "A-", "300ml", "Receiver", "30/12/2022", "No", "8923456789", "Facebook", "No"],
    ["Rajesh Sharma", "Apollo Speciality Hospitals Chennai", "AB-", "400ml", "Receiver", "31/12/2022", "No", "7123456789", "Facebook", "No"],
    ["Dev Patel", "KEM Hospital Mumbai", "B+", "500ml", "Receiver", "02/01/2023", "No", "8234567890", "Facebook", "No"],
    ["Ria Mehta", "Bangur Medicare Research Institute", "O-", "250ml", "Receiver", "10/01/2021", "No", "7823456789", "Facebook", "No"],
    ["Harsh Gupta", "Manipal Hospitals Dwarka", "A+", "350ml", "Receiver", "20/01/2021", "No", "9012345678", "Facebook", "No"],
    ["Manvi Jain", "Manipal Hospitals", "AB+", "450ml", "Receiver", "30/01/2021", "No", "8235487612", "Facebook", "No"],
    ["Rohan Sharma", "Government Medical College - Jamnagar", "O+", "500ml", "Receiver", "15/01/2021", "No", "9345678901", "Facebook", "No"],
    ["Avni Patel", "N. G. NURSING HOME", "B+", "100ml", "Receiver", "20/01/2021", "Yes", "9778989887", "Facebook", "No"],
    ["Manish Kaur", "Medanta - The Medicity", "AB-", "200ml", "Receiver", "25/01/2022", "No", "7567890123", "Facebook", "No"],
    ["Priya Gupta", "NEW LIFE NURSING HOME", "A+", "300ml", "Receiver", "30/01/2021", "No", "7898567891", "Facebook", "No"],
    ["Gaurav Sharma", "Bangalore Baptist Hospital Bengaluru", "O-", "400ml", "Receiver", "01/02/2022", "Yes", "7414207534", "Facebook", "No"],
    ["Aryan Patel", "Global Hospitals Mumbai", "B-", "500ml", "Receiver", "05/02/2021", "No", "7790640758", "Facebook", "No"],
    ["Shruti Gupta", "KIMS Hospital Thiruvananthapuram", "AB+", "600ml", "Receiver", "10/02/2022", "No", "7923456789", "Facebook", "No"],
    ["Rishabh Kaur", "ANAND MULTISPECIALITY HOSPITAL", "A-", "700ml", "Receiver", "15/02/2021", "No", "7712735719", "Facebook", "No"],
    ["Neha Sharma", "PRITI HOSPITAL", "O+", "800ml", "Receiver", "20/02/2021", "Yes", "8880108393", "Facebook", "No"],
    ["Karan Patel", "Government Medical College and Hospital (GMCH) - Chandigarh", "B+", "900ml", "Receiver", "25/02/2021", "No", "7894234567", "Facebook", "No"],
    ["Meera Gupta", "AIIMS New Delhi", "AB-", "1000ml", "Receiver", "01/03/2021", "No", "6713482043", "Facebook", "No"],
    ["Ria Sharma", "S L Raheja Hospital", "A+", "1100ml", "Receiver", "05/03/2021", "No", "7123456789", "Facebook", "No"],
    ["Harsh Patel", "Fortis Hospital Mumbai", "O-", "1200ml", "Receiver", "10/03/2022", "Yes", "7923456789", "Facebook", "No"],
    ["Kavya Kaur", "Global Hospitals Hyderabad", "B-", "1300ml", "Donor", "15/03/2021", "No", "8024366225", "Facebook", "No"],
    ["Dhruv Sharma", "Apollo Hospitals Enterprise Limited", "AB+", "1400ml", "Receiver", "20/03/2022", "No", "8345678901", "Facebook", "No"],
    ["Sangeeta Patel", "AIIMS", "A-", "1500ml", "Receiver", "25/03/2021", "No", "8584712309", "Facebook", "No"],
    ["Rajat Sharma", "Global Hospitals", "O+", "1600ml", "Receiver", "30/03/2021", "Yes", "9123456789", "Facebook", "No"],
    ["Nidhi Patel", "Apex Institute Of Medical Sciences.", "B+", "1700ml", "Receiver", "05/04/2021", "No", "7234657899", "Facebook", "No"],
    ["Varun Gupta", "PUNATAR HOSPITAL", "AB-", "1800ml", "Receiver", "10/04/2022", "No", "7890234567", "Facebook", "No"],
    ["Rohit Kaur", "Government Medical College - Vadodara", "A+", "1900ml", "Receiver", "15/04/2022", "No", "9567890123", "Facebook", "No"],
    ["Rohan Gupta", "SAHAYOG HOSPITAL", "A+", "500ml", "Receiver", "15/06/2021", "No", "9072365841", "Facebook", "No"],
    ["Priya Patel", "JOSEPH HOSPITAL", "B-", "200ml", "Receiver", "05/09/2021", "Yes", "7123456789", "Facebook", "No"],
    ["Anjali Sharma", "Kokilaben Dhirubhai Ambani Hospital Mumbai", "AB+", "100ml", "Receiver", "21/03/2021", "No", "7923456789", "Facebook", "No"],
    ["Vikram Singh", "Apollo Hospitals Meerut", "O+", "800ml", "Receiver", "12/07/2022", "Yes", "7123456789", "Facebook", "No"],
    ["Suresh Kumar", "Sir Ganga Ram Hospital New Delhi", "A-", "600ml", "Donor", "02/01/2021", "No", "6012396992", "Facebook", "No"],
    ["Meena Shah", "Wockhardt Hospitals", "B+", "400ml", "Receiver", "09/04/2022", "No", "7401692835", "Facebook", "No"],
    ["Rajesh Patel", "CDR Hospitals", "O-", "1000ml", "Receiver", "22/08/2022", "Yes", "8345678901", "Facebook", "No"],
    ["Neha Gupta", "SHARANYA HOSPITAL", "AB-", "800ml", "Receiver", "17/12/2021", "No", "9567382941", "Facebook", "No"],
    ["Ashok Sharma", "Government Medical College - Rajkot", "A+", "600ml", "Receiver", "30/05/2022", "No", "7923456789", "Facebook", "No"],
    ["Radha Patel", "City Hospital", "B-", "400ml", "Receiver", "20/10/2022", "No", "7891012345", "Facebook", "No"],
    ["Harinder Singh", "CITY NURSING HOME PVT. LTD.", "AB+", "500ml", "Receiver", "08/02/2022", "No", "7834567890", "Facebook", "No"],
    ["Shilpa Shah", "Government Medical College - Idukki", "O+", "300ml", "Receiver", "18/06/2022", "No", "8335982281", "Facebook", "No"],
    ["Pradeep Kumar", "PRAYOSHA HOSPITAL", "A-", "800ml", "Receiver", "25/11/2021", "No", "7456789023", "Facebook", "No"],
    ["Arun Gupta", "Max Healthcare Delhi", "B+", "700ml", "Receiver", "15/03/2022", "No", "7895345678", "Facebook", "No"],
    ["Pallavi Sharma", "Narayana Hrudayalaya Bengaluru", "O-", "600ml", "Receiver", "22/07/2022", "No", "8456789021", "Facebook", "No"],
    ["Rajesh Patel", "DUM DUM MEDICAL CENTRE", "AB-", "500ml", "Receiver", "01/12/2021", "No", "7912345678", "Facebook", "No"],
    ["Santosh Gupta", "DEEP HOSPITAL AND RESEARCH CENTRE", "A+", "400ml", "Receiver", "12/04/2022", "No", "8971234568", "Facebook", "No"],
    ["Geeta Patel", "Christian Medical College Vellore", "B-", "300ml", "Receiver", "21/09/2022", "No", "9087654321", "Facebook", "No"],
    ["Pramod Singh", "Nanavati Super Speciality Hospital Mumbai", "AB+", "200ml", "Receiver", "05/02/2022", "No", "7180564127", "Facebook", "No"],
    ["Sunil Sharma", "Medanta Hospital Indore", "O+", "100ml", "Receiver", "15/08/2022", "No", "7864019832", "Facebook", "No"],
    ["Rajesh Patel", "SHREE SIDDHIVINAYK HOSPITAL", "O+", "500ml", "Receiver", "01/03/2022", "No", "7987654312", "Facebook", "No"],
    ["Priya Sharma", "Apollo Hospitals Surat", "B-", "200ml", "Receiver", "03/05/2022", "Yes", "8687843210", "Facebook", "No"],
    ["Vikas Gupta", "BLK Super Speciality Hospital New Delhi", "A+", "300ml", "Receiver", "05/07/2022", "No", "8987654321", "Facebook", "No"],
    ["Sangeeta Verma", "NETAJI NURSING HOME & DIAGNOSTIC CENTRE", "AB+", "200ml", "Receiver", "07/09/2022", "No", "8567890234", "Facebook", "No"],
    ["Rakesh Kumar", "Government Medical College - Ernakulam", "O-", "300ml", "Receiver", "09/11/2022", "Yes", "9751234568", "Facebook", "No"],
    ["Asha Sharma", "MEDICARE NURSING HOME- PURBA MEDINIPUR", "B+", "500ml", "Receiver", "11/01/2022", "No", "9023456789", "Facebook", "No"],
    ["Surendra Singh", "KIMS Hospitals Hyderabad", "A-", "200ml", "Receiver", "01/03/2022", "No", "7923456789", "Facebook", "No"],
    ["Neha Gupta", "Apollo Cradle Hospitals", "AB-", "300ml", "Receiver", "03/05/2022", "No", "7823456789", "Facebook", "No"],
    ["Shweta Patel", "Apollo Hospitals Rajkot", "O+", "200ml", "Receiver", "05/07/2022", "Yes", "7872345689", "Facebook", "No"],
    ["Rishi Verma", "SURAKSHA CHILDREN HOSPITAL", "B-", "500ml", "Receiver", "07/09/2022", "No", "9274835610", "Facebook", "No"],
    ["Jyoti Sharma", "DEBNATH HOSPITAL", "A+", "300ml", "Receiver", "09/11/2022", "No", "7567890234", "Facebook", "No"],
    ["Rajesh Kumar", "Narayana Health Bengaluru", "AB+", "200ml", "Receiver", "11/01/2022", "No", "7987654123", "Facebook", "No"],
    ["Suresh Gupta", "SHANTI VED HOSPITAL", "O-", "300ml", "Receiver", "01/03/2022", "No", "9678901234", "Facebook", "No"],
    ["Preeti Verma", "ARYAN HOSPITAL PVT. LTD", "B+", "500ml", "Receiver", "03/05/2022", "No", "7123456789", "Facebook", "No"],
    ["Manish Patel", "AMALA NURSING HOME", "A-", "200ml", "Receiver", "05/07/2022", "No", "7987651432", "Facebook", "No"],
    ["Deepak Sharma", "MULTI CARE HOSPITAL", "AB-", "300ml", "Receiver", "07/09/2022", "No", "7823456789", "Facebook", "No"],
    ["Dhruv Gupta", "KEM Hospital", "O+", "200ml", "Receiver", "09/11/2022", "No", "8798788789", "Facebook", "No"],
    ["Aditi Sharma", "Apollo Spectra Hospitals", "B-", "200ml", "Receiver", "11/01/2022", "No", "9836275410", "Facebook", "No"],
    ["Rishi Patel", "Global Hospitals Hyderabad", "A+", "200ml", "Receiver", "01/03/2022", "No", "7456789021", "Facebook", "No"],
    ["Shweta Verma", "Rajendra Institute of Medical Sciences (RIMS) - Ranchi", "AB+", "200ml", "Receiver", "03/05/2022", "No", "7896341250", "Facebook", "No"],
    ["Rajesh Kumar", "SHANTI VED HOSPITAL", "O-", "200ml", "Receiver", "05/07/2022", "No", "9234567890", "Facebook", "No"],
    ["Suresh Gupta", "TANTIA HOSPITAL", "B+", "200ml", "Receiver", "07/09/2022", "No", "7024833199", "Facebook", "No"],
    ["Preeti Patel", "Narayana Health Bengaluru", "A-", "200ml", "Receiver", "09/11/2022", "No", "9567890123", "Facebook", "No"],
    ["Manish Sharma", "Max Healthcare", "AB-", "200ml", "Receiver", "11/01/2022", "No", "8781209654", "Facebook", "No"],
    ["Deepak Gupta", "SAHANA HOSPITAL", "O+", "200ml", "Receiver", "01/03/2022", "No", "8234567890", "Facebook", "No"],
    ["Rohan Patel", "Medica Superspecialty Hospital", "B+", "500ml", "Donor", "25/05/2022", "No", "7102647938", "Facebook", "No"],
    ["Meera Shah", "Apollo Hospitals Navi Mumbai", "O+", "350ml", "Receiver", "15/03/2022", "Yes", "8180174203", "Facebook", "No"],
    ["Vikram Singh", "Safdarjung Hospital - New Delhi", "AB-", "200ml", "Receiver", "10/01/2022", "No", "7868555797", "Facebook", "No"],
    ["Aarav Sharma", "GREENLAND NURSING HOME", "A-", "450ml", "Receiver", "30/12/2021", "Yes", "7123456789", "Facebook", "No"],
    ["Shreya Desai", "Government Medical College - Ahmedabad", "O-", "300ml", "Receiver", "20/11/2021", "No", "9783465120", "Facebook", "No"],
    ["Dhruv Mehta", "Apollo Gleneagles Hospitals Kolkata", "B-", "400ml", "Receiver", "15/10/2021", "Yes", "9876543219", "Facebook", "No"],
    ["Radha Gupta", "Amrita Institute of Medical Sciences", "AB+", "250ml", "Receiver", "05/09/2021", "No", "9678901234", "Facebook", "No"],
    ["Nitya Jain", "Sunrise Hospitals", "A+", "350ml", "Receiver", "20/08/2021", "No", "7823456789", "Facebook", "No"],
    ["Samar Khan", "BHOLA HOSPITAL", "O-", "250ml", "Receiver", "15/07/2021", "Yes", "8978878798", "Facebook", "No"],
    ["Aditya Shah", "Government Medical College - Kasaragod", "B+", "300ml", "Receiver", "01/06/2021", "No", "9033928471", "Facebook", "No"],
    ["Vaishnavi Patel", "Apollo Hospitals Hyderabad", "O+", "250ml", "Receiver", "20/05/2021", "Yes", "9789012345", "Facebook", "No"],
    ["Ishaan Gupta", "Apollo Hospitals Bhubaneswar", "AB-", "200ml", "Receiver", "10/04/2021", "No", "7345678901", "Facebook", "No"],
    ["Kavya Sharma", "Apollo Hospitals Bhubaneswar", "A-", "300ml", "Receiver", "05/03/2021", "Yes", "9789012345", "Facebook", "No"],
    ["Manav Mehta", "Medanta - The Medicity Indore", "O-", "250ml", "Receiver", "15/02/2021", "No", "9798787878", "Facebook", "No"],
    ["Shreyansh Desai", "FIRM HOSPITALS", "B-", "200ml", "Receiver", "01/01/2021", "Yes", "7567890234", "Facebook", "No"],
    ["Rishi Patel", "Medfort Hospitals", "AB+", "250ml", "Receiver", "15/12/2020", "No", "7946459836", "Facebook", "No"],
    ["Anika Shah", "Global Hospitals", "A+", "250ml", "Receiver", "30/11/2020", "No", "8647498337", "Facebook", "No"],
    ["Ria Jain", "Aarvy Hospitals", "O-", "200ml", "Receiver", "15/10/2020", "Yes", "8275963141", "Facebook", "No"],
    ["Aniket Gupta", "USTHI HOSPITAL & RESEARCH CENTRE", "B+", "200ml", "Receiver", "01/09/2020", "No", "8350167832", "Facebook", "No"],
    ["Aryan Sharma", "Medica Hospitals", "O+", "200ml", "Receiver", "15/08/2020", "Yes", "7123456789", "Facebook", "No"],
    ["Nitya Mehta", "Manipal Hospitals", "AB-", "150ml", "Receiver", "01/07/2020", "No", "8654179830", "Facebook", "No"],
    ["Aditi Patel", "Dr. L H Hiranandani Hospital", "A-", "200ml", "Receiver", "15/06/2020", "Yes", "9678901234", "Facebook", "No"],
    ["Arnav Shah", "PINDARI HOSPITAL", "O-", "150ml", "Receiver", "01/05/2020", "No", "7123456789", "Facebook", "No"],
    ["Divya Gupta", "KJ Somaiya Medical College and Research Centre Mumbai", "B-", "200ml", "Donor", "15/04/2020", "Yes", "8987654321", "Facebook", "No"],
    ["Rishi Sharma", "DAKSH HOSPITAL", "AB+", "150ml", "Receiver", "01/03/2020", "No", "7234567899", "Facebook", "No"],
    ["Anjali Jain", "Jaslok Hospital and Research Centre", "A+", "200ml", "Receiver", "15/02/2020", "No", "9456789012", "Facebook", "No"],
    ["Rajesh Patel", "MEENAKSHI HOSPITAL", "A+", "500ml", "Receiver", "10/01/2022", "No", "9384567120", "Facebook", "No"],
    ["Priya Sharma", "INDUS NURSING HOME", "B+", "350ml", "Receiver", "15/02/2022", "Yes", "7170455090", "Facebook", "No"],
    ["Sanjay Gupta", "Kokilaben Dhirubhai Ambani Hospital", "O-", "450ml", "Receiver", "20/03/2022", "No", "8018953510", "Facebook", "No"],
    ["Rishi Singh", "SHANTI VED HOSPITAL", "AB-", "300ml", "Receiver", "25/04/2022", "Yes", "9345678901", "Facebook", "No"],
    ["Anjali Mehra", "Fortis Healthcare", "A-", "400ml", "Receiver", "30/05/2022", "No", "9356087241", "Facebook", "No"],
    ["Jayesh Shah", "Government Medical College - Rajkot", "B-", "600ml", "Receiver", "05/06/2022", "Yes", "9890123456", "Facebook", "No"],
    ["Megha Patel", "Jerambhai Hospital & Medical Institute", "O+", "550ml", "Receiver", "10/07/2022", "No", "6789023456", "Facebook", "No"],
    ["Naman Gupta", "Chennai Apollo Hospital", "AB+", "325ml", "Receiver", "15/08/2022", "Yes", "8123049657", "Facebook", "No"],
    ["Ritu Sharma", "Postgraduate Institute of Medical Education and Research (PGIMER) - Chandigarh", "A+", "650ml", "Receiver", "20/09/2022", "No", "7890123456", "Facebook", "No"],
    ["Ashwin Desai", "Government Medical College - Thiruvananthapuram", "B+", "550ml", "Receiver", "25/10/2022", "Yes", "9006534289", "Facebook", "No"],
    ["Manav Patel", "Yashoda Hospitals", "O-", "400ml", "Receiver", "30/11/2022", "No", "7923456789", "Facebook", "No"],
    ["Vanshika Gupta", "CARE NURSING HOME", "AB-", "300ml", "Receiver", "05/12/2022", "Yes", "7812345678", "Facebook", "No"],
    ["Harsh Mehta", "Hinduja Hospital", "A-", "450ml", "Receiver", "10/01/2020", "No", "7987654321", "Facebook", "No"],
    ["Shivangi Sharma", "DEEPMALA HOSPITAL", "B-", "550ml", "Receiver", "15/02/2020", "Yes", "8791234569", "Facebook", "No"],
    ["Arushi Patel", "Medica Superspecialty Hospital Kolkata", "O+", "600ml", "Receiver", "20/03/2020", "No", "7823456789", "Facebook", "No"],
    ["Rhea Gupta", "Fortis Hospitals Limited", "AB+", "325ml", "Receiver", "25/04/2021", "Yes", "9142358760", "Facebook", "No"],
    ["Gaurav Shah", "HOLY CHILD NURSING HOME", "A+", "500ml", "Receiver", "30/05/2020", "No", "6791326282", "Facebook", "No"],
    ["Kavya Patel", "SOLANKI HOSPITAL", "B+", "350ml", "Receiver", "05/06/2020", "Yes", "8803204354", "Facebook", "No"],
    ["Aryan Gupta", "Fortis Hospitals", "O-", "450ml", "Receiver", "10/07/2020", "No", "9123456789", "Facebook", "No"],
    ["Shreya Sharma", "Fortis Hospitals Mumbai", "AB-", "300ml", "Donor", "15/08/2021", "Yes", "7889012345", "Facebook", "No"],
    ["Dhruv Patel", "BGS Global Hospitals Bengaluru", "A-", "400ml", "Receiver", "20/09/2022", "No", "6090300131", "Facebook", "No"],
    ["Aarav Shah", "Narayana Multispeciality Hospital", "B-", "600ml", "Receiver", "25/10/2021", "Yes", "7336297505", "Facebook", "No"],
    ["Rohan Patel", "Kalinga Institute of Medical Sciences Bhubaneswar", "AB+", "500 ml", "Receiver", "10/01/2022", "No", "7923456789", "Facebook", "No"],
    ["Meera Shah", "Government Medical College - Kollam", "B+", "250 ml", "Receiver", "11/01/2022", "No", "7987654321", "Facebook", "No"],
    ["Avi Sharma", "SAVAIKAR CLINIC & NURSING HOME", "O-", "350 ml", "Receiver", "12/01/2020", "No", "7890234567", "Facebook", "No"],
    ["Priya Sharma", "Jeewan Mala Hospital", "A+", "150 ml", "Receiver", "13/01/2020", "No", "7923456789", "Facebook", "No"],
    ["Manav Patel", "S. K. HOSPITAL", "AB-", "500 ml", "Receiver", "14/01/2022", "No", "7678901234", "Facebook", "No"],
    ["Priyanka Gupta", "ASHIRWAD HOSPITAL", "B+", "250 ml", "Receiver", "10/01/2023", "No", "7823456789", "Facebook", "No"],
    ["Rajesh Patel", "Medcity Hospitals", "O+", "350 ml", "Receiver", "16/01/2022", "No", "7812345679", "Facebook", "No"],
    ["Manasi Singh", "KIMS Hospitals", "A-", "150 ml", "Receiver", "17/01/2020", "No", "8240131417", "Facebook", "No"],
    ["Rishi Sharma", "M.L. HOSPITAL", "AB+", "500 ml", "Receiver", "18/01/2022", "No", "9890123456", "Facebook", "No"],
    ["Sushmita Shah", "DELHI HEART HOSPITAL", "B-", "250 ml", "Receiver", "19/01/2020", "No", "7987612345", "Facebook", "No"],
    ["Hritik Patel", "Apollo Hospitals Navi Mumbai", "O+", "350 ml", "Receiver", "20/01/2021", "No", "7647925651", "Facebook", "No"],
    ["Mukesh Singh", "Global Hospital", "A+", "150 ml", "Receiver", "21/01/2022", "No", "9345678901", "Facebook", "No"],
    ["Anjali Sharma", "SHILA NURSING HOME", "AB-", "500 ml", "Receiver", "22/01/2020", "No", "7891789123", "Facebook", "No"],
    ["Deepak Patel", "SHRI SIDDHI VINAYAK HOSPITAL", "B+", "250 ml", "Receiver", "23/01/2020", "No", "8456789012", "Facebook", "No"],
    ["Shruti Sharma", "Wockhardt Hospitals Mumbai", "O-", "350 ml", "Receiver", "24/01/2020", "No", "8567890234", "Facebook", "No"],
    ["Ritika Gupta", "Christian Medical College Vellore", "A-", "150 ml", "Receiver", "25/01/2021", "No", "7923456789", "Facebook", "No"],
    ["Rohit Patel", "Apollo Hospitals", " Ranchi", "AB+", "500 ml", "Receiver", "26/01/2021", "No", "9576842193", "Facebook", "No"],
    ["Bhavika Shah", "Medanta Institute of Critical Care and Anaesthesiology", "B+", "250 ml", "Receiver", "27/01/2020", "No", "9472365890", "Facebook", "No"],
    ["Dhruv Sharma", "Dr. Rela Institute and Medical Centre", " Chennai", "O+", "350 ml", "Receiver", "28/01/2021", "No", "8567890123", "Facebook", "No"],
    ["Neha Patel", "Holy Spirit Hospital", "A-", "150 ml", "Receiver", "29/01/2020", "No", "8890123456", "Facebook", "No"],
    ["Jay Patel", "Apollo Hospitals", " Raipur", "AB-", "500 ml", "Receiver", "30/01/2021", "No", "9263857420", "Facebook", "No"],
    ["Ritu Gupta", "CMC Ludhiana", "B-", "250 ml", "Receiver", "31/01/2020", "No", "8987977878", "Facebook", "No"],
    ["Shweta Sharma", "Apollo Hospitals", " Aurangabad", "O+", "350 ml", "Receiver", "01/02/2022", "No", "7123456789", "Facebook", "No"],
    ["Vineet Patel", "Government Medical College - Kottayam", "A+", "150 ml", "Receiver", "02/02/2021", "No", "9567890234", "Facebook", "No"],
    ["Raj Patel", "SHREEJI ENT HOSPITAL", "AB+", "500 ml", "Receiver", "03/02/2020", "No", "8902345678", "Facebook", "No"],
    ["Bhavya Shah", "RAIPUR HOSPTIAL", "B+", "250 ml", "Receiver", "04/02/2022", "No", "7934567890", "Facebook", "No"],
    ["Rajesh Patel", "Dilkusha Nursing Home Pvt Ltd", "O+", "500ml", "Receiver", "25/05/2021", "No", "6401904587", "Facebook", "No"],
    ["Radha Shah", "Government Medical College - Kannur", "A-", "600ml", "Receiver", "01/07/2022", "Yes", "7609148327", "Facebook", "No"],
    ["Vikas Gupta", "Hyderabad Apollo Hospital", "B+", "300ml", "Receiver", "20/08/2022", "No", "7934253769", "Facebook", "No"],
    ["Sona Patel", "GOKULDAS HOSPITAL&RESEARCH CENTRE", "O-", "100ml", "Receiver", "15/09/2022", "No", "7899567812", "Facebook", "No"],
    ["Preeti Sharma", "Apollo Hospitals", " Pune", "AB+", "450ml", "Receiver", "10/10/2022", "Yes", "9781234567", "Facebook", "No"],
    ["Rajan Singh", "SAI SEVA SADAN", "A+", "800ml", "Receiver", "05/11/2022", "No", "7258380316", "Facebook", "No"],
    ["Anjali Jain", "BLK Super Speciality Hospital", "B-", "250ml", "Receiver", "20/12/2022", "No", "7878889789", "Facebook", "No"],
    ["Rishi Dhawan", "Sparsh Hospital", " Bengaluru", "O+", "600ml", "Receiver", "05/01/2023", "Yes", "7787775603", "Facebook", "No"],
    ["Nirmala Menon", "HEART & GENERAL HOSPITAL JAIPUR", "A-", "350ml", "Receiver", "15/02/2020", "No", "9234567890", "Facebook", "No"],
    ["Deepak Verma", "Wockhardt Hospitals", " Mumbai", "B+", "450ml", "Receiver", "01/03/2020", "No", "9123456789", "Facebook", "No"],
    ["Aarti Doshi", "Global Hospitals Hyderabad", "O-", "200ml", "Receiver", "15/04/2021", "No", "7123456789", "Facebook", "No"],
    ["Sanjay Mehta", "Global Hospital", " Chennai", "AB+", "550ml", "Donor", "30/05/2021", "Yes", "9897877887", "Facebook", "No"],
    ["Jayesh Modi", "Ruby Hall Clinic", "A+", "700ml", "Receiver", "15/06/2020", "No", "8413886320", "Facebook", "No"],
    ["Ashish Sharma", "GURUDEO ASTHA SEVA SADAN", "B-", "350ml", "Receiver", "30/07/2021", "No", "7234567890", "Facebook", "No"],
    ["Renu Mehra", "Apollo Hospitals", " Ludhiana", "O+", "500ml", "Receiver", "15/08/2022", "No", "8779987889", "Facebook", "No"],
    ["Naveen Jha", "AIIMS (All India Institute of Medical Sciences)", "A-", "600ml", "Receiver", "30/09/2021", "Yes", "6246102509", "Facebook", "No"],
    ["Rupali Patel", "Government Medical College - Pathanamthitta", "B+", "300ml", "Receiver", "15/10/2020", "No", "7345678901", "Facebook", "No"],
    ["Gaurav Desai", "DEWA HOSPITAL", "O-", "100ml", "Receiver", "30/11/2020", "No", "7123456789", "Facebook", "No"],
    ["Priyanka Tripathi", "Balabhai Nanavati Hospital", "AB+", "450ml", "Receiver", "15/12/2022", "Yes", "7456789012", "Facebook", "No"],
    ["Shailesh Shah", "Apollo Hospitals", " Vishakhapatnam", "A+", "800ml", "Receiver", "30/01/2020", "No", "9234567890", "Facebook", "No"],
    ["Rakesh Solanki", "Fortis Escorts Hospital", " New Delhi", "B-", "250ml", "Receiver", "15/02/2022", "No", "8258078242", "Facebook", "No"],
    ["Narendra Bhat", "Genesis Hospital", "O+", "600ml", "Receiver", "28/03/2020", "Yes", "8460309324", "Facebook", "No"],
    ["Kiran Gupta", "Medica Superspecialty Hospital", " Kolkata", "A-", "350ml", "Receiver", "15/04/2020", "No", "7823456789", "Facebook", "No"],
    ["Sanjay Tiwari", "Medanta The Medicity", " Gurgaon", "B+", "450ml", "Receiver", "30/05/2020", "No", "7896456789", "Facebook", "No"],
    ["Rohan Patel", "Apollo Gleneagles Hospitals", " Kolkata", "O+", "500ml", "Receiver", "10/01/2021", "No", "9123456789", "Facebook", "No"],
    ["Priya Sharma", "Apollo Hospitals", " Guwahati", "B+", "450ml", "Receiver", "12/03/2020", "Yes", "9485732061", "Facebook", "No"],
    ["Gaurav Gupta", "Sankara Nethralaya", " Chennai", "AB-", "200ml", "Receiver", "15/05/2022", "No", "7632830679", "Facebook", "No"],
    ["Megha Kapoor", "Ruby Hall Clinic", " Pune", "A+", "300ml", "Donor", "25/07/2021", "No", "7894890234", "Facebook", "No"],
    ["Rajesh Singh", "Max Healthcare", "O-", "100ml", "Donor", "15/09/2022", "Yes", "9123456789", "Facebook", "No"],
    ["Kavya Shah", "SHRI SAI HOSPITAL", "B-", "250ml", "Receiver", "21/11/2022", "No", "7961234568", "Facebook", "No"],
    ["Shubham Patel", "Tata Memorial Hospital", " Mumbai", "A-", "150ml", "Receiver", "31/12/2022", "No", "7896543211", "Facebook", "No"],
    ["Shruti Singh", "CUTTACK NURSING HOME PVT.LTD.", "AB+", "400ml", "Receiver", "05/02/2020", "Yes", "6479808626", "Facebook", "No"],
    ["Hari Gupta", "Care Hospitals", "O+", "350ml", "Receiver", "20/03/2020", "No", "7899012345", "Facebook", "No"],
    ["Anjali Sharma", "Bindubasini Nursing Home", "B+", "250ml", "Receiver", "30/05/2021", "No", "8462665381", "Facebook", "No"]
  ]

  socialData: any;
  data: any;
  bloodBanks: any;


  async sendMessage(request: any) {
    console.log('Sending message...');
    // Getting the address of the request
    await axios.post('/api/socialdata/getAddress', {
      hospitalName: request.Location,
    }).then((response) => {
      this.data = response.data;
    });

    //Preparing blood type
    let bloodGroup = request.Blood_Type;
    let bloodType = bloodGroup.substring(0, bloodGroup.length - 1) + '_' + (bloodGroup.charAt(bloodGroup.length - 1) === '+' ? 'pos' : 'neg');

    // Checking the available blood
    // 1. For complete availablity
    await axios.post('/api/bloodbanks/getCompleteAvailBlood', {
      "city": this.data.city,
      "state": this.data.state,
      "type": bloodType,
      "quantity": request.Blood_Requirement.substring(0, request.Blood_Requirement.length - 2),
    }).then((result) => {
      // console.log(result.data);
      this.bloodBanks = result.data;
    })

    // 2. For partial availablity
    if (this.bloodBanks.length === 0) {
      await axios.post('/api/bloodbanks/getPartialAvailBlood', {
        "city": this.data.city,
        "state": this.data.state,
        "type": bloodType,
      }).then((result) => {
        this.bloodBanks = result.data;
      })
    }

    // Sending message and update the database
    let message;
    // Preparing the message
    // Blood found
    if (this.bloodBanks.length > 0) {
      message = `Nearest Blood availablity locations against your request as of ${new Date().toString().substring(0, new Date().toString().indexOf('GMT'))}:\n`
      for (const bloodBank of this.bloodBanks) {
        const id = bloodBank["S.No."];
        const name = bloodBank["Blood Bank Name"];
        const address = bloodBank["Address"];
        const availQnty = bloodBank[bloodType];
        message += `${id}. Blood Bank Name: ${name}, Address: ${address}, Available Quantity: ${availQnty}ml\n`;
      }
    }
    // Blood not found
    else {
      message = `We're sorry, but no ${bloodGroup} blood is currently unavailable in your area.`;
    }
    console.log(message);
    // Updating database
    // axios.put('/api/socialdata/setMessage', { id: request.id });
    console.log('Message sent successfully');
    axios.get('/api/socialdata/')
      .then(response => {
        this.socialData = response.data;
      })
      .catch(error => {
        console.log(error);
      });

  }

  constructor() { }

  ngOnInit(): void {
    axios.get('/api/socialdata/')
      .then(response => {
        this.socialData = response.data;
        console.log(response.data.name);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
