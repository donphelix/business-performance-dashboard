import { LineChart, BarChart, PieChart, Pie, Line, Bar, Cell, Tooltip } from "recharts";
import { Box, SimpleGrid } from "@chakra-ui/react";

const ChartsSection = ({
                           sales,
                           expenses,
                           revenueByRegion,
                           expensesByCategory,
                       }: {
    sales: unknown[];
    expenses: never[];
    revenueByRegion: never[];
    expensesByCategory: never[];
}) => {
    const colors = ["#8884d8", "#82ca9d", "#ffc658"];

    return (
        <SimpleGrid columns={[1, 2]} spacing={6} w="full">
            <Box p={4} shadow="md" borderWidth="1px" rounded="lg">
                <LineChart width={500} height={300} data={sales}>
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                    <Tooltip />
                </LineChart>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px" rounded="lg">
                <BarChart width={500} height={300} data={revenueByRegion}>
                    <Bar dataKey="revenue" fill="#82ca9d" />
                    <Tooltip />
                </BarChart>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px" rounded="lg">
                <PieChart width={400} height={300}>
                    <Pie
                        data={expensesByCategory}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                    >
                        {expensesByCategory.map((_, index) => (
                            <Cell key={index} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </Box>
        </SimpleGrid>
    );
};

export default ChartsSection;
