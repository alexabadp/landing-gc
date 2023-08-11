import { Box } from "@mui/material";

import BannerLibrary from "../../Components/BannerLibrary/BannerLibrary";
import MaterialesFilters from "../../Components/MaterialFilters/MaterialFilters";
import { useEffect, useState } from "react";
import LibraryHeader from "../../Layouts/Header/LibraryHeader";

const Materiales = () => {
  const url = useState(window.location.href);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [url]);
  return (
    <>
      <LibraryHeader />
      <Box sx={{ background: "#262626", minHeight: "calc(100vh - 300px)" }}>
        <BannerLibrary />

        <MaterialesFilters />
      </Box>
    </>
  );
};

export default Materiales;
