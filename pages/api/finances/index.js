import { createStatement, getStatements } from "@/lib/prisma/statements";

export default async function handler(req, res) {
    console.log(req.body);
    if (req.method === 'GET') {
        try{
            const statement = await getStatements()
            return res.status(200).json({
                status: "Success",
                statement
            })
        }catch(error){
            return res.status(500).json({
                message: 'Internal Server Error'
            })
        }
    }

    if (req.method === "POST") {
        try{
            const createdStatement = await createStatement(req.body)
            return res.status(200).json({
                status: 'Success',
                statement: createdStatement
            })
        }catch(error) {
            return res.status(500).json({
                message: 'Internal Server Error'
            })
        }
    }
}