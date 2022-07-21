
import { AsyncPaginate } from  "react-select-async-paginate"
import { geoApiOptions, GEO_API_URL } from "../../api.js"



const Search = ({onSearchChange, search}) => {

    

    const handleOnChange = (searchData) => {
        onSearchChange(searchData);
    }

    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?namePrefix=${inputValue}`, geoApiOptions)
        .then(response => response.json())
        .then(response => {
            return {
                options: response.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label:  `${city.name}, ${city.country}` ,
                    }
                })
            }
        })
        .catch(err => console.error(err));
    }

    return (
    <AsyncPaginate
    placeholder="Search for Location"
    debounceTimeout={600}
    value={search}  
    onChange={handleOnChange}
    loadOptions={loadOptions}
    />

  )
}

export default Search