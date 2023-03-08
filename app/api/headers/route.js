export async function GET() {
    return Response.json({
        status: 'Success',
        data: [
            {label: "Salary"},
            {label: "CPF"},
            {label: "Expenses"},
            {label: "Investments"},
            {label: "Savings"},
        ]
    })
}
