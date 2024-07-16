import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function BasicTable() {
  function createData(id, name, calories, fat, carbs, protein) {
    return {
      id,
      name,
      calories,
      fat,
      carbs,
      protein,
    };
  }

  const rows = [
    createData(1, "Cupcake", 305, 3.7, 67, 4.3),
    createData(2, "Donut", 452, 25.0, 51, 4.9),
    createData(3, "Eclair", 262, 16.0, 24, 6.0),
    createData(4, "Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
    createData(6, "Honeycomb", 408, 3.2, 87, 6.5),
    createData(7, "Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData(8, "Jelly Bean", 375, 0.0, 94, 0.0),
    createData(9, "KitKat", 518, 26.0, 65, 7.0),
    createData(10, "Lollipop", 392, 0.2, 98, 0.0),
    createData(11, "Marshmallow", 318, 0, 81, 2.0),
    createData(12, "Nougat", 360, 19.0, 9, 37.0),
    createData(13, "Oreo", 437, 18.0, 63, 4.0),
  ];

  return (
    <TableContainer component={Paper}>
      {/*Eğer burada size: "small" olarak ayarlanmışsa boşluksuz/Dense table oluşturulur. */}
      <Table sx={{ minWidth: 650 }} size={"small"}>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align={"right"}>Calories</TableCell>
            <TableCell align={"right"}>Fat&nbsp;(g)</TableCell>
            <TableCell align={"right"}>Carbs&nbsp;(g)</TableCell>
            <TableCell align={"right"}>Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {/*  Buradaki scope ve component propları bu hücrenin ilgili satırın başlığı, baş hücresi olduğunu dile getirir.*/}
              <TableCell component={"th"} scope={"row"}>
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
