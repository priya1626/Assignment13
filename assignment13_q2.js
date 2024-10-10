let contributors = pm.response.json();

const owner = "priya1626";
const repo ="Assignment13";

console.log(`Repository Full name: ${owner}/ ${repo}`);

contributors.forEach(contributor => {console.log(`contributor username`: ${contributor.login}`);
});

pm.test("contributor and Repository Full name", function(){ pm.response.to.have.status(200);}