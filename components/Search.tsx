import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Form, Formik, FormikHelpers } from 'formik';
import SearchIcon from '@mui/icons-material/Search';

type InitialType = {
  search: string
}

const submit = (values: InitialType, formikHelpers: FormikHelpers<InitialType>) => {
  console.log(values)
  formikHelpers.resetForm()
}

const Search = () => {
  return (
   <div>
     <Formik
       initialValues={{search: ''} as InitialType}
       onSubmit={(values, formikHelpers) => {
         submit(values, formikHelpers)
       }}
       enableReinitialize={true}
     >
       {({values, handleChange}) => (
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
                >
                  <SearchIcon/>
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