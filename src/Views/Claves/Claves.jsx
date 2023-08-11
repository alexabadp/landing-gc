import { Box } from "@mui/material";

import BannerLibrary from "../../Components/BannerLibrary/BannerLibrary";
import ClavesFilters from "../../Components/ClavesFilters/ClavesFilter";
import { useEffect, useState } from "react";
import LibraryHeader from "../../Layouts/Header/LibraryHeader";

const Claves = () => {
  const url = useState(window.location.href);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [url]);
  return (
    <>
      <LibraryHeader />
      <Box sx={{ background: "#262626", minHeight: "calc(100vh - 300px)" }}>
        <BannerLibrary />

        <ClavesFilters />
      </Box>
    </>
  );
};

export default Claves;
