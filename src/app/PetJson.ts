export interface ownerJson {
  firstName : string;
  lastName: string;
}

export interface PetJson {

  id: string;

  name: string;

  petKind : string;
  breed : string;

  picture : string;
  owner : ownerJson;
}

