import React, {FC, useState} from 'react';

//a way to display an object
 interface Props {
    name: string;
    age: number;
    email: string;
}

export const Person: FC<Props> = ({name, age, email}) => {
    const [country, setCountry] = useState<string | null>("")
  return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{age}</h1>
      <input type="text" placeholder = "write down your country..." onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setCountry(e.target.value)} />
      {country}
    </div>
  );
}
