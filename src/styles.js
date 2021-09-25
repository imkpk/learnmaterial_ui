/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-labels */
/* eslint-disable no-labels */
/* eslint-disable no-unused-expressions */


import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: 'red',
    padding: '8 0 6'
  },
  card: {
    height: '100px',
    display: 'flex',
    flexDirection: 'column'
  },
  button: {
    display: 'inline-block',
    textAlign: 'center',
    borderRadius: '2px',
    boxShadow: '3px'
  },
  icon: {
    marginRight: '40px'
  },
  cardGrid: {
    padding: '20px 0'
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardContent: {
    flexGrow: 1
  }

}))



export default useStyles