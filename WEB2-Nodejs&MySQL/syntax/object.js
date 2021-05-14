var members = ['egoing', 'k8805' ,'hoya'];
console.log(members[1]);

for(var i = 0; i < members.length; i++)
{
    console.log('array Loop : ', members[i]);
}

var roles = { // 'Key' : 'value'
    'programmer':'egoing',
    'designer':'k8805',
    'manager':'hoya'
}

console.log(roles.designer); // k8805
console.log(roles['designer']); // k8805

for(var name in roles)
{
    console.log('object => ', name, '|| value => ', roles[name]);
}
