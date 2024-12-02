import { Form } from 'react-bootstrap'

const MovieDropDown = (props) => {
  return (
    <Form.Select
      aria-label='Default select example'
      value={props.movieTitle}
      onChange={(e) => {
        props.changeMovieTitle(e.target.value)
      }}
    >
      <option>Tre Uomini e una Gamba</option>
      <option>Così è la vita</option>
      <option>La leggenda di Al, John e Jack</option>
      <option>Chiedimi se sono felice</option>
      <option>Tu la conosci Claudia?</option>
    </Form.Select>
  )
}

export default MovieDropDown
