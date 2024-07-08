import { Button, Stack, styled } from "@mui/material";
import theme from "../../Styles/theme.js";
import { MdDelete } from "react-icons/md";
import { IoMdCloudUpload } from "react-icons/io";
import { useState } from "react";

const VisuallyHiddenInput = styled("input")({
  // Bileşeni köşeleri 0 pixel boyutunda bir diktörgen şeklinde kırpmaya yarar. Artık bu özellik önerilmez ama bileşeni gizlemek için kullanılabilir.
  clip: "rect(0,0,0,0)",
  // Clip path'de gizleme ile ilgili bir ayardır. Tam gizlensin diye iki ayar birden kullanılmış olabilir. Biri çalışmaz ise öteki çalışsın.
  // Inset özelliği ilgili bileşenin görüntüsünü içe doğru kırpar... %10 görüntünün %10 olarak içe katlanması gibi düşünülebilir. %50 içe katlanırsa bileşen görünmez olur.
  clipPath: "inset(50%)",
  height: 1,
  // overflow: "hidden",
  // Button bileşeninde position=relative olmalı. Bu sayede içinde konumlanabiliyor.
  position: "absolute",
  bottom: 0,
  left: 0,
  // Bu, içerikteki metnin hiçbir yerde satır atlamamasını, yani tek bir uzun satır olarak kalmasını sağlar.
  whiteSpace: "nowrap",
  width: 1,
});

export default function ButtonFeatures() {
  const [file, setFile] = useState(null);
  // const [loading, setLoading] = useState(false);

  // Bu fonksiyon kullanılarak dosya seçme işlemi yönetilebilir.
  function handleFileChange(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      console.log(selectedFile);
      console.log(`Seçilen dosya: ${selectedFile.name}`);
    }
  }

  // Sürükle bırak yöntemi ile dosyaları almak için bu yöntem uygulanabilir.
  function handleDrop(e) {
    e.preventDefault();
    event.stopPropagation();
    const selectedFile = e.dataTransfer.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      console.log(selectedFile);
      console.log(`Seçilen dosya: ${selectedFile.name}`);
    }
  }

  const handleDragOver = (event) => {
    event.preventDefault(); // Bu satır olmazsa tarayıcı dosyayı açmaya çalışır.
    event.stopPropagation(); // Event'in üst elementlere yayılmasını engeller.
  };

  return (
    <Stack spacing={theme.spacing(4)}>
      <Button variant={"outlined"} color={"primary"}>
        Outlined
      </Button>
      <Button variant={"contained"} endIcon={<MdDelete />}>
        Delete
      </Button>
      {/*Buttonlar bir linkede yönlendirebilirler.*/}
      <Button variant={"text"} href={"#"}>
        Text
      </Button>
      {/*Burada kısaca gösterimi yapılacaktır. Daha sonra ayrı bir bileşen altında incelenecek. Şu anda bir bug var. Kullanılamıyor.*/}
      {/*<LoadingButton*/}
      {/*  size={"small"}*/}
      {/*  loading={loading}*/}
      {/*  loadingPosition={"end"}*/}
      {/*  // loadingIndicator={"Custom Indicator..."}*/}
      {/*  onClick={() => setLoading(true)}*/}
      {/*  variant={"Outlined"}*/}
      {/*>*/}
      {/*  Loading Button*/}
      {/*</LoadingButton>*/}
      <Button
        variant={"contained"}
        component={"label"}
        tabIndex={-1}
        startIcon={<IoMdCloudUpload />}
      >
        Upload File
        {/*Seçilen dosyalara event.target.files'dan erişileblir. Value özelliği güvenlik sebebi ile type="file" inputlarından kaldırılmıştır.*/}
        <VisuallyHiddenInput type="file" onChange={handleFileChange} />
      </Button>
      {/*Bu yöntem ile illaki bir input elemanı kullanma gereksinimi ortadan kalkmış olur.*/}
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{
          border: "2px dashed #ccc",
          padding: "20px",
          width: "300px",
          height: "200px",
          color: "#ccc",
          textAlign: "center",
          margin: "20px",
        }}
      >
        {file ? `File: ${file.name}` : "Drag a file here to upload"}
      </div>
    </Stack>
  );
}
