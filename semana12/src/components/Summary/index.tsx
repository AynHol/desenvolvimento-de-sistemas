import { PiArrowCircleDown, PiArrowCircleUp, PiCurrencyDollar } from "react-icons/pi";
import styles from "./styles.module.css";
import { formatCurrency } from "@/utils/formatCurrency";

export default function Summary() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <header>
                    <span>Entrada</span>
                    <PiArrowCircleUp size={32} color="#00b37a" />
                </header>
                <strong>{formatCurrency(24000)}</strong>
            </div>
            <div className={styles.card}>
                <header>
                    <span>Saida</span>
                    <PiArrowCircleDown size={32} color="#f75a68" />
                </header>
                <strong>{formatCurrency(10000)}</strong>
            </div>
            <div className={styles.cardGreen}>
                <header>
                    <span>Total</span>
                    <PiCurrencyDollar size={32} color="#fff" />
                </header>
                <strong>{formatCurrency(14000)}</strong>
            </div>
        </div>
    );
}
