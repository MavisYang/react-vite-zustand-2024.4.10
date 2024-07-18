/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-15 19:51:20
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-06-21 09:16:20
 * @Description:
 */
import { useGlobalStore } from '@stores/index'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
interface MenuCollapsedProps {
    text?: string
    style?: React.CSSProperties
    borderTop?: boolean
}
const MenuCollapsed = (props: MenuCollapsedProps) => {
    const { collapsed, setCollapsed } = useGlobalStore() //菜单栏收起
    const { text = '', style } = props
    // ${!collapsed ? styles.menuCollapsedRight : ''}
    return (
        <div
            className={`${styles.menuCollapsed} `}
            style={{ ...style, borderTop: props.borderTop ? '1px solid #e8e8e8' : '' }}
            onClick={() => setCollapsed(!collapsed)}
        >
            {collapsed ? (
                <MenuUnfoldOutlined className={styles.collapsedIcon} />
            ) : (
                <>
                    {text && <span className='mr-4'>{text}</span>}
                    <MenuFoldOutlined className={styles.collapsedIcon} />
                </>
            )}
        </div>
    )
}

export default MenuCollapsed
