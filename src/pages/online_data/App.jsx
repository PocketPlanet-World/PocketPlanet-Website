import { useState, useEffect } from "react";
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './data.module.css';

import Loading from "../../widgets/loading/App";

export default function OnlineData() {

    const name = ["空氣溫度", "空氣濕度", "土壤溫度", "土壤濕度", "PH 值"];
    const unit = ["airtemperature", "airhumidity", "SoilTemperature", "SoilMoisture", "PH"];
    const color = ["#0088FE", "#00C49F", "#FFBB28", "#8884d8", "#FF0000"];

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const unsubscribe = onSnapshot(collection(db, "data"), (querySnapshot) => {
                const cities = [];
                querySnapshot.forEach((doc) => {
                    if (doc.id > "20240417") {
                        const data = doc.data().data;
                        if (Array.isArray(data)) {
                            data.forEach((entry) => {
                                if (
                                    entry &&
                                    entry.PH !== undefined &&
                                    entry.SoilMoisture !== undefined &&
                                    entry.SoilTemperature !== undefined &&
                                    entry.airhumidity !== undefined &&
                                    entry.airtemperature !== undefined &&
                                    entry.time !== undefined
                                ) {
                                    const processedData = {
                                        PH: typeof entry.PH === 'string' ? parseFloat(entry.PH.match(/\d+(?:\.\d+)?/)[0]) : entry.PH,
                                        SoilMoisture: typeof entry.SoilMoisture === 'string' ? parseFloat(entry.SoilMoisture.match(/\d+(?:\.\d+)?/)[0]) : entry.SoilMoisture,
                                        SoilTemperature: typeof entry.SoilTemperature === 'string' ? parseFloat(entry.SoilTemperature.match(/\d+(?:\.\d+)?/)[0]) : entry.SoilTemperature,
                                        airhumidity: typeof entry.airhumidity === 'string' ? parseFloat(entry.airhumidity.match(/\d+(?:\.\d+)?/)[0]) : entry.airhumidity,
                                        airtemperature: typeof entry.airtemperature === 'string' ? parseFloat(entry.airtemperature.match(/\d+(?:\.\d+)?/)[0]) : entry.airtemperature,
                                        time: entry.time
                                    };

                                    if (
                                        processedData.PH < 255 &&
                                        processedData.SoilMoisture < 255 &&
                                        processedData.SoilTemperature < 255 &&
                                        processedData.airhumidity < 255 &&
                                        processedData.airtemperature < 255
                                    ) {
                                        cities.push(processedData);
                                    }
                                }
                            });
                        }
                    }
                });

                const averagedData = [];
                for (let i = 0; i < cities.length; i += 1000) {
                    const chunk = cities.slice(i, i + 20);
                    const average = chunk.reduce((acc, cur) => {
                        acc.PH += cur.PH;
                        acc.SoilMoisture += cur.SoilMoisture;
                        acc.SoilTemperature += cur.SoilTemperature;
                        acc.airhumidity += cur.airhumidity;
                        acc.airtemperature += cur.airtemperature;
                        return acc;
                    }, { PH: 0, SoilMoisture: 0, SoilTemperature: 0, airhumidity: 0, airtemperature: 0 });

                    const chunkSize = chunk.length;
                    averagedData.push({
                        PH: Math.round((average.PH / chunkSize) * 10) / 10,
                        SoilMoisture: Math.round((average.SoilMoisture / chunkSize) * 10) / 10,
                        SoilTemperature: Math.round((average.SoilTemperature / chunkSize) * 10) / 10,
                        airhumidity: Math.round((average.airhumidity / chunkSize) * 10) / 10,
                        airtemperature: Math.round((average.airtemperature / chunkSize) * 10) / 10,
                        time: chunk[Math.floor(chunkSize / 2)].time
                    });
                }

                setData(averagedData);
            });
            return unsubscribe;
        }

        fetchData();

        const intervalId = setInterval(fetchData, 60000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <main className={styles.main}>
            {data.length > 0 ?
                <div>
                    {name.map((item, key) =>
                        <div key={key}>
                            <p>{item}</p>
                            <ResponsiveContainer width="80%" height="60%">
                                <AreaChart
                                    width={500}
                                    height={400}
                                    data={data.length > 0 ? data : []}
                                    margin={{
                                        top: 10,
                                        right: 30,
                                        left: 0,
                                        bottom: 0,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="time" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area type="monotone" dataKey={unit[key]} stroke="#8884d8" fill={color[key]} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    )}
                </div>
                :
                <Loading />
            }
        </main>
    )
}