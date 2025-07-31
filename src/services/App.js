import { baseUrl } from "./Link";
import { getToken } from "./Token";

// prodactlarni oddiy malumotlari keladigan funkiya
export const getProdact = () => {
  const myHeaders = new Headers();
  getToken() && myHeaders.append("Authorization", `Bearer ${getToken()}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch("https://abzzvx.pythonanywhere.com/products/", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

// categorya boyicha ishledigan funksiya
export const getCategoryData = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`${baseUrl}/categories/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

// bitta mahsulotni malumotlarni olib beruvchi funksiya
export const getOneProdactIdData = (id) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`${baseUrl}/products/${id}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

// brendlarni  olib beruvchi funksiya
export const getBrandsData = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`${baseUrl}/brands/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

// Galareya (yani saytni bosh qismidagi slaydli reklama) uchun funksiya
export const getGalaryData = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`${baseUrl}/galary/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

// like bilan ishlovchi data funksiya
export const getLikeData = () => {
  const myHeaders = new Headers();
  getToken && myHeaders.append("Authorization", `Bearer ${getToken()}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(`${baseUrl}/liked-items/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

// bu like bosilganda kelib tushadigan funksiya
export const postLikeData = (id) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${getToken()}`);

  const raw = JSON.stringify({
    product: id,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(`${baseUrl}/liked-items/add/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
};

// category get item orqali olish funksiyasi bitta categoriya ichidagilarni

export const getCategoryDataId = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(`${baseUrl}/products/?category=3`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};
