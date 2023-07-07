"use client";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next-intl/client";
import { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Link from "next-intl/link";
import { InputLabel } from "@mui/material";
import { Label } from "@mui/icons-material";
export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const [isPending, setIsPending] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  function onSelectChange(event) {}
  return (
    <FormControl className="control" sx={{ m: 1, maxWidth: 120 }} size="small">
      <div style={{ position: "absolute", left: "14px", top: "8.5px" }}>
        {locale === "tr" ? "Turkish" : "English"}
      </div>
      <Select disabled={isPending} onChange={onSelectChange}>
        {["tr", "en"].map((cur) => (
          <Link key={cur} href={`${pathname}`} locale={cur}>
            <MenuItem key={cur} value={cur}>
              {t("locale", { locale: cur })}
            </MenuItem>
          </Link>
        ))}
      </Select>
    </FormControl>
  );
}
