import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import './css/Control.module.scss'; // 引入 CSS

const cred = {
  apiKey: "AIzaSyDkMLRE04pX_M0KDqi-l-16l5VmQ-kODyI",
  authDomain: "pocketplanet.firebaseapp.com",
  projectId: "pocketplanet",
  storageBucket: "pocketplanet.appspot.com",
  messagingSenderId: "899530899183",
  appId: "1:899530899183:web:175d58eca3ad52e483e51a",
  measurementId: "G-7C4V10QK3H"
}

const app = initializeApp(cred);
const db = getFirestore(app);

const Control = () => {
  const [waterValue, setWaterValue] = useState(false); // 預設值為 false
  const [statusMessage, setStatusMessage] = useState('水泵狀態: 關閉');
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const fetchWaterValue = async () => {
      try {
        const docRef = doc(db, 'Control/change');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setWaterValue(docSnap.data().Water);
          const timeout = docSnap.data().timeout;
          if (timeout > 0) {
            setCountdown(timeout);
            setStatusMessage('水泵狀態: 開啟');
            setTimeout(() => {
              updateWaterValue(false);
            }, timeout * 1000);
          }
        }
      } catch (error) {
        console.error('Error fetching document: ', error);
      }
    };

    fetchWaterValue();
  }, []);

  const updateWaterValue = async (newValue) => {
    try {
      const docRef = doc(db, 'Control/change');
      await updateDoc(docRef, {
        Water: newValue,
      });
      setWaterValue(newValue);
      if (newValue) {
        setStatusMessage('水泵狀態: 開啟');
      } else {
        setStatusMessage('水泵狀態: 關閉');
      }
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  const handleButtonClick = () => {
    updateWaterValue(!waterValue);
  };

  return (
    <div>
      <div className="control-container">
        <button onClick={handleButtonClick}>控制水泵</button>
      </div>
      <div className='control'>
        <p>{statusMessage}</p>
        {countdown > 0 && <p>剩餘時間: {countdown} 秒</p>}
      </div>
    </div>
  );
};

export default Control;
