import { useState } from 'react';

const useDate = (): TDate => {
  const newDate = new Date();
  const [date, setCurrentDate] = useState(newDate);

  return {
    day: newDate.getDate(),
    year: newDate.getFullYear(),
    month: newDate.getMonth() + 1,
  };
};

export default useDate;
