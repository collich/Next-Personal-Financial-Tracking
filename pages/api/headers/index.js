export default async function handler(req, res) {
    res.status(200).json({
        status: 'Success',
        data: [
            {label: "Date"},
            {label: "Salary"},
            {label: "CPF"},
            {label: "Expenses"},
            {label: "Investments"},
            {label: "Savings"},
            {label: "Actions"},
        ]
    })
}