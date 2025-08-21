import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/ff7f40c44ff6bb383af60905/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res.conversion_rates)) // ✅ correct path
      .catch((err) => console.error("Error fetching currency data:", err))
  }, [currency])

  return data
}

export default useCurrencyInfo
