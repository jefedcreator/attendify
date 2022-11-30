import { createContext, useContext, useState } from "react";

const CreateEventContext = createContext();

export const CreateEventProvider = ({ children }) => {
  const initialValue = {
    title: "",
    symbol: "",
    description: "",
    type: "",
    category: "",
    location: "",
    url: "",
    startDate: "",
    endDate: "",
    banner: "",
    image: "",
  };
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState();
  const [prevBanner, setPrevBanner] = useState();

  return (
    <CreateEventContext.Provider
      value={{
        data,
        loading,
        preview,
        setPreview,
        setLoading,
        prevBanner,
        setPrevBanner,
        setData,
      }}
    >
      {children}
    </CreateEventContext.Provider>
  );
};

export default CreateEventProvider;

export const useCreateEventContext = () => {
  return useContext(CreateEventContext);
};
