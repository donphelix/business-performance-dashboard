import faker from "faker";

export const generateMockData = () => {
    const sales = [];
    const expenses = [];
    const regions = ["North America", "Europe", "Asia"];
    const categories = ["Marketing", "Operations", "HR"];
    const transactions = [];

    for (let i = 0; i < 12; i++) {
        sales.push({ month: `Month ${i + 1}`, value: faker.datatype.number(5000) });
        expenses.push({ month: `Month ${i + 1}`, value: faker.datatype.number(3000) });
    }

    const revenueByRegion = regions.map((region) => ({
        region,
        revenue: faker.datatype.number({ min: 10000, max: 50000 }),
    }));

    const expensesByCategory = categories.map((category) => ({
        category,
        value: faker.datatype.number({ min: 1000, max: 10000 }),
    }));

    for (let i = 0; i < 50; i++) {
        transactions.push({
            id: faker.datatype.uuid(),
            date: faker.date.recent(30).toISOString().split("T")[0],
            amount: faker.datatype.number({ min: 50, max: 5000 }),
            type: faker.random.arrayElement(["Sale", "Expense"]),
            status: faker.random.arrayElement(["Completed", "Pending"]),
        });
    }

    return { sales, expenses, revenueByRegion, expensesByCategory, transactions };
};
