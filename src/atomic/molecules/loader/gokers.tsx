import useResize from 'hooks/use_resize'
import React from 'react'
import ContentLoader from 'react-content-loader'

const LoaderGokers: React.FC = props => {
  return (
    <ContentLoader
      speed={2}
      width={props.width}
      height={256}
      viewBox="0 0 450 256"
      backgroundColor="#d1d1d1"
      foregroundColor="#808080"
      {...props}
    >
      <rect x="8" y="8" rx="0" ry="0" width={props.width} height="84" />
      <rect x="8" y="72" rx="0" ry="0" width={props.width} height="84" />
      <rect x="8" y="135" rx="0" ry="0" width={props.width} height="84" />
      <rect x="8" y="199" rx="0" ry="0" width={props.width} height="84" />
    </ContentLoader>
  )
}

export default LoaderGokers
