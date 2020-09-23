import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

function TransactionHistory({ transactions }) {
    return (
        <section className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.headerItem}>Type</th>
                        <th className={styles.headerItem}>Amount</th>
                        <th className={styles.headerItem}>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => {
                        return (
                            <tr
                                className={styles.tableRow}
                                key={transaction.id}
                            >
                                <td className={styles.tableCell}>
                                    {transaction.type}
                                </td>
                                <td className={styles.tableCell}>
                                    {transaction.amount}
                                </td>
                                <td className={styles.tableCell}>
                                    {transaction.currency}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </section>
    );
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
};

export default TransactionHistory;
