import { Box } from "@mui/material";

import BannerLibrary from "../../Components/BannerLibrary/BannerLibrary";
import EscaneoFilters from "../../Components/EscaneoFilters/EscaneoFilters";
import { useEffect, useState } from "react";
import ClavesFilters from "../../Components/ClavesFilters/ClavesFilter";

const Escaneos = () => {
  const url = useState(window.location.href);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [url]);

  return (
    <>
      <Box sx={{ background: "#262626", minHeight: "calc(100vh - 300px)" }}>
        <BannerLibrary />

        <EscaneoFilters />

        <ClavesFilters />
      </Box>
    </>
  );
};

export default Escaneos;
