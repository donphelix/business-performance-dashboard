import { SimpleGrid, Box, Text } from "@chakra-ui/react";

const KPIGrid = ({ data }: { data: { sales: any[]; expenses: any[] } }) => {
    const totalSales = data.sales.reduce((acc, cur) => acc + cur.value, 0);
    const totalExpenses = data.expenses.reduce((acc, cur) => acc + cur.value, 0);
    const netProfit = totalSales - totalExpenses;

    return (
        <SimpleGrid columns={[1, 2, 4]} spacing={6} w="full">
            <Box p={4} shadow="md" borderWidth="1px" rounded="lg">
                <Text>Total Sales</Text>
                <Text fontWeight="bold">${totalSales}</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px" rounded="lg">
                <Text>Total Expenses</Text>
                <Text fontWeight="bold">${totalExpenses}</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px" rounded="lg">
                <Text>Net Profit</Text>
                <Text fontWeight="bold">${netProfit}</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px" rounded="lg">
                <Text>Active Users</Text>
                <Text fontWeight="bold">1,200</Text>
            </Box>
        </SimpleGrid>
    );
};

export default KPIGrid;
