import React, { useState, useEffect } from 'react';
import './sci.css';
import { getScis } from "@/data/data";
import Link from 'next/link';

interface SciItem {
  id: number;
  icon: string;
  link: string;
}

const baseURL = "https://"

export default function Sci() {
  const [scis, setScis] = useState<SciItem[]>([]); // Type the state here

  useEffect(() => {
    async function fetchData() {
      const scisData = await getScis();
      setScis(scisData);
    }
    fetchData();
  }, []);

  return (
    <div>
      {scis.map(sci => (
        <Link href={`${baseURL}${sci.link}`} key={sci.id} target='_blank' className='mx-2'>
          <span className={sci.icon}></span>
        </Link>
      ))}
    </div>
  );
}
