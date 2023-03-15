import prisma from ".";

export async function getStatements() {
    const statements = await prisma.statement.findMany()
    try { 
        return { statements }
    }catch (error){
        return { error }
    }
}

export async function createStatement(statement) {
    try { 
        const statementFromDB = await prisma.statement.create({ data: statement })
        return {statement: statementFromDB}
    }catch (error){
        return { error }
    }
}

export async function getUserById(id) {
    try { 
        const statement = await prisma.statement.findUnique({ where: { id } })
        return { statement }
    }catch (error){
        return { error }
    }
}