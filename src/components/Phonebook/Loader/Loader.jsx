import { ThreeCircles } from  'react-loader-spinner'
import css from '../Loader/Loader.module.css'

export const Loader = () => {
  return <div className={css.loader}>
    <ThreeCircles
  height="30"
  width="30"
  color="skyblue"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>
  </div>
}

export const LoaderRoute = () => {
  return <div className={css.loaderRouter}>
    <ThreeCircles
  height="80"
  width="80"
  color="skyblue"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>
  </div>
}