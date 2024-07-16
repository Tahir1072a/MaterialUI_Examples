import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useState } from "react";

const data = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `Item ${index + 1}`,
  value: Math.floor(Math.random() * 100),
}));

export default function TableFeatures() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Sayfa değiştirmek için kullanılan fonksiyon.
  const handleChangePage = (event, newPage) => {
    console.log(newPage);
    setPage(newPage);
  };

  // Bir sayfada görüntülenecek row sayısı değiştirmek istendiğinde tetiklenecek fonksiyon.
  const handleChangeRowsPerPage = (event) => {
    // İkinci parametre hangi tabanda sayı çevirme işlemi yapılacağını gösterir.
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Son item göstermeme bug'ı için küçük bir iyileştirme.
  const displayedData =
    rowsPerPage > 0
      ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : data;

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedData.map((data, index) => (
            <TableRow key={index}>
              <TableCell>{data.id}</TableCell>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            {/*  Aslında gelişmiş özelliklere sahip bir tableCell den ibarettir. */}
            <TablePagination
              /*  Kullanıcı bir select componenti ile bir sayfada ne kadar row olması gerektiğini ayarlayabilir.*/
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              // 3 hücrelik bir alan kaplayacak bir hücre.
              colSpan={3}
              slotProps={{
                select: {
                  inputProps: { "aria-label": "rows-per-page" },
                  native: true,
                },
              }}
              // Verilen datanın uzunluğu
              count={data.length}
              // Current page, hangi sayfada isek gösterecek.
              page={page}
              // Bir sayfada ne kadar data olacağını belirtir. Bunun yanlış girilmesi olmayan datayı göstermeye çalışma veyahut var olan dataları eksik gösterme
              // vb. sorunlara sebep olur.
              rowsPerPage={rowsPerPage}
              // Sayfanın değişme olayını ele alır.
              onPageChange={handleChangePage}
              // Sayfa başına gösterilecek olan satır sayısımı miktarının değişmesi durumunu ele alır.
              onRowsPerPageChange={handleChangeRowsPerPage}
            ></TablePagination>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
