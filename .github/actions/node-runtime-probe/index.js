'use strict';

console.log('=== JavaScript action runtime ===');
console.log(`process.version=${process.version}`);
console.log(`process.execPath=${process.execPath}`);
console.log(`process.platform=${process.platform}`);
console.log(`process.arch=${process.arch}`);
console.log(`RUNNER_NAME=${process.env.RUNNER_NAME || 'not set'}`);
console.log(`RUNNER_OS=${process.env.RUNNER_OS || 'not set'}`);
console.log(`AWS_REGION=${process.env.AWS_REGION || 'not set'}`);
console.log(`CODEBUILD_BUILD_ID=${process.env.CODEBUILD_BUILD_ID || 'not set'}`);
