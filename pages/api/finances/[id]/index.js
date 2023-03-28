import { getStatementById, updateStatement, deleteStatement } from "@/lib/prisma/statements";

export default async function handler(req, res) {
    // console.log(req.body);
    // console.log(req.query.id);
    if (req.method === "GET") {
        try {
            const id = req.query.id
            const individualStatement = await getStatementById(id)
            return res.status(200).json({
                status: "Success",
                statement: individualStatement
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Internal Server Error'
            })
        }
    }

    if (req.method === "PATCH") {
        try {
            const id = req.query.id
            const updatedStatement = await updateStatement(id, req.body)
            return res.status(200).json({
                status: "Success",
                statement: updatedStatement,
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Internal Server Error'
            })
        }
    }

    if (req.method === "DELETE"){
        try {
            const id = req.query.id
            const deletedStatement = await deleteStatement(id)
            return res.status(200).json({
                status: "Success",
                statement: deletedStatement,
            })
        } catch (error) {
            return res.status(500).json({
                message: 'Internal Server Error'
            })
        }
    }
}