import { Dialog } from "@mui/material";
import styles from "./styles.module.css";

type ModalNewTransactionProps = {
    open: boolean;
    handleClose: (value: boolean) => void;
};

export default function ModalNewTransaction({ open, handleClose }: ModalNewTransactionProps) {
    return (
        <Dialog open={open} onClose={handleClose}>
            <h1>Modal New Transaction</h1>
        </Dialog>
    );
}
