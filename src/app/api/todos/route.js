import fs from 'fs'
import path from 'path'

export async function GET(request) {
    const filePath = path.join(process.cwd(), 'public', 'data.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(fileContents)
    
    return Response.json({data})
}

export async function POST(request) {
    const filePath = path.join(process.cwd(), 'public', 'data.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const currentData = JSON.parse(fileContents);
    const highestId = currentData.reduce((maxId, item) => Math.max(maxId, item.id), 0)
    const data = await request.json()
    const newTask = {
        id: highestId + 1,
        task: data.task,
        dueDate: data.dueDate
    }
    currentData.push(newTask);
    fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2))

    return Response.json({"status":201, message: 'Task added successfully!'})
}

export async function DELETE(request) {
    const filePath = path.join(process.cwd(), 'public', 'data.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const currentData = JSON.parse(fileContents);
    const data = await request.json();
    const idToDelete = data.id;
    const index = currentData.findIndex(item => item.id === idToDelete);   
        currentData.splice(index, 1);
        fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2));
        return new Response({"status": 200, "message": "Task deleted successfully!"});    
}


