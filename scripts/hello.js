const { exec } = require('child_process');

exec('npm run dev:lint', (err, stdout, stderr) => {
  if (err) {
    console.log(stderr);
  }
  console.log('stdout', stdout);
  console.log(process.env);
  console.log(process.argv[2]);
});
