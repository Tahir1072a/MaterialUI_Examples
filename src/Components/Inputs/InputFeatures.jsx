import { useRef } from "react";
import { Box, Stack, TextField } from "@mui/material";
import theme from "../../Styles/theme.js";
import { Controller, useForm } from "react-hook-form";

// En basit hali ile isim soy isim alan bir input.
export function BasicTextField() {
  const nameRef = useRef();
  const lastNameRef = useRef();

  function handleSubmit(e) {
    // İlgili olayın default davranışlarını önler. Burada formun default davranışı olan sayfa yenileme ve formu gönderme işlemlerini durdurmuş olduk.
    e.preventDefault();
    alert(`Name: ${nameRef.current.value}`);
    alert(`Last Name: ${lastNameRef.current.value}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      {/*  htmlFor özelliği o lablein hangi input alanına ait olduğunu belirtir.*/}
      <Stack gap={theme.spacing(4)}>
        <Box>
          <label htmlFor={"fname"}>Adınızı Giriniz:</label>
          <input ref={nameRef} id={"fname"} type={"text"} />
        </Box>

        <Box>
          <label htmlFor={"lastName"}>Soyadınızı Giriniz:</label>
          <input ref={lastNameRef} id={"lastName"} type={"text"} />
        </Box>

        <button type={"submit"}>Gönder</button>
      </Stack>
    </form>
  );
}

// TextFieldFeatures'ın react hook form ile kullanılışı.
export function UnControlledTextField() {
  // Use form react-hook-form tarafından bize verilen bir custom hooktur.
  // Bu sistemi kullanırken inputlarımızı kayıt etmemiz gerekir. Böylece react-hook-form ile entegre olsunlar ve onlar tarafında yönetilsinler.
  const {
    register,
    handleSubmit,
    // Errors bu form submit edildiğinde doğrulamardan geçememiş ise ilgili hata mesajlarını tutar.
    formState: { errors },
  } = useForm({
    // Default value kullanamk önerilir. Çünkü bu kayıt yazım hatalarını önlemeye yardımcı olur. Ancak bu özellik typescript kullanırken çalışır.
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    // handle submit fonksiyonu form gönderildiğinde ne yapılacağını ele alır.
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={theme.spacing(4)}>
        <Box>
          <label htmlFor={"fname"}>First Name:</label>
          {/*Burada register nesnesi ile input alanımızın kayıt ettirdik.*/}
          <input
            id={"fname"}
            type={"text"}
            /* Bir doğrulama varsa bu doğrulamadan geçmeden form onSubmit fonksiyonu çalışmaz. */
            {...register("firstName", {
              required: "This field required",
              // Desteklenen ekstra 6 tane daha doğrulama vardır ve bu şekilde kullanılabilir.
              maxLength: {
                message: "İsmin uzunluğu en fazla 6 karakterden oluşabilir!",
                value: 6,
              },
            })}
          />
        </Box>
        {/*Bu şekilde hata mesajlarını ekranda da gösterebiliriz.*/}
        <p>{errors.firstName?.message}</p>
        <Box>
          <label htmlFor={"last-name"}>Last Name:</label>
          <input
            id={"last-name"}
            type={"text"}
            {...register("lastName", { required: "This field required" })}
          />
        </Box>
        <p>{errors.lastName?.message}</p>
        <button type={"submit"}>Gönder</button>
      </Stack>
    </form>
  );
}

// Controller Kullanımı.
export function ControlledTextField() {
  // Eğer hazır bir componentimiz varsa veyahut onu material-ui gibi kütüphaneler ile kullanıyorsak control nesnesi ve controller bileşeni ile yönetebiliriz.
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      firstName: "Tahiri",
    },
  });

  const onSubmit = (data) => console.log(data);

  // Watch fonksiyonu eğer watch() şeklinde kullanılırsa , kayıt olmuş tüm alanları izler. Yani input olarak girilen her değeri return eder.
  // fonskiyon parametre olarak özellikle izlenmek istenen input name girilebilir.
  console.log(watch("firstName"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={theme.spacing(4)}>
        {/*Controller UI olarak hiçbir etkisi yoktur. Sadece hazır bileşenleri kontrol etmeyi kolaylaştırır.*/}
        <Controller
          render={({ field }) => (
            <TextField {...field} variant={"outlined"} label={"First Name"} />
          )}
          /* Bu şekilde doğrulamaları girebiliyoruz. */
          rules={{ required: "This field requrided" }}
          name={"firstName"}
          control={control}
        ></Controller>

        <p>{errors.firstName?.message}</p>

        <button type={"submit"}>Gönder</button>
      </Stack>
    </form>
  );
}
