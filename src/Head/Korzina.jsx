import { async } from "@firebase/util";
import { collection,getDocs } from "firebase/firestore";
import React,{useState,useEffect} from "react";
import {db} from './config'

const Firebasecomponet = () =>{
   const[student,setstudent] = useState([])
   const studentsGodycamp = collection(db,"impact")
   useEffect(() => {
    const getStudent = async() =>{
        const data = await getDocs(studentsGodycamp);
        setstudent(data.docs.map((doc) => ({ ... doc.data(), id: doc.id})));
    }
    getStudent();
   }, [])
   console.log(student)
       return (
        <div className="Firebase.text">
            {student.map((d) =>(
          <div>
            <p>yosh-{d.name}</p>
            <p>familya-{d.surname}</p>
            <p>ism-{d.age}</p>
            </div>
        ))}
        </div>
)
}
export default Firebasecomponet;