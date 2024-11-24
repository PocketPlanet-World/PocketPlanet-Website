import styles from './about.module.css';

export default function About() {
    return (
        <main className={styles.main}>
            <div>
                <div>
                    <h1>使用硬體及技術</h1>
                    <h3>RaspBerry Pi 5</h3>
                    <p>選用原因：</p>
                    <ol>
                        <li>
                            高效能處理器： 配備 64 位元四核心處理器，能夠快速處理複雜的數據分析任務。
                        </li>
                        <li>
                            影像與多媒體處理： 支援雙 4K 顯示輸出、硬體解碼以及與多攝像頭模組整合，用於進行影像處理或多媒體應用場景。
                        </li>
                        <li>
                            擴展性強： 提供豐富的 GPIO 接口，能夠輕鬆連接多種硬體模組（如感測器和通訊模組）。
                        </li>
                        <li>
                            多網絡連接選項： 支援千兆以太網、Wi-Fi 6、藍牙 5.2，能穩定將數據上傳至雲端並適應高負載的應用場景。
                        </li>
                    </ol>
                    <p>使用技術：</p>
                    <p>透過 Python 撰寫程式，實現與 Arduino 的串口通訊，將數據進行清洗、格式化處理後，利用 MQTT 或 RESTful API 將結果可靠地上傳至雲端平台。</p>
                    <h3>Arduino Uno R3</h3>
                    <p>用途：</p>
                    <p>Arduino Uno R3 作為數據採集單元，負責從連接的感測器中即時獲取環境數據，並以有線或無線的方式將這些數據傳遞至 Raspberry Pi 進行進一步分析。</p>
                    <p>選用原因：</p>
                    <ol>
                        <li>
                            穩定的微控制器平台： 採用 ATmega328P 晶片，具有優秀的穩定性，適合長時間運行的嵌入式系統。
                        </li>
                        <li>
                            開發簡便： 提供簡單易用的開發環境 (Arduino IDE) 和豐富的開源程式庫，大大降低開發門檻。
                        </li>
                        <li>
                            模組兼容性： 支援多種類型的模組（如溫濕度感測器、光電感測器等），讓項目實現快速原型設計。
                        </li>
                        <li>
                            能源效率高： 消耗低功耗，適合資源有限的嵌入式應用場景。
                        </li>
                    </ol>
                    <p>使用技術：</p>
                    <p>利用 C 語言開發程式，實現對多個感測器數據的同步讀取及數據濾波處理，並透過 UART（串行通信）將數據傳輸至 Raspberry Pi。</p>
                </div>
                <div>
                    <h1>電路連接設計</h1>
                    <h3>通訊電路：UART 與串口通訊</h3>
                    <p>Raspberry Pi 和 Arduino Uno R3 之間的通訊透過 UART 串口進行，需將各自的通訊引腳正確連接：</p>
                    <ul>
                        <li>
                            Raspberry Pi RX (接收) → Arduino Uno TX (發送)
                        </li>
                        <li>
                            Raspberry Pi TX (發送) → Arduino Uno RX (接收)
                        </li>
                    </ul>
                    <h4>電平轉換電路</h4>
                    <p>引腳連接方式：</p>
                    <ul>
                        <li>HV（高壓供電）： 連接至 Arduino 的 5V 接腳。</li>
                        <li>LV（低壓供電）： 連接至 Raspberry Pi 的 3.3V 接腳。</li>
                        <li>HV1/HV2（高壓信號通道）： 接 Arduino Uno TX/RX。</li>
                        <li>LV1/LV2（低壓信號通道）： 接 Raspberry Pi RX/TX。</li>
                    </ul>
                    <p>作用：</p>
                    <ul>
                        <li>將 Arduino Uno 的 5V UART 信號轉換為 Raspberry Pi 可接受的 3.3V。</li>
                        <li>反向將 Raspberry Pi 的 3.3V UART 信號提升至 Arduino Uno 可讀取的 5V。
                            此設計有效避免因電壓差異導致的硬體損壞，保護兩者電路安全。</li>
                    </ul>
                    <h3>感測器連接</h3>
                    <h4>AHT-10 溫濕度感測器</h4>
                    <p>接線方式：</p>
                    <ul>
                        <li>SDA（數據線）： 接到 Arduino Uno R3 的 A4 引腳。</li>
                        <li>SCL（時鐘線）： 接到 Arduino Uno R3 的 A5 引腳。</li>
                    </ul>
                    <p>通訊協議：</p>
                    <p>AHT-10 使用 I²C 協議，需確保 Arduino Uno 上啟用了內建的 I²C 支援。感測器的電壓要求與 Arduino 5V 相容，無需額外電平轉換。</p>
                    <h4>LY-69 土壤濕度感測器</h4>
                    <p>接線方式：</p>
                    <ul>
                        <li>AO（模擬輸出）：
                            接至 Arduino Uno R3 的 A0 引腳，用於讀取土壤濕度的類比數據值，進行更細緻的判斷和分析。</li>
                        <li>DO（數位輸出）：
                            接至 Arduino Uno R3 的 D7 引腳，用於檢測土壤濕度是否超過閾值，便於控制系統的即時觸發。</li>
                        <li>VCC（供電）：
                            接至 Arduino 的 5V 接腳，提供穩定的工作電壓。</li>
                        <li>GND（接地）：
                            接至 Arduino 的 GND 引腳，構成完整的電路。</li>
                    </ul>
                </div>
                <div>
                    <h1>程式碼</h1>
                    <h3>RaspBerry Pi</h3>
                    <p>詳細查看 <a href="https://github.com/PocketPlanet-World/RaspberryPi-engine">這裡</a></p>
                    <h3>Arduino Uno R3</h3>
                    <p>詳細查看 <a href="https://github.com/PocketPlanet-World/Arduino-engine">這裡</a></p>
                </div>
                <div>
                    <h1>系統設計優勢</h1>
                    <ul>
                        <li>
                            實時性： Arduino 即時採集數據，Raspberry Pi 進行快速處理和上傳，構成一個高效的數據處理流。
                        </li>
                        <li>
                            可擴展性： Raspberry Pi 和 Arduino 的模組化設計，方便未來添加更多感測器或通訊模組。
                        </li>
                        <li>
                            跨平台支援： Raspberry Pi 的多種作業系統（如 Raspberry Pi OS 或 Ubuntu）支援多語言開發，提升系統靈活性。
                        </li>
                    </ul>
                </div>
            </div>
        </main >
    )
}