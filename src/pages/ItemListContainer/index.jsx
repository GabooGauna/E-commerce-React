import React, { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function ItemListContainer() {
  const params = useParams();
  const [shirts, setShirts] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");
    getDocs(itemCollection).then((snapshot) => {
      let dbShirts = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      if (params.categoryId) {
        dbShirts = dbShirts.filter((el) => el.category === params.categoryId);
      }
      setShirts(dbShirts);
    });
  }, [params]);

  return (
    <div className="itemlc py-5 mx-auto">
      <div>
        <ItemList shirts={shirts} />
      </div>
    </div>
  );
}

export default ItemListContainer;
