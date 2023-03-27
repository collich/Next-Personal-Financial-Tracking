import prisma from ".";

export async function getStatements() {
    const statements = await prisma.statement.findMany()
    try { 
        return { statements }
    }catch (error){
        return { error }
    }
}

// export async function createStatement(statement) {
//     try { 
//         const statementFromDB = await prisma.statement.create({ data: statement })
//         return {statement: statementFromDB}
//     }catch (error){
//         return { error }
//     }
// }

export async function createStatement(statement) {
    // if (!statement || !statement.statement) {
    //   return { error: "Invalid statement data" };
    // }
  
    try {
      const statementFromDB = await prisma.statement.create({ data: statement });
      return { statement: statementFromDB };
    } catch (error) {
      console.error(error);
      return { error: "Failed to create statement" };
    }
  }

export async function updateStatement(id, statement) {
    try {
        const statementFromDB = await prisma.statement.update({
            where: {id},
            data: statement,
        })
        return { statement: statementFromDB }
    } catch(error) {
        console.error(error)
        return { error: "Failed to update statement" }
    }
}
  

export async function getStatementById(id) {
    try { 
        const statement = await prisma.statement.findUnique({ where: { id } })
        return { statement }
    }catch (error){
        return { error }
    }
}