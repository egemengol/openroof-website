"use client";
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next-intl/client';
import { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const [isPending, setIsPending] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
 
  console.log(pathname);
  function onSelectChange(event) {
    setIsPending(true);
    const saveLocale=localStorage.setItem("lang",event.target.value)
    console.log(localStorage.getItem("lang"));
    const getLocale=localStorage.getItem("lang")
   router.replace(`/${getLocale}${pathname}`);
   console.log(pathname);
  }
 
  return (
    <FormControl className="control" sx={{ m: 1, maxWidth: 120 }} size="small">
         <Select
             defaultValue={locale}
             disabled={isPending}
             onChange={onSelectChange} >
                   {['tr', 'en'].map((cur) => (           
                        <MenuItem  
                              key={cur}
                              value={cur}
                        > 
                          {t('locale', { locale: cur })}
                        </MenuItem>
                    ))}
        </Select>
    </FormControl>
  );
}
 