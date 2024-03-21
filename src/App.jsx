import React from "react";
import { CiSearch } from "react-icons/ci";
import { Navbar } from "./components/Navbar";
import { FaCirclePlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import { getFirestore } from "firebase/firestore";
// import { PiUserCircle } from "react-icons/pi";
// import { RiEditCircleLine } from "react-icons/ri";
// import { BiSolidTrash } from "react-icons/bi";
import { ContactCard } from "./components/ContactCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { Modal } from "./components/Modal";
import { AddUpdateContact } from "./components/AddUpdateContact";
import { useDisclouse } from "./hooks/useDisclouse";
import { Contactnotfound } from "./components/Contactnotfound";
const App = () => {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        // const contactsSnapshot = await getDocs(contactsRef);
        onSnapshot(contactsRef, (snapshot) => {
          const contactsList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactsList);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");
    onSnapshot(contactsRef, (snapshot) => {
      const contactsList = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactsList.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);
      // return filteredContacts;
    });
  };

  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <Navbar />
        <div className="flex ">
          <div className=" relative flex flex-grow items-center ">
            <CiSearch className="text-white ml-1 absolute text-3xl" />
            <input
              onChange={filterContacts}
              type="text"
              className=" h-10 text-white pl-9 my-4 flex-grow border-white border rounded-md bg-transparent"
            />
          </div>

          <FaCirclePlus
            onClick={onOpen}
            className="text-white cursor-pointer text-5xl my-4 ml-3"
          />
        </div>
        <div className="mt-4 flex flex-col gap-4">
          {contacts.length <= 0 ? (
            <Contactnotfound />
          ) : (
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          )}
        </div>
      </div>
      <AddUpdateContact onClose={onClose} isOpen={isOpen} />
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;
