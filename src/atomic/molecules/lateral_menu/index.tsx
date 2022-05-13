import React from 'react'
import { ItemMenu, LateralMenuContainer } from './styles'
import Logo from '../../../assets/goonlogolight.svg'
import { useRouter } from 'next/dist/client/router'
import {
  BiMessageAltDetail,
  BiGridAlt,
  BiPackage,
  BiRocket
} from 'react-icons/bi'
import { Row } from 'styles/grids'
import Separator from '@atoms/separator'
interface Menu {
  active?: string
}

const LateralMenu: React.FC<Menu> = ({ active }) => {
  const Navigate = useRouter()

  return (
    <LateralMenuContainer>
      <Row align="center" style={{ height: 50 }}>
        <Logo />
      </Row>
      <ItemMenu
        style={{ background: `${active === 'home' && '#363638'}` }}
        onClick={() => Navigate.push('/dashboard')}
      >
        <BiGridAlt fontSize="19px" fontWeight="400" />
      </ItemMenu>
      <Separator />
      <ItemMenu
        style={{ background: `${active === 'item1' && '#363638'}` }}
        onClick={() => Navigate.push('/vacations')}
      >
        <BiMessageAltDetail fontSize="19px" />
      </ItemMenu>
      <ItemMenu style={{ background: `${active === 'item2' && '#363638'}` }}>
        <BiPackage fontSize="19px" />
      </ItemMenu>
      <ItemMenu style={{ background: `${active === 'item3' && '#363638'}` }}>
        <BiRocket fontSize="19px" />
      </ItemMenu>
    </LateralMenuContainer>
  )
}

export default LateralMenu
