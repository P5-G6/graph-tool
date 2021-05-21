import { useCallback, useEffect, useState } from "react";
import api from "../../services/api";

export default function useHttpReq(method = "get", ...args) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleCall = useCallback(async () => {
    setLoading(true);
    const { data: response } = await api[method](...args);
    setData(response);
    setLoading(false);
  }, [method, args]);

  return { data, loading, call: handleCall };
}
