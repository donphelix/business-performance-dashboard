import {Table, Thead, Tbody, Tr, Th, Td} from "@chakra-ui/react";
import React from "react";

const TransactionTable = ({transactions}: { transactions: any[] }) => (
    <Table variant="striped" colorScheme="teal">
        <Thead>
            <Tr>
                <Th>Date</Th>
                <Th>Transaction ID</Th>
                <Th>Amount</Th>
                <Th>Type</Th>
                <Th>Status</Th>
            </Tr>
        </Thead>
        <Tbody>
            {transactions.map((txn) => (
                <Tr key={txn.id}>
                    <Td>{txn.date}</Td>
                    <Td>{txn.id}</Td>
                    <Td>${txn.amount}</Td>
                    <Td>{txn.type}</Td>
                    <Td>{txn.status}</Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
);

export default TransactionTable;
