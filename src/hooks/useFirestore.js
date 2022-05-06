import { useState, useEffect } from "react";
import {
  collection,
  where,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase/config";

const useFirestore = (collectionName, condition) => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    if (!condition) return;

    if (!condition.compareValue || !condition.compareValue.length) {
      setDocuments([]);
      return;
    }
    
    const collectionRef = collection(db, collectionName);
    const q = query(
      collectionRef,
      where(condition.fieldName, condition.operator, condition.compareValue),
      orderBy("createdAt")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const documents = snapshot?.docs?.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDocuments(documents);
    });

    return unsubscribe;
  }, [collectionName, condition]);

  return documents;
};

export default useFirestore;
