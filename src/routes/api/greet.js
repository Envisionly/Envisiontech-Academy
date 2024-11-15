// src/routes/api/greet.js
import { spawn } from 'child_process';

/**
 * @param {{ request: Request }} param0
 */
export async function post({ request }) {
  const body = await request.json();
  const pythonProcess = spawn('python', ['script.py']);

  return new Promise((resolve, reject) => {
    let result = '';
    pythonProcess.stdin.write(JSON.stringify(body));
    pythonProcess.stdin.end();

    pythonProcess.stdout.on('data', (data) => {
      result += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
      reject(new Error(data.toString()));
    });

    pythonProcess.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`Python script exited with code ${code}`));
      } else {
        resolve({
          status: 200,
          body: JSON.parse(result)
        });
      }
    });
  });
}