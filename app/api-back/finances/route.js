import { createStatement, getStatements } from "@/lib/prisma/statements";

export async function GET() {
  const statement = await getStatements()
    return Response.json({
      status: "Success",
      statement
    })
    // return Response.json({
    //     status: 'Success',
    //     data: [
    //         {
    //             date: `${(new Date(Date.now())).toDateString()} - ${(new Date(Date.now())).toLocaleTimeString()}`,
    //             // date: `${Date.getDate() > 10 ? Date.getDate(): `0${Date.getDate()}-${Date.getMonth() > 10 ? Date.getMonth(): `0${Date.getMonth() + 1}`}-${Date.getFullYear()}`}`,
    //             salary: 4000,
    //             CPF: 20,
    //             expenses: 256,
    //             investment: 500,
    //             savings: 0,  
    //           },
    //           {
    //             date: `${(new Date(Date.now())).toDateString()} - ${(new Date(Date.now())).toLocaleTimeString()}`,
    //             // date: `${Date.getDate() > 10 ? Date.getDate(): `0${Date.getDate()}-${Date.getMonth() > 10 ? Date.getMonth(): `0${Date.getMonth() + 1}`}-${Date.getFullYear()}`}`,
    //             salary: 5000,
    //             CPF: 20,
    //             expenses: 300,
    //             investment: 700,
    //             savings: 0,  
    //           },
    //     ]
    // })
}

// export async function POST(req) {
//   console.log(JSON.stringify(req.body));
//    const createdStatement = await createStatement(req.body)
//    return Response.json({
//     status: 'Success',
//     createdStatement
//    })
// }


// export async function POST(req) {
//   // if (req.method === 'POST') {
//     try {
//       const createdStatement = await createStatement(req.body);

//       return Response.json({
//         status: 'Success',
//         statement: createdStatement
//       })
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   // } else {
//   //   res.status(405).json({ message: 'Method not allowed' });
//   // }
// }

// const handler = async (req, res) => {
//   if (req.method === 'GET') {
//     try {
//       const { statements, error } = await getStatements()
//       if (error) throw new Error
//       return res.status(200).json({
//         status: 'Success',
//         data: statements
//       })
//     }catch (error) {
//       return res.status(500).json({ error: error.message })
//     }
//   }
// }

// export default handler
