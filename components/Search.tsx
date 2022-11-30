import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { FC } from 'react';

export type InitialType = {
  search: string
}

type PropsType = {
  setSearchValue: (el: InitialType) => void
}

const Search: FC<PropsType> = ({setSearchValue}) => {
  
  const submit = (values: InitialType) => {
    setSearchValue(values)
  }

  const clearInput = (handleReset: () => void) => {
    setSearchValue({search: ''})
    handleReset()
  }

  return (
   <div>
     <Formik
       initialValues={{search: ''} as InitialType}
       onSubmit={(values) => submit(values)}
       enableReinitialize={true}
     >
       {({values, handleChange, handleReset}) => (
         <Form >
           <TextField
             onChange={handleChange}
             value={values.search}
             name="search"
             size='small'
             sx={{width: '250px', color: '#C4C4C4', fontSize: '14px'}}
             placeholder='поиск...'
             InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={()=>clearInput(handleReset)}
                >
                  {values.search ? <ClearIcon /> : <SearchIcon/> }
                </IconButton>
              </InputAdornment>  
              )
             }}
              />
         </Form>
       )}
     </Formik>
   </div>
 )
};

export default Search;