import React, {FC, useState} from 'react';


export enum HairColor {
    Blonde = "Your hair is blonde, good for you",
    Brown = "Cool hair color",
    Pink = "Wow that is so cool"
}

//a way to display an object
 interface Props {
    name: string;
    age: number;
    email: string;
    hairColor: HairColor;
}



export const Person: FC<Props> = ({name, age, email, hairColor}) => {
    const [country, setCountry] = useState<string | null>("")

    //the variable can only be assigned with certain values
    type NameType = "JJ" | "Jack" | "MJ"
    const nameForType: NameType = "JJ"
  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{age}</h1>
      <input type="text" placeholder = "write down your country..." onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setCountry(e.target.value)} />
      {country}
      {hairColor}
    </div>
  );
}
