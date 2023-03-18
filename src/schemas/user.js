import { Polybase } from "@polybase/client";
const db = new Polybase({ defaultNamespace: "Code_Fi" });
const users = `@public
  collection userdata {
    id: string;
    name: string;
    password: string;
    email: string;
    
    constructor (id: string,name: string,password: string,email: string) {
      this.id = id;
      this.name = name;
      this.password = password;
      this.email = email;
    }
  }`;
const user = async () => {
  const res = await db.applySchema(users, "Code_Fi");
  return db;
};
export default user;
