import PermissionType from "./PermissionType";

interface DatabaseItem{
    email : string;
    password : string;
    permission : PermissionType;
}

const Database : DatabaseItem[] = [
    {
        email : "xaolinmatadordeporco@gmail.com",
        password : "123123",
        permission : PermissionType.ADMIN
    },
    {
        email : "emaildaora@gmail.com",
        password : "321321",
        permission : PermissionType.USER
    }
];

export default Database;