import { useState, ChangeEventHandler, SetStateAction, Dispatch } from 'react';

const useInput = (
  initialValue: any = null,
): [
  typeof value,
  ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  Dispatch<SetStateAction<typeof value>>,
] => {
  const [value, setValue] = useState<any>(initialValue);

  const onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    setValue(event.target.value);
  };

  return [value, onChange, setValue];
};
export default useInput;
