export interface contactJson {
  phone : string;
  email: string;
}

export interface EmployeeJson {

  firstName: string;
  lastName: string;
  position : string;
  school : string;

  contacts : contactJson;

  witch : boolean;
  salary : number;
  picture : string;
}

