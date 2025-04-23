"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import logo from "@/assets/logo.svg";
import ModalNewTransaction from "../ModalNewTransaction";
import { useState } from "react";

export default function Header() {
    const [openModal, setOpenModal] = useState<boolean>(false);

    function handleClose() {
        setOpenModal(false);
    }

    function handleOpen() {
        setOpenModal(true);
    }

    return (
        <div className={styles.container}>
            <ModalNewTransaction open={openModal} handleClose={handleClose} />
            <div className={styles.content}>
                <Image src={logo} alt="LOGO" />
                <button className={styles.newTransaction} onClick={handleOpen}>
                    Nova transação
                </button>
            </div>
        </div>
    );
}
