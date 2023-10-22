import { useEffect, useState } from "react"

export function useCurrentLocation(){
    const [location, setLocation] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                setLocation([
                    latitude = position.coords.latitude,
                    longitude = position.coords.longitude,
                ]);
                setLoading(false);
              },
              (error) => {
                setError(error);
                setLoading(false);
              }
            );
          } else {
            setError(new Error("Geolocation is not supported by this browser."));
            setLoading(false);
          }
    },[]) 

    function getCurrentLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
            },
            (error) => {
              setError(error);
            }
          );
        } else {
          setError(new Error("Geolocation is not supported by this browser."));
        }
      }

    return {location, error, loading, getCurrentLocation}
}