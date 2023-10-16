import { MenuBar } from '../../components/sideBar/menuBar';
import { Home } from '../home/home';
import './Template.css'


export const Template = ({
    config
}: any) => {
    return (
        <div className='page'>
            <MenuBar />
            <div className='content'>
                {
                    // TODO put the router here
                }
                <Home />
            </div>
        </div>
    );
}