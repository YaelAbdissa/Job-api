const permissions = [
    'create job',
    'view any job',
    'view job',
    'update job',
    'remove job',

]

const roles = {
    admin: [...permissions],
    user :[
        'view any job',
        'view job',
    ]
}

const users = [
    {
        first_name : "admin",
        last_name :"admin",
        username :"admin",
        email:"super@admin.com",
        password: "admin1234"
    }
]
 

module.exports ={permissions ,roles , users} 
