export async function GET() {
    return Response.json({
        status: 'Success',
        data: [
            {
                date: `${(new Date(Date.now())).toDateString()} - ${(new Date(Date.now())).toLocaleTimeString()}`,
                // date: `${Date.getDate() > 10 ? Date.getDate(): `0${Date.getDate()}-${Date.getMonth() > 10 ? Date.getMonth(): `0${Date.getMonth() + 1}`}-${Date.getFullYear()}`}`,
                salary: 4000,
                CPF: 20,
                expenses: 256,
                investment: 500,
                savings: 0,  
              },
              {
                date: `${(new Date(Date.now())).toDateString()} - ${(new Date(Date.now())).toLocaleTimeString()}`,
                // date: `${Date.getDate() > 10 ? Date.getDate(): `0${Date.getDate()}-${Date.getMonth() > 10 ? Date.getMonth(): `0${Date.getMonth() + 1}`}-${Date.getFullYear()}`}`,
                salary: 5000,
                CPF: 20,
                expenses: 300,
                investment: 700,
                savings: 0,  
              },
        ]
    })
}