// components/Icon.js
import dynamic from 'next/dynamic'

const Icon = ({ name, ...props }) => {
  const IconComponent = dynamic(() => import(`../icons/${name}.svg`))
  return <IconComponent {...props} />
}

// // 使用
// function MyComponent() {
//   return <Icon name="home" width={24} height={24} />
// }