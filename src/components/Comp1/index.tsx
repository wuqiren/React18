import styles from './comp1.module.scss'
import {Button} from 'antd'
function Comp() {
    return <div className={styles.box}>
        Comp1的内容
        <Button type='primary'>111</Button>
    </div>
}
export default Comp